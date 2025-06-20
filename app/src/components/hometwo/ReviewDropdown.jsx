// components/ReviewDropdown.js
import React, { useState } from 'react';

const ReviewDropdown = ({ 
  isOpen, 
  onClose, 
  onRatingSelect,
  selectedMinRating = 0,
  selectedMaxRating = 5 
}) => {
  const [minRating, setMinRating] = useState(selectedMinRating);
  const [maxRating, setMaxRating] = useState(selectedMaxRating);

  const starOptions = [
    { value: 0, label: '0 Star' },
    { value: 1, label: '1 Star' },
    { value: 2, label: '2 Star' },
    { value: 3, label: '3 Star' },
    { value: 4, label: '4 Star' },
    { value: 5, label: '5 Star' }
  ];

  const handleApply = () => {
    onRatingSelect(minRating, maxRating);
    onClose();
  };

  const handleMinRatingChange = (value) => {
    setMinRating(value);
    if (value > maxRating) {
      setMaxRating(value);
    }
  };

  const handleMaxRatingChange = (value) => {
    setMaxRating(value);
    if (value < minRating) {
      setMinRating(value);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 right-0 bg-white border border-[#DDDDDD] rounded-[5px] shadow-lg z-10 mt-1 w-[40%] ml-auto leading-[24px] mb-[24px]">
      <div className="p-4">
        <h3 className="text-[20px] font-bold mb-4 text-[#212121]">Rating Range</h3>
        
        <div className="grid grid-cols-2 gap-4 mb-[25px]">
          {/* Minimum Star Rating */}
          <div>
            <label className="block text-[16px] font-normal text-[#070707] mb-2">
              Minimum Star
            </label>
            <select
              value={minRating}
              onChange={(e) => handleMinRatingChange(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {starOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Maximum Star Rating */}
          <div>
            <label className="block text-[16px] font-normal text-[#070707] mb-2">
              Maximum Star
            </label>
            <select
              value={maxRating}
              onChange={(e) => handleMaxRatingChange(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {starOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Apply Button */}
        <button
          onClick={handleApply}
          className="w-full bg-[#006BA6] text-white py-2 px-4 rounded hover:bg-[#005a8a] transition-colors duration-200 font-medium max-w-[179px] flex ml-auto justify-center items-center"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default ReviewDropdown;