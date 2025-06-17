import React from 'react';
import HeroSlider from '@/components/MainHeroSlider';
import MapCategory from '@/components/hometwo/MapWithCategories';
import BrowseCategory from '@/components/hometwo/BrowseCategory';
import Restaurant from '@/components/hometwo/Restauarant';
import AreaGrid from '@/components/area/areaCard';
import AreaList from '@/components/hometwo/AreaList';
export default function About() {
  return (
    <div>
     <div>
       <HeroSlider />
     </div>
      <div className="max-w-[1360px] mx-auto px-[16px] mb-[43px] md:mb-[85px] mt-[19.5px] ">
       <div>
         <MapCategory />
        <BrowseCategory />
        <Restaurant />
        <AreaGrid />
        <AreaList />
       </div>
      </div>
    </div>
  );
}
