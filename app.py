import React, { useState, useRef, useEffect } from "react";

export default function AskWithVoice() {
  const [recording, setRecording] = useState(false);
  const [permission, setPermission] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [connecting, setConnecting] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const audioPlayerRef = useRef(null);

  useEffect(() => {
    if (audioUrl && audioPlayerRef.current) {
      audioPlayerRef.current.play();
    }
  }, [audioUrl]);

  const requestPermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setPermission(true);
      stream.getTracks().forEach((track) => track.stop());
    } catch (err) {
      setPermission(false);
      alert("Microphone permission denied");
    }
  };

  const startRecording = async () => {
    if (!permission) {
      await requestPermission();
      if (!permission) return;
    }

    setConnecting(true);
    // Start voice assistant backend immediately on mic start
    try {
      await fetch("http://localhost:5000/api/voice/start", { method: "POST" });
      // Simulate 20 seconds connection delay
      await new Promise((resolve) => setTimeout(resolve, 20000));
    } catch (error) {
      console.error("Error starting voice assistant:", error);
    }
    setConnecting(false);

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);
    audioChunksRef.current = [];

    mediaRecorderRef.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        audioChunksRef.current.push(event.data);
      }
    };

    mediaRecorderRef.current.onstop = async () => {
      const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
      const arrayBuffer = await audioBlob.arrayBuffer();
      const base64Audio = arrayBufferToBase64(arrayBuffer);

      // Send audio to backend
      try {
        const response = await fetch("http://localhost:5000/api/voice", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ audio: base64Audio }),
        });
        const data = await response.json();
        if (data.audio_response) {
          const audioResponseBlob = base64ToBlob(data.audio_response, "audio/pcm");
          const audioResponseUrl = URL.createObjectURL(audioResponseBlob);
          setAudioUrl(audioResponseUrl);
        } else {
          alert("No audio response from server");
        }
      } catch (error) {
        alert("Error communicating with voice assistant");
      }
    };

    mediaRecorderRef.current.start();
    setRecording(true);
  };

  const stopRecording = async () => {
    if (mediaRecorderRef.current && recording) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach((track) => track.stop());
      setRecording(false);

      // Stop voice assistant backend immediately on mic stop
      try {
        await fetch("http://localhost:5000/api/voice/stop", { method: "POST" });
      } catch (error) {
        console.error("Error stopping voice assistant:", error);
      }
    }
  };

  const arrayBufferToBase64 = (buffer) => {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  const base64ToBlob = (base64, mime) => {
    const byteChars = atob(base64);
    const byteNumbers = new Array(byteChars.length);
    for (let i = 0; i < byteChars.length; i++) {
      byteNumbers[i] = byteChars.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: mime });
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-4 bg-white rounded-lg shadow-md max-w-md mx-auto mt-10">
      {connecting && (
        <div className="mb-4 text-blue-600 font-semibold">
          Please wait, connecting to voice assistant...
        </div>
      )}
      <button
        onClick={recording ? stopRecording : startRecording}
        className={`p-4 rounded-full focus:outline-none transition-colors duration-300 ${
          recording ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
        }`}
        aria-label={recording ? "Stop recording" : "Start recording"}
      >
        {recording ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <rect x="6" y="6" width="12" height="12" rx="2" ry="2" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke="none"
          >
            <path d="M12 14a3 3 0 003-3V7a3 3 0 00-6 0v4a3 3 0 003 3z" />
            <path d="M19 11a1 1 0 00-2 0 5 5 0 01-10 0 1 1 0 00-2 0 7 7 0 006 6.92V21h2v-3.08A7 7 0 0019 11z" />
          </svg>
        )}
      </button>
      {audioUrl && (
        <audio ref={audioPlayerRef} src={audioUrl} controls className="mt-4 w-full" />
      )}
    </div>
  );
}
