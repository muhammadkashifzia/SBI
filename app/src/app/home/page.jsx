import React from 'react';
import Image from 'next/image';
import MapCategory from '@/components/hometwo/MapWithCategories'
import BrowseCategory from '@/components/hometwo/BrowseCategory';
import Restaurant from '@/components/hometwo/Restauarant';
export default function About() {
  return (
    <div className=" px-[16px] mb-[43px] md:mb-[85px] mt-[19.5px]">
 
    <MapCategory />
    <BrowseCategory />
    <Restaurant />
    </div>
  );
}
