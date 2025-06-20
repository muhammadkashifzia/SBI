// components/RegionSelection.js
import React from 'react';
import { locationData } from '../../data/locationData';

const RegionSelection = ({ onRegionSelect }) => {
  return (
    <div className="p-4">
      <h3 className="font-bold text-lg mb-4 text-gray-800">
        都道府県を選択してください
      </h3>

      {Object.entries(locationData).map(([regionKey, regionData]) => (
        <div key={regionKey} className="mb-4">
          <h4 className="font-medium text-[#2C3237] text-[18px] mb-[15px]">
            {regionData.name}
          </h4>

          {regionKey === '北海道' ? (
            <button
              onClick={() => onRegionSelect(regionKey)}
              className="px-3 py-1 mr-2 mb-2 border border-[#CBCBCB] text-[#006BA6] rounded-[3px] hover:bg-blue-50 transition-colors cursor-pointer"
            >
              北海道
            </button>
          ) : (
            <div className="flex flex-wrap gap-2">
              {Object.keys(regionData.prefectures).map((prefecture) => (
                <button
                  key={prefecture}
                  onClick={() => onRegionSelect(regionKey)}
                  className="px-3 py-1 border border-[#CBCBCB] text-[#006BA6] rounded-[3px] hover:bg-blue-50 transition-colors cursor-pointer"
                >
                  {prefecture}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RegionSelection;