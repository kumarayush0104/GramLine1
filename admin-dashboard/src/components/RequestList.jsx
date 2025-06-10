import React, { useEffect, useState } from 'react';
import { database } from '../firebaseConfig';
import { ref as dbRef, onValue, update } from 'firebase/database';

function RequestList() {
  const [requests, setRequests] = useState({});
  const [loading, setLoading] = useState(true);
  const [assigning, setAssigning] = useState(null);
  const [helperName, setHelperName] = useState('');

  useEffect(() => {
    const requestsRef = dbRef(database, 'requests');
    const unsubscribe = onValue(requestsRef, (snapshot) => {
      const data = snapshot.val() || {};
      setRequests(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleAssign = async (requestId) => {
    if (!helperName) {
      alert('Please enter helper name');
      return;
    }
    setAssigning(requestId);
    try {
      const requestRef = dbRef(database, `requests/${requestId}`);
      await update(requestRef, { assignedHelper: helperName, status: 'Assigned' });
      alert('Helper assigned successfully');
      setHelperName('');
      setAssigning(null);
    } catch (error) {
      alert('Error assigning helper: ' + error.message);
      setAssigning(null);
    }
  };

  if (loading) {
    return <p>Loading requests...</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">User Requests</h2>
      {Object.keys(requests).length === 0 && <p>No requests found.</p>}
      <ul className="space-y-4">
        {Object.entries(requests).map(([id, req]) => (
          <li key={id} className="border p-4 rounded shadow">
            <p><strong>Topic:</strong> {req.topic}</p>
            <p><strong>Description:</strong> {req.description}</p>
            <p><strong>Status:</strong> {req.status || 'New'}</p>
            <p><strong>Assigned Helper:</strong> {req.assignedHelper || 'None'}</p>
            {req.photoURL && (
              <p>
                <strong>Photo:</strong>{' '}
                <a href={req.photoURL} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  View
                </a>
              </p>
            )}
            {req.voiceURL && (
              <p>
                <strong>Voice Recording:</strong>{' '}
                <audio controls src={req.voiceURL} className="mt-2" />
              </p>
            )}
            <div className="mt-2 flex space-x-2">
              <input
                type="text"
                placeholder="Helper name"
                value={helperName}
                onChange={(e) => setHelperName(e.target.value)}
                className="border border-gray-400 rounded p-1 flex-grow"
              />
              <button
                onClick={() => handleAssign(id)}
                disabled={assigning === id}
                className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 disabled:opacity-50"
              >
                {assigning === id ? 'Assigning...' : 'Assign'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RequestList;
