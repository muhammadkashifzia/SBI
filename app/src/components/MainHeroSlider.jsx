'use client';

import React from 'react';
import HeroSlider from '@/components/hometwo/HeroSlider';
import SearchForm from '@/components/searchfilter/SearchForm';

const MainHeroSlider = () => {
  return (
    <div className="relative w-full mb-[50px] md:mb-[100px]">
      {/* Hero Slider Section */}
      <HeroSlider />
      
      {/* Search Form Section */}
      <div className="relative">
        <SearchForm />
      </div>
    </div>
  );
};

export default MainHeroSlider;