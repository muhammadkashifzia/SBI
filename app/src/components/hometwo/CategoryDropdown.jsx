// components/CategoryDropdown.js
import React, { useState } from 'react';

const CategoryDropdown = ({
  isOpen,
  onClose,
  onCategorySelect,
  selectedCategories = [],
  selectedSubCategories = [],
}) => {
  const [localSelectedCategories, setLocalSelectedCategories] =
    useState(selectedCategories);
  const [localSelectedSubCategories, setLocalSelectedSubCategories] = useState(
    selectedSubCategories,
  );

  const categories = [
    {
      id: 'gourmet',
      name: 'Gourmet',
      count: 20,
      subCategories: [
        { id: 'item1', name: 'アイテム1', count: 5 },
        { id: 'item2', name: 'アイテム2', count: 5 },
        { id: 'item3', name: 'アイテム3', count: 5 },
        { id: 'item4', name: 'アイテム4', count: 5 },
      ],
    },
    {
      id: 'fashion',
      name: 'Fashion',
      count: 20,
      subCategories: [],
    },
    {
      id: 'amusement',
      name: 'Amusement',
      count: 20,
      subCategories: [],
    },
    {
      id: 'goods',
      name: 'Goods',
      count: 20,
      subCategories: [],
    },
    {
      id: 'services',
      name: 'Services',
      count: 20,
      subCategories: [],
    },
  ];

  const handleCategoryChange = (categoryId) => {
    const updatedCategories = localSelectedCategories.includes(categoryId)
      ? localSelectedCategories.filter((id) => id !== categoryId)
      : [...localSelectedCategories, categoryId];

    setLocalSelectedCategories(updatedCategories);
  };

  const handleSubCategoryChange = (subCategoryId) => {
    const updatedSubCategories = localSelectedSubCategories.includes(
      subCategoryId,
    )
      ? localSelectedSubCategories.filter((id) => id !== subCategoryId)
      : [...localSelectedSubCategories, subCategoryId];

    setLocalSelectedSubCategories(updatedSubCategories);
  };

  const handleApply = () => {
    onCategorySelect(localSelectedCategories, localSelectedSubCategories);
    onClose();
  };

  const handleReset = () => {
    setLocalSelectedCategories([]);
    setLocalSelectedSubCategories([]);
  };

  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 right-0 bg-white border border-[#DDDDDD] rounded-[5px] shadow-lg z-10 mt-1 w-full md:w-[65%] ml-auto">
      <div className="p-4">
        <h3 className="text-lg font-medium mb-4 text-gray-800">Categories</h3>

        <div className="space-y-4 max-h-80 overflow-y-auto">
          {categories.map((category) => (
            <div key={category.id} className="space-y-2">
              {/* Main Category */}
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id={category.id}
                  checked={localSelectedCategories.includes(category.id)}
                  onChange={() => handleCategoryChange(category.id)}
                  className="w-[20px] h-[20px] text-[#006BA6] border-gray-300 rounded-[3px] focus:ring-[#006BA6] accent-[#006BA6]"
                />
                <label
                  htmlFor={category.id}
                  className="text-[18px] font-medium text-[#2C3237] cursor-pointer"
                >
                  {category.name} ({category.count})
                </label>
              </div>

              {/* Sub Categories */}
              {category.subCategories.length > 0 && (
                <div>
                  <div className="flex flex-wrap gap-[20px]">
                    {category.subCategories.map((subCategory) => (
                      <label
                        key={subCategory.id}
                      className='flex gap-[10px] items-center hover:bg-gray-50 rounded cursor-pointer'
                      >
                        <input
                          type="checkbox"
                          checked={localSelectedSubCategories.includes(subCategory.id)}
                          onChange={() => handleSubCategoryChange(subCategory.id)}
                          className="w-[20px] h-[20px] text-[#006BA6] border-gray-300 rounded-[3px] focus:ring-[#006BA6] accent-[#006BA6]"
                        />
                        <div className="flex gap-[10px] items-center">
                        <span className="text-sm text-[#2C3237] font-medium hover:bg-gray-50 rounded cursor-pointer px-3 py-1 border border-[#CBCBCB] transition-colors duration-200">
                          {subCategory.name}
                        </span>
                         <span className="text-[#2C3237] text-[18px] font-medium">
                          ({subCategory.count})
                        </span>
                        </div>
                       
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex mt-6">
        
          <button
            onClick={handleApply}
            className="flex-1 bg-[#006BA6] text-white py-2 px-4 rounded hover:bg-[#005a8a] transition-colors duration-200 font-medium max-w-[179px] ml-auto flex justify-center items-center"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryDropdown;