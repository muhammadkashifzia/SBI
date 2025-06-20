// components/ReviewSearchInput.js
import React, { useRef, useEffect } from 'react';
import ReviewDropdown from './ReviewDropdown';

const ReviewSearchInput = ({
  placeholder,
  iconSrc,
  iconAlt,
  iconWidth = 32,
  iconHeight = 32,
  isDropdownOpen,
  onInputClick,
  selectedMinRating = 0,
  selectedMaxRating = 5,
  onRatingSelect,
  onDropdownClose
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        onDropdownClose();
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen, onDropdownClose]);

  const getDisplayValue = () => {
    if (selectedMinRating === 0 && selectedMaxRating === 5) {
      return '';
    }
    return `星 ${selectedMinRating} 〜 星 ${selectedMaxRating}`;
  };

  return (
    <div ref={containerRef} className="review-input-container">
      <div className="flex flex-1 w-full items-center border-0 gap-[20px] border-b md:border-b-0 border-[#BEBEBE] px-3">
        <div 
          className="flex items-center gap-[20px] w-full cursor-pointer py-3"
          onClick={onInputClick}
        >
          <img
            src={iconSrc}
            alt={iconAlt}
            width={iconWidth}
            height={iconHeight}
            className="flex-shrink-0"
          />
          <div className="flex-1">
            <input
              type="text"
              placeholder={placeholder}
              value={getDisplayValue()}
              readOnly
              className="w-full text-[20px] text-[#606060] placeholder:text-[#BEBEBE] bg-transparent outline-none cursor-pointer"
            />
          </div>
        </div>
      </div>

      <ReviewDropdown
        isOpen={isDropdownOpen}
        onClose={onDropdownClose}
        onRatingSelect={onRatingSelect}
        selectedMinRating={selectedMinRating}
        selectedMaxRating={selectedMaxRating}
      />
    </div>
  );
};

export default ReviewSearchInput;