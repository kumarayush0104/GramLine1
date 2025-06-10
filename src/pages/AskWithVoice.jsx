import React, { useState, useEffect, useRef } from 'react';

function AskWithVoice() {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const recognitionRef = useRef(null);

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Web Speech API is not supported in this browser.');
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      setTranscript(speechResult);
      setListening(false);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error', event.error);
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognitionRef.current = recognition;
  }, []);

  const startListening = () => {
    if (recognitionRef.current && !listening) {
      setTranscript('');
      setListening(true);
      recognitionRef.current.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && listening) {
      recognitionRef.current.stop();
      setListening(false);
    }
  };

  const handleSubmit = () => {
    alert(`You asked: ${transcript}`);
    // Here you would process the voice input and provide help
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Ask with Voice</h2>
      <button
        onClick={listening ? stopListening : startListening}
        className={`px-6 py-3 rounded text-white ${
          listening ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
        }`}
        aria-pressed={listening}
      >
        {listening ? 'Stop Listening' : 'Start Listening'}
      </button>
      <p className="mt-4 p-4 border border-gray-400 rounded min-h-[80px]">
        {transcript || 'Your voice input will appear here...'}
      </p>
      <button
        onClick={handleSubmit}
        disabled={!transcript}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        Submit
      </button>
    </div>
  );
}

export default AskWithVoice;
