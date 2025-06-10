import React, { useState, useRef } from 'react';
import { database, storage } from '../firebaseConfig';
import { ref as dbRef, push, set } from 'firebase/database';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

const topics = [
  { id: 'land', label: 'Land Issues' },
  { id: 'schemes', label: 'Government Schemes' },
  { id: 'pension', label: 'Pension / Widow Help' },
  { id: 'domestic', label: 'Domestic Problems' },
  { id: 'job', label: 'Job / Wages' },
];

function WhatHelp() {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [followUpAnswers, setFollowUpAnswers] = useState({});
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);
  const [voiceRecording, setVoiceRecording] = useState(null);
  const [summary, setSummary] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  // Placeholder follow-up questions per topic
  const followUpQuestions = {
    land: [
      'Is this related to land ownership or dispute?',
      'How long has this issue been ongoing?',
    ],
    schemes: [
      'Which government scheme are you interested in?',
      'Have you applied before?',
    ],
    pension: [
      'Are you currently receiving any pension?',
      'Do you have the necessary documents?',
    ],
    domestic: [
      'Is this an urgent safety issue?',
      'Have you contacted any local authorities?',
    ],
    job: [
      'Is this about unpaid wages or job loss?',
      'Have you filed any complaint?',
    ],
  };

  const handleTopicChange = (e) => {
    setSelectedTopic(e.target.value);
    setFollowUpAnswers({});
    setSummary('');
  };

  const handleFollowUpChange = (index, value) => {
    setFollowUpAnswers((prev) => ({ ...prev, [index]: value }));
  };

  const handlePhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const startRecording = async () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      alert('Media devices API not supported in this browser.');
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];
      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };
      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        setVoiceRecording(audioBlob);
      };
      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (err) {
      alert('Error accessing microphone: ' + err.message);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const generateSummary = () => {
    let sum = `Topic: ${topics.find(t => t.id === selectedTopic)?.label || ''}\n`;
    sum += 'Follow-up answers:\n';
    Object.values(followUpAnswers).forEach((ans, idx) => {
      sum += `  Q${idx + 1}: ${ans}\n`;
    });
    sum += `Description: ${description}\n`;
    sum += photo ? 'Photo attached.\n' : '';
    sum += voiceRecording ? 'Voice recording attached.\n' : '';
    setSummary(sum);
  };

  const handleSubmit = async () => {
    generateSummary();

    try {
      let photoURL = null;
      let voiceURL = null;

      if (photo) {
        const photoStorageRef = storageRef(storage, `photos/${photo.name}-${Date.now()}`);
        await uploadBytes(photoStorageRef, photo);
        photoURL = await getDownloadURL(photoStorageRef);
      }

      if (voiceRecording) {
        const voiceStorageRef = storageRef(storage, `voiceRecordings/voice-${Date.now()}.webm`);
        await uploadBytes(voiceStorageRef, voiceRecording);
        voiceURL = await getDownloadURL(voiceStorageRef);
      }

      const requestsRef = dbRef(database, 'requests');
      const newRequestRef = push(requestsRef);
      await set(newRequestRef, {
        topic: topics.find(t => t.id === selectedTopic)?.label || '',
        followUpAnswers,
        description,
        photoURL,
        voiceURL,
        timestamp: Date.now(),
      });

      alert('Request submitted successfully!');
      // Reset form
      setSelectedTopic('');
      setFollowUpAnswers({});
      setDescription('');
      setPhoto(null);
      setVoiceRecording(null);
      setSummary('');
    } catch (error) {
      alert('Error submitting request: ' + error.message);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">What Help Do You Need?</h2>

      <label htmlFor="topic" className="block font-semibold">
        Choose a topic
      </label>
      <select
        id="topic"
        value={selectedTopic}
        onChange={handleTopicChange}
        className="w-full border border-gray-400 rounded p-2"
      >
        <option value="">-- Select a topic --</option>
        {topics.map((topic) => (
          <option key={topic.id} value={topic.id}>
            {topic.label}
          </option>
        ))}
      </select>

      {selectedTopic && (
        <div className="space-y-4">
          {followUpQuestions[selectedTopic].map((q, idx) => (
            <div key={idx}>
              <label className="block font-semibold">{q}</label>
              <input
                type="text"
                value={followUpAnswers[idx] || ''}
                onChange={(e) => handleFollowUpChange(idx, e.target.value)}
                className="w-full border border-gray-400 rounded p-2"
              />
            </div>
          ))}

          <label className="block font-semibold">Describe your problem</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full border border-gray-400 rounded p-2"
            placeholder="You can also record voice or attach a photo"
          />

          <label className="block font-semibold">Attach a photo</label>
          <input type="file" accept="image/*" onChange={handlePhotoChange} />

          <div className="mt-4">
            <button
              onClick={isRecording ? stopRecording : startRecording}
              className={`px-4 py-2 rounded text-white ${
                isRecording ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              {isRecording ? 'Stop Recording' : 'Record Voice Description'}
            </button>
          </div>

          {summary && (
            <div className="mt-4 p-4 border border-gray-400 rounded whitespace-pre-wrap bg-gray-50">
              <h3 className="font-semibold mb-2">Summary</h3>
              <pre>{summary}</pre>
              <button
                onClick={() => alert('Calling volunteer/legal aid (demo)')}
                className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Call Volunteer / Legal Aid
              </button>
            </div>
          )}

          <button
            onClick={handleSubmit}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default WhatHelp;
