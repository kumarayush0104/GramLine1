import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import LanguageSelector from './components/LanguageSelector';
import Home from './pages/Home';
import WhatHelp from './pages/WhatHelp';
import AskWithVoice from './pages/AskWithVoice';
import KnowYourRights from './pages/KnowYourRights';
import FindNearbyHelp from './pages/FindNearbyHelp';
import AdminDashboard from '../admin-dashboard/src/App.jsx';

function App() {
  const [language, setLanguage] = useState('en');
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-blue-50 to-purple-100 font-sans">
        {/* Header */}
        <header className="p-4 flex justify-between items-center border-b border-gray-300 shadow-md bg-white/80 backdrop-blur-md sticky top-0 z-50">
          <h1 className="text-2xl font-extrabold text-indigo-700 tracking-wide">GramLINE</h1>
          <div className="flex items-center gap-4">
            <LanguageSelector language={language} setLanguage={setLanguage} />
            <Link
              to="/admin"
              className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition duration-300"
              aria-label="Admin Dashboard"
            >
              Admin
            </Link>
          </div>
        </header>
        {/* Main Content */}
        <main className="flex-grow p-6 sm:p-10 max-w-4xl mx-auto w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/what-help" element={<WhatHelp language={language} />} />
            <Route path="/ask-voice" element={<AskWithVoice language={language} />} />
            <Route path="/know-rights" element={<KnowYourRights language={language} />} />
            <Route path="/find-help" element={<FindNearbyHelp language={language} />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
        <footer className="text-center text-sm text-gray-500 p-4 border-t border-gray-200">
          © {new Date().getFullYear()} GramLINE. Empowering Rural Voices.
        </footer>
      </div>
    </Router>
  );
}

export default App;
