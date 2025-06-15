import React from 'react';

const videos = [
  {
    id: 'dQw4w9WgXcQ', // example YouTube video ID
    title: 'Legal Rights Overview',
    description: 'An overview of your legal rights in various situations.',
    subtitles: '/subtitles/legal_rights_overview.vtt',
  },
  {
    id: '3JZ_D3ELwOQ',
    title: 'Government Schemes Explained',
    description: 'Detailed explanation of government pension and welfare schemes.',
    subtitles: '/subtitles/govt_schemes_explained.vtt',
  },
  {
    id: 'V-_O7nl0Ii0',
    title: 'How to File Complaints',
    description: 'Step-by-step guide on filing complaints for unpaid wages and other issues.',
    subtitles: '/subtitles/how_to_file_complaints.vtt',
  },
];

function KnowYourRights() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-4xl font-extrabold text-center text-gray-900">Know Your Rights</h2>
      <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto">
        This is the offline-accessible learning hub with videos and step-by-step guides.
      </p>

      <section>
        <h3 className="text-3xl font-semibold mb-6 border-b-2 border-indigo-500 pb-2">Videos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {videos.map(({ id, title, description, subtitles }) => (
            <div
              key={id}
              className="border rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 bg-white"
            >
              <div
                className="mb-4 rounded-lg overflow-hidden"
                style={{ maxWidth: '1920px', width: '100%', aspectRatio: '16 / 9' }}
              ><iframe
  src={`https://www.youtube.com/embed/${id}`}  // ✅ Correct JSX with string interpolation
  title={title}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  className="w-full h-full rounded-lg"
/>

              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{title}</h4>
              <p className="text-gray-700 text-base">{description}</p>
              {/* Subtitles are not directly supported in iframe embeds; 
                  users can enable captions on YouTube player */}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-3xl font-semibold mb-6 border-b-2 border-indigo-500 pb-2">Step-by-step Guides</h3>
        <ul className="list-disc list-inside space-y-3 text-gray-900 text-lg max-w-3xl mx-auto">
          <li>How to apply for land ownership documents</li>
          <li>Understanding government pension schemes</li>
          <li>Legal steps for domestic violence cases</li>
          <li>Filing complaints for unpaid wages</li>
        </ul>
      </section>
    </div>
  );
}

export default KnowYourRights;
