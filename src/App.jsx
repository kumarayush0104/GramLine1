import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import LanguageSelector from './components/LanguageSelector';
import Home from './pages/Home';
import WhatHelp from './pages/WhatHelp';
import AskWithVoice from './pages/AskWithVoice';
import KnowYourRights from './pages/KnowYourRights';
import FindNearbyHelp from './pages/FindNearbyHelp';

function App() {
  const [language, setLanguage] = useState('en');

  return (
    <Router>
      <div className="min-h-screen bg-white text-black flex flex-col">
        <header className="p-4 flex justify-between items-center border-b border-gray-300">
          <h1 className="text-xl font-bold">GramLINE</h1>
          <LanguageSelector language={language} setLanguage={setLanguage} />
          <Link
            to="/admin"
            className="ml-4 px-3 py-1 border border-gray-500 rounded hover:bg-gray-100"
            aria-label="Admin Dashboard"
          >
            Admin
          </Link>
        </header>
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/what-help" element={<WhatHelp language={language} />} />
            <Route path="/ask-voice" element={<AskWithVoice language={language} />} />
            <Route path="/know-rights" element={<KnowYourRights language={language} />} />
            <Route path="/find-help" element={<FindNearbyHelp language={language} />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

import AdminDashboard from '../admin-dashboard/src/App.jsx';

export default App;
