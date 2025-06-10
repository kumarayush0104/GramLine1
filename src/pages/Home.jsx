import React from 'react';
import { Link } from 'react-router-dom';
import { ChatTeardropText, Microphone, BookOpen, MapPin } from 'phosphor-react';

function Home() {
  return (
    <div className="flex flex-col space-y-6">
      <Link
        to="/what-help"
        className="flex items-center justify-center p-6 bg-blue-600 text-white rounded-lg text-xl font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="What Help Do You Need?"
      >
        <ChatTeardropText size={48} />
        <span className="ml-3">What Help Do You Need?</span>
      </Link>

      <Link
        to="/ask-voice"
        className="flex items-center justify-center p-6 bg-green-600 text-white rounded-lg text-xl font-semibold shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
        aria-label="Ask with Voice"
      >
        <Microphone size={48} />
        <span className="ml-3">Ask with Voice</span>
      </Link>

      <Link
        to="/know-rights"
        className="flex items-center justify-center p-6 bg-yellow-600 text-white rounded-lg text-xl font-semibold shadow-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        aria-label="Know Your Rights"
      >
        <BookOpen size={48} />
        <span className="ml-3">Know Your Rights</span>
      </Link>

      <Link
        to="/find-help"
        className="flex items-center justify-center p-6 bg-purple-600 text-white rounded-lg text-xl font-semibold shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
        aria-label="Find Nearby Help"
      >
        <MapPin size={48} />
        <span className="ml-3">Find Nearby Help</span>
      </Link>
    </div>
  );
}

export default Home;
