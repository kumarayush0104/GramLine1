import React from 'react';

function KnowYourRights() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Know Your Rights</h2>
      <p>This is the offline-accessible learning hub with videos and step-by-step guides.</p>

      <section>
        <h3 className="font-semibold mb-2">Videos</h3>
        <div className="space-y-4">
          <video controls className="w-full max-w-md rounded border border-gray-300">
            <source src="/videos/legal_rights_hi.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video controls className="w-full max-w-md rounded border border-gray-300">
            <source src="/videos/govt_schemes_ta.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section>
        <h3 className="font-semibold mb-2">Step-by-step Guides</h3>
        <ul className="list-disc list-inside space-y-1">
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
