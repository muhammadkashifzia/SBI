// components/AreaSelection.js
import React from 'react';
import { locationData } from '../../data/locationData';

const AreaSelection = ({ 
  selectedRegion, 
  selectedPrefecture, 
  selectedAreas, 
  onAreaToggle, 
  onBack, 
  onConfirm 
}) => {
  const areas = selectedRegion === '北海道'
    ? locationData['北海道'].areas
    : locationData[selectedRegion].prefectures[selectedPrefecture];

  const count = selectedRegion === '北海道' ? '20' : '5';

  return (
    <div className="p-4">
      <h3 className="font-bold text-lg mb-4 text-gray-800">
        エリアを選択してください
      </h3>
      
      <div className="flex items-center mb-4">
        <button
          onClick={onBack}
          className="text-[#006BA6] mr-4 text-xl cursor-pointer"
        >
          ←
        </button>
        <div className="text-sm text-gray-600 flex gap-[19px]">
          <span className='text-[#006BA6] font-medium text-[16px]'>選択された都道府県</span> 
          &gt;
          <span className='font-medium text-[16px]'>
            {selectedRegion === '北海道' ? '北海道' : selectedPrefecture} ({count})
          </span>
        </div>
      </div>

      <div className="space-y-[20px] mb-[25px] overflow-y-auto">
        {areas.map((area) => (
          <label
            key={area}
            className="flex items-center space-x-2 hover:bg-gray-50 rounded cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selectedAreas.includes(area)}
              onChange={() => onAreaToggle(area)}
              className="w-[20px] h-[20px] text-[#006BA6] border-gray-300 rounded-[3px] focus:ring-[#006BA6] accent-[#006BA6]"
            />
            <span className="text-[#006BA6] border border-[#CBCBCB] px-[20px] py-[4.5px] rounded-[3px]">
              {area}
            </span>
            <span className="text-[#2C3237] text-[18px] font-medium">(5)</span>
          </label>
        ))}
      </div>

      <button
        onClick={onConfirm}
        className="w-full bg-[#006BA6] text-white py-2 px-4 rounded transition-colors font-medium max-w-[179px] ml-auto cursor-pointer flex items-center justify-center hover:bg-[#005a8a] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        決定
      </button>
    </div>
  );
};

export default AreaSelection;