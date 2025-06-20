// components/SearchInput.js
import React from 'react';
import Image from 'next/image';

const SearchInput = ({ placeholder, iconSrc, iconAlt, iconWidth, iconHeight }) => {
  return (
    <div className="flex flex-1 items-center w-full border-0 px-3 gap-[20px] h-[59px] border-r-0 md:border-r border-b md:border-b-0 border-[#BEBEBE] filter-search">
      <span>
        <Image
          src={iconSrc}
          width={iconWidth}
          height={iconHeight}
          className={`w-[30px] md:w-[${iconWidth}px] h-[30px] md:h-[${iconHeight}px]`}
          alt={iconAlt}
        />
      </span>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full outline-none text-[20px] text-[#2C3237] placeholder:text-[#2C3237]"
      />
    </div>
  );
};

export default SearchInput;