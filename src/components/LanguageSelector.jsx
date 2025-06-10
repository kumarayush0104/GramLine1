import React from 'react';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'ta', label: 'தமிழ்' },
  { code: 'te', label: 'తెలుగు' },
  { code: 'bn', label: 'বাংলা' },
];

function LanguageSelector({ language, setLanguage }) {
  return (
    <select
      aria-label="Select Language"
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className="border border-gray-400 rounded p-1 text-sm"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  );
}

export default LanguageSelector;
