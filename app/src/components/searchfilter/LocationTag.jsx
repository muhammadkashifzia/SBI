// components/LocationTag.js
import React from 'react';

const LocationTag = ({ tag, onRemove }) => {
  return (
    <div className="inline-flex items-center bg-white border border-[#006BA6] text-[#006BA6] px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap flex-shrink-0">
      <span>{tag}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onRemove(tag);
        }}
        className="ml-1 text-[#006BA6] hover:text-[#006BA6] rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold transition-colors cursor-pointer"
      >
        ×
      </button>
    </div>
  );
};

export default LocationTag;