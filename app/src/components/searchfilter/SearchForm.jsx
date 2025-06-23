// components/SearchForm.js
import React, { useState, useEffect } from 'react';
import SearchInput from './SearchInput';
import LocationInput from './LocationInput';
import ReviewSearchInput from './ReviewSearchInput';
import CategorySearchInput from './CategorySearchInput';

const SearchForm = () => {
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [locationValue, setLocationValue] = useState('');
  const [locationTags, setLocationTags] = useState([]);
  const [isReviewDropdownOpen, setIsReviewDropdownOpen] = useState(false);
  const [minRating, setMinRating] = useState(0);
  const [maxRating, setMaxRating] = useState(5);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.location-input-container')) {
        setIsLocationDropdownOpen(false);
      }
      if (!event.target.closest('.review-input-container')) {
        setIsReviewDropdownOpen(false);
      }
      if (!event.target.closest('.category-input-container')) {
        setIsCategoryDropdownOpen(false);
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

  const handleCategoryInputClick = () => {
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
  };

  const handleLocationSelect = (locationText, tags) => {
    setLocationValue(locationText);
    setLocationTags(tags);
  };

  const handleRatingSelect = (min, max) => {
    setMinRating(min);
    setMaxRating(max);
  };

  const handleCategorySelect = (categories, subCategories) => {
    setSelectedCategories(categories);
    setSelectedSubCategories(subCategories);
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

  const handleReviewDropdownClose = () => {
    setIsReviewDropdownOpen(false);
  };

  const handleCategoryDropdownClose = () => {
    setIsCategoryDropdownOpen(false);
  };

  return (
    <div className='flex relative bottom-[50px] left-1/2 transform -translate-x-1/2 w-[95%] md:w-[95%] lg:w-[80%] md:max-w-[100%] lg:max-w-[1360px] bg-white shadow-lg rounded-[5px] py-[14px] px-[20px] items-center justify-between border border-[#DDDDDD] flex-col md:flex-row z-[2]'>
      <div className="grid grid-cols-1 md:grid-cols-4 w-full">
        {/* Keyword Search */}
        <SearchInput
          placeholder="キーワード"
          iconSrc="/assets/svg/search-icon.svg"
          iconAlt="searchIcon"
          iconWidth={32}
          iconHeight={32}
        />

        {/* Location Search */}
        <div className="location-input-container">
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
        <CategorySearchInput
          placeholder="カテゴリ―"
          iconSrc="/assets/svg/knife-icon.svg"
          iconAlt="knifeIcon"
          iconWidth={31}
          iconHeight={32}
          isDropdownOpen={isCategoryDropdownOpen}
          onInputClick={handleCategoryInputClick}
          selectedCategories={selectedCategories}
          selectedSubCategories={selectedSubCategories}
          onCategorySelect={handleCategorySelect}
          onDropdownClose={handleCategoryDropdownClose}
        />

        {/* Star Rating Search */}
        <ReviewSearchInput
          placeholder="星レビュー"
          iconSrc="/assets/svg/star-icon.svg"
          iconAlt="starIcon"
          iconWidth={31}
          iconHeight={32}
          isDropdownOpen={isReviewDropdownOpen}
          onInputClick={handleReviewInputClick}
          selectedMinRating={minRating}
          selectedMaxRating={maxRating}
          onRatingSelect={handleRatingSelect}
          onDropdownClose={handleReviewDropdownClose}
        />
      </div>

      <div className="flex w-full max-w-full md:max-w-[120px] lg:max-w-[173px]">
        <button className="text-[20px] mt-[16px] md:mt-0 cursor-pointer bg-[#006BA6] text-white px-[15px] py-1.5 md:py-3.5 lg:py-5 rounded hover:bg-[#005a8a] transition-colors duration-200 w-full font-medium flex items-center justify-center">
          検索
        </button>
      </div>
    </div>
  );
};

export default SearchForm;