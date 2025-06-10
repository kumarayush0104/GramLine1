import React from 'react';

function FindNearbyHelp() {
  // Placeholder data for legal aid locations
  const locations = [
    {
      id: 1,
      name: 'Vidhi Seva Legal Aid Clinic',
      openHours: 'Open - Closes 5:00 PM',
      phone: '+911234567890',
      whatsapp: '+911234567890',
      lat: 12.9716,
      lng: 77.5946,
    },
    {
      id: 2,
      name: 'NGO Support Center',
      openHours: 'Open - Closes 6:00 PM',
      phone: '+919876543210',
      whatsapp: '+919876543210',
      lat: 12.2958,
      lng: 76.6394,
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Find Nearby Help</h2>
      <p>Map and list view of legal aid clinics, NGOs, and district offices.</p>

      {/* Map placeholder */}
      <div className="w-full h-64 bg-gray-200 rounded flex items-center justify-center text-gray-600">
        Map will be here (to be implemented)
      </div>

      {/* List of locations */}
      <ul className="space-y-4">
        {locations.map((loc) => (
          <li key={loc.id} className="border border-gray-300 rounded p-4 flex flex-col space-y-2">
            <div className="font-semibold text-lg">{loc.name}</div>
            <div>{loc.openHours}</div>
            <div className="flex space-x-4">
              <a
                href={`tel:${loc.phone}`}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                aria-label={`Call ${loc.name}`}
              >
                Call
              </a>
              <a
                href={`https://wa.me/${loc.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                aria-label={`WhatsApp ${loc.name}`}
              >
                WhatsApp
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FindNearbyHelp;
