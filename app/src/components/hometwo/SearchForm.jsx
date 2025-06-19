// components/SearchForm.js
import React, { useState, useEffect } from 'react';
import SearchInput from './SearchInput';
import LocationInput from './LocationInput';

const SearchForm = () => {
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [locationValue, setLocationValue] = useState('');
  const [locationTags, setLocationTags] = useState([]);
  const [isReviewDropdownOpen, setIsReviewDropdownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.location-input-container')) {
        setIsLocationDropdownOpen(false);
      }
      if (!event.target.closest('.review-input-container')) {
        setIsReviewDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLocationInputClick = () => {
    setIsLocationDropdownOpen(!isLocationDropdownOpen);
  };
 
    const handleReviewInputClick = () => {
    setIsReviewDropdownOpen(!isReviewDropdownOpen);
  };


  const handleLocationSelect = (locationText, tags) => {
    setLocationValue(locationText);
    setLocationTags(tags);
  };

  const handleTagRemove = (tagToRemove) => {
    const updatedTags = locationTags.filter((tag) => tag !== tagToRemove);
    setLocationTags(updatedTags);

    if (updatedTags.length === 0) {
      setLocationValue('');
    } else {
      // Update location value based on remaining tags
      if (locationValue.includes('北海道')) {
        setLocationValue(`北海道 (${updatedTags.length}エリア選択)`);
      } else {
        const prefectureName = locationValue.split(' ')[0];
        setLocationValue(`${prefectureName} (${updatedTags.length}エリア選択)`);
      }
    }
  };

  const handleDropdownClose = () => {
    setIsLocationDropdownOpen(false);
  };

  return (
     <div className='flex relative bottom-[50px] left-1/2 transform -translate-x-1/2 w-[95%] md:w-[95%] lg:w-[80%] md:max-w-[100%] lg:max-w-[1360px] bg-white shadow-lg rounded-[5px] py-[14px] px-[20px] items-center justify-between border border-[#DDDDDD] flex-col md:flex-row z-[2]'>
    <div className="grid grid-cols-1 md:grid-cols-4  w-full">
      {/* Keyword Search */}
      <SearchInput
        placeholder="キーワード"
        iconSrc="/assets/svg/search-icon.svg"
        iconAlt="searchIcon"
        iconWidth={32}
        iconHeight={32}
      />

      {/* Location Search */}
      <div className="location-input-container ">
        <LocationInput
          locationValue={locationValue}
          locationTags={locationTags}
          isDropdownOpen={isLocationDropdownOpen}
          onInputClick={handleLocationInputClick}
          onLocationSelect={handleLocationSelect}
          onTagRemove={handleTagRemove}
          onDropdownClose={handleDropdownClose}
        />
      </div>

      {/* Category Search */}
      <SearchInput
        placeholder="カテゴリ―"
        iconSrc="/assets/svg/knife-icon.svg"
        iconAlt="knifeIcon"
        iconWidth={31}
        iconHeight={32}
        isDropdownOpen={isLocationDropdownOpen}
        onInputClick={handleReviewInputClick}
        // onLocationSelect={handleReviewSelect}
      />

      {/* Star Rating Search */}
      <div className="flex flex-1 w-full items-center border-0  gap-[20px] border-b md:border-b-0 border-[#BEBEBE]">
        <SearchInput
          placeholder="星レビュー"
          iconSrc="/assets/svg/star-icon.svg"
          iconAlt="starIcon"
          iconWidth={31}
          iconHeight={32}
        />
      </div>

      {/* Search Button */}
      
    </div>
    <div className="flex w-full max-w-full md:max-w-[120px] lg:max-w-[173px]">
        <button className="text-[20px] mt-[16px] md:mt-0 cursor-pointer bg-[#006BA6] text-white px-[15px]  py-1.5 md:py-3.5 lg:py-5 rounded hover:bg-[#005a8a] transition-colors duration-200 w-full font-medium flex items-center justify-center">
          検索
        </button>
      </div>
     

      </div>
  );
};

export default SearchForm;