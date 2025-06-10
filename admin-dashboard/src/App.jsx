import React, { useState, useEffect } from 'react';
import { auth } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import Login from './components/Login';
import RequestList from './components/RequestList';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">GramLINE Admin Dashboard</h1>
      <RequestList />
    </div>
  );
}

export default App;
