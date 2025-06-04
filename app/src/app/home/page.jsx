import React from 'react';
import HeroSlider from '@/components/hometwo/HeroSlider';
import MapCategory from '@/components/hometwo/MapWithCategories';
import BrowseCategory from '@/components/hometwo/BrowseCategory';
import Restaurant from '@/components/hometwo/Restauarant';
import AreaGrid from '@/components/area/areaCard';
import AreaList from '@/components/hometwo/AreaList';
export default function About() {
  return (
    <div>
      <HeroSlider />
      <div className="max-w-[1360px] mx-auto px-[16px] mb-[43px] md:mb-[85px] mt-[19.5px]">
        <MapCategory />
        <BrowseCategory />
        <Restaurant />
        <AreaGrid />
        <AreaList />
      </div>
    </div>
  );
}
