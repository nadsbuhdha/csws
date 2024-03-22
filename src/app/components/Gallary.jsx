import React from 'react';

export default function DefaultGallery({ imageData }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 p-4">
      {imageData.map(({ imageLink, link, eventName, eventDate }, index) => (
        <div key={index} className="relative "> {/* Set a fixed height for the container */}
          <a href={link}>
            <img
              className="h-full w-full rounded-lg object-cover object-center"
              src={imageLink}
              alt="gallery-photo"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity rounded-lg flex flex-col items-center justify-center">
              <div>
                <span className="text-white z-40 text-3xl">{eventName}</span>
              </div>
              <div>
                <span className="text-white z-40 text-2xl">{eventDate}</span>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
