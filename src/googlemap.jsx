import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import helpCenters from "./helpCentersData";

const mapContainerStyle = {
  height: "80vh",
  width: "100%",
};

const center = {
  lat: 26.8467, // Default center (Lucknow)
  lng: 80.9462,
};

function GoogleMapView() {
  const apiKey = "AIzaSyDsNLxa08wiHiQy6rfI37bmFnZW7LnP5ds" ; 

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={7}>
        {helpCenters.map((center, index) => (
          <Marker
            key={index}
            position={{ lat: center.lat, lng: center.lng }}
            title={center.name}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default GoogleMapView;
