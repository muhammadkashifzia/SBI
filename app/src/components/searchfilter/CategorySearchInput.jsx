// components/CategorySearchInput.js
import React, { useRef, useEffect } from 'react';
import CategoryDropdown from './CategoryDropdown';

const CategorySearchInput = ({
  placeholder,
  iconSrc,
  iconAlt,
  iconWidth = 32,
  iconHeight = 32,
  isDropdownOpen,
  onInputClick,
  selectedCategories = [],
  selectedSubCategories = [],
  onCategorySelect,
  onDropdownClose,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
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
    const totalSelected =
      selectedCategories.length + selectedSubCategories.length;
    if (totalSelected === 0) {
      return '';
    }
    return `${totalSelected} カテゴリ選択`;
  };

  const categoryNames = {
    gourmet: 'Gourmet',
    fashion: 'Fashion',
    amusement: 'Amusement',
    goods: 'Goods',
    services: 'Services',
    item1: 'アイテム1',
    item2: 'アイテム2',
    item3: 'アイテム3',
    item4: 'アイテム4',
  };

  const getSelectedTags = () => {
    const categoryTags = selectedCategories.map((id) => ({
      id,
      name: categoryNames[id],
      type: 'category',
    }));
    const subCategoryTags = selectedSubCategories.map((id) => ({
      id,
      name: categoryNames[id],
      type: 'subcategory',
    }));
    return [...categoryTags, ...subCategoryTags];
  };

  const handleTagRemove = (tagId, tagType) => {
    if (tagType === 'category') {
      const updatedCategories = selectedCategories.filter((id) => id !== tagId);
      onCategorySelect(updatedCategories, selectedSubCategories);
    } else {
      const updatedSubCategories = selectedSubCategories.filter(
        (id) => id !== tagId,
      );
      onCategorySelect(selectedCategories, updatedSubCategories);
    }
  };

  return (
    <div ref={containerRef} className="category-input-container">
      <div className="flex flex-1 items-center w-full border-0 px-3 gap-[20px] h-[59px] border-r-0 md:border-r border-b md:border-b-0 border-[#BEBEBE] location-search">
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
   
            {getSelectedTags().length > 0 ? (
              <div className="flex items-center overflow-x-auto scrollbar-hide h-full gap-1 justify-start z-10 md:w-[8.5vw] lg:w-[10.9vw]">
                {getSelectedTags().map((tag) => (
                  <div
                    key={`${tag.type}-${tag.id}`}
                    className="inline-flex items-center bg-white border border-[#006BA6] text-[#006BA6] px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap flex-shrink-0"
                  >
                    <span>{tag.name}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTagRemove(tag.id, tag.type);
                      }}
                      className="ml-1 text-[#006BA6] hover:text-[#006BA6] rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold transition-colors cursor-pointer"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <input
                type="text"
                placeholder={placeholder}
                value={getDisplayValue()}
                readOnly
                className="w-full text-[20px] text-[#606060] placeholder:text-[#2C3237] font-normal bg-transparent outline-none cursor-pointer"
              />
            )}
       
        </div>
      </div>

      <CategoryDropdown
        isOpen={isDropdownOpen}
        onClose={onDropdownClose}
        onCategorySelect={onCategorySelect}
        selectedCategories={selectedCategories}
        selectedSubCategories={selectedSubCategories}
      />
    </div>
  );
};

export default CategorySearchInput;
