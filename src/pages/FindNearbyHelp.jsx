import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import helpCenters from '../helpCentersData';
import 'leaflet/dist/leaflet.css';

// Fix leaflet's default icon issue with webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL('leaflet/dist/images/marker-icon-2x.png', import.meta.url).href,
  iconUrl: new URL('leaflet/dist/images/marker-icon.png', import.meta.url).href,
  shadowUrl: new URL('leaflet/dist/images/marker-shadow.png', import.meta.url).href,
});

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

function FindNearbyHelp() {
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const [nearbyCenters, setNearbyCenters] = useState([]);

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by your browser');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLoc = [position.coords.latitude, position.coords.longitude];
        setUserLocation(userLoc);

        // Calculate distance and filter nearby centers within 40 km
        const filteredCenters = helpCenters.filter((center) => {
          const distance = getDistanceFromLatLonInKm(
            userLoc[0],
            userLoc[1],
            center.lat,
            center.lng
          );
          return distance <= 40; // 40 km radius
        });
        setNearbyCenters(filteredCenters);
      },
      (error) => {
        setLocationError('Unable to retrieve your location');
      }
    );
  }, []);

  const defaultCenter = [26.8467, 80.9462]; // Default center (Lucknow, UP)

  // Haversine formula to calculate distance between two lat/lng points in km
  function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
  }

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Find Nearby Help</h2>
      <p>Map and list view of legal aid clinics, NGOs, and district offices.</p>

      <div className="w-full h-96 rounded overflow-hidden">
        <MapContainer
          center={userLocation || defaultCenter}
          zoom={13}
          scrollWheelZoom={true}
          style={{ height: '100%', width: '100%' }}
        >
          <ChangeView center={userLocation || defaultCenter} zoom={13} />
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {userLocation && (
            <Marker position={userLocation}>
              <Popup>Your Location</Popup>
            </Marker>
          )}
          {nearbyCenters.map((center) => (
            <Marker key={center.id} position={[center.lat, center.lng]}>
              <Popup>
                <div>
                  <strong>{center.name}</strong>
                  <br />
                  {center.address}
                  <br />
                  Phone: {center.phone}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {locationError && (
        <p className="text-red-600 mt-2">{locationError}</p>
      )}

      {/* List of locations */}
      <ul className="space-y-4">
        {nearbyCenters.map((loc) => (
          <li key={loc.id} className="border border-gray-300 rounded p-4 flex flex-col space-y-2">
            <div className="font-semibold text-lg">{loc.name}</div>
            <div>{loc.address}</div>
            <div className="flex space-x-4">
              <a
                href={`tel:${loc.phone}`}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                aria-label={`Call ${loc.name}`}
              >
                Call
              </a>
              {loc.whatsapp && (
                <a
                  href={`https://wa.me/${loc.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  aria-label={`WhatsApp ${loc.name}`}
                >
                  WhatsApp
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FindNearbyHelp;
