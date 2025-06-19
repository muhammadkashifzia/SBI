// components/LocationInput.js
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import LocationTag from './LocationTag';
import LocationDropdown from './LocationDropdown';

const LocationInput = ({ 
  locationValue, 
  locationTags, 
  isDropdownOpen, 
  onInputClick, 
  onLocationSelect, 
  onTagRemove, 
  onDropdownClose 
}) => {
  const inputRef = useRef(null);
  const placeholderRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (placeholderRef.current && locationTags.length > 0) {
      placeholderRef.current.scrollLeft = placeholderRef.current.scrollWidth;
    }
  }, [locationTags]);

  return (
    <div className="flex flex-1 items-center w-full border-0 px-3 gap-[20px] h-[59px] border-r-0 md:border-r border-b md:border-b-0 border-[#BEBEBE] location-search">
      <div className="w-[30px]">
        <Image
          src="/assets/svg/map-location.svg"
          width={22}
          height={30}
          className="w-[18px] md:w-[22px] h-[30px] md:h-[30px] flex max-w-[18px]"
          alt="mapLocationIcon"
        />
      </div>
      
      <div className="flex-10/12 relative h-full cursor-pointer z-50" onClick={onInputClick}>
        {/* Placeholder text - shown when no tags and no location value */}
        {locationTags.length === 0 && !locationValue && (
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-[#2C3237] pointer-events-none z-0">
            場所/エリア
          </div>
        )}

        {/* Tags container - shown when there are tags */}
        {locationTags.length > 0 && (
          <div
            ref={placeholderRef}
            className="flex items-center overflow-x-auto scrollbar-hide h-full gap-1 justify-start z-10 md:w-[8.5vw] lg:w-[10.9vw]"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {locationTags.map((tag, index) => (
              <LocationTag
                key={index}
                tag={tag}
                onRemove={onTagRemove}
              />
            ))}
          </div>
        )}

        {/* Location value text - shown when there's a value but no tags */}
        {locationValue && locationTags.length === 0 && (
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-[#2C3237] pointer-events-none">
            {locationValue}
          </div>
        )}

        {/* Invisible input for click handling */}
        <input
          ref={inputRef}
          type="text"
          value=""
          readOnly
          className="w-full h-full outline-none cursor-pointer absolute top-0 left-0 bg-transparent -z-10 opacity-0"
        />
      </div>

      <LocationDropdown
        isOpen={isDropdownOpen}
        onClose={onDropdownClose}
        onLocationSelect={onLocationSelect}
        dropdownRef={dropdownRef}
      />
    </div>
  );
};

export default LocationInput;