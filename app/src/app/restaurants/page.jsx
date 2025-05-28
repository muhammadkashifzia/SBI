import React from 'react';
import HeroSlider from '@/components/hometwo/HeroSlider';
import ListingList from '@/components/searchrestaurant/ListingList';
import SidebarFilter from '@/components/searchrestaurant/SidebarFilter'
export default function RestaurantListing() {
  return (
   <div>
  <HeroSlider />
  <div className='flex max-w-[1358px] mx-auto gap-x-[28px] px-[16px]'>
    <div className='hidden md:block'>
         <SidebarFilter />
    </div>
    <ListingList />
  </div>
   </div>
  );
}
