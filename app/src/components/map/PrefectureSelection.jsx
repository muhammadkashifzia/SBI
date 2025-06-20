// components/PrefectureSelection.js
import React from 'react';
import { locationData } from '../../data/locationData';

const PrefectureSelection = ({ selectedRegion, onPrefectureSelect, onBack }) => {
  return (
    <div className="p-4">
      <h3 className="font-bold text-lg mb-4 text-gray-800">
        都道府県を選択してください
      </h3>
      
      <div className="flex items-center mb-4">
        <button
          onClick={onBack}
          className="text-[#006BA6] hover:text-blue-800 mr-2 text-xl"
        >
          ←
        </button>
        <div className="text-sm text-gray-600 flex gap-[19px]">
          <span className='text-[#006BA6] font-medium text-[16px]'>選択された都道府県</span> 
          &gt; 
          <span>{locationData[selectedRegion].name}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {Object.keys(locationData[selectedRegion].prefectures).map((prefecture) => (
          <button
            key={prefecture}
            onClick={() => onPrefectureSelect(prefecture)}
            className="px-3 py-1 border border-blue-300 text-[#006BA6] rounded hover:bg-blue-50 transition-colors"
          >
            {prefecture}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PrefectureSelection;