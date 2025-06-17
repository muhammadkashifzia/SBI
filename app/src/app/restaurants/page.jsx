import React from 'react';
import ListingList from '@/components/searchrestaurant/ListingList';
import SidebarFilter from '@/components/searchrestaurant/SidebarFilter';
export default function RestaurantListing() {
  return (
    <div className='pt-[50px] pb-[80px] bg-[#F7F7F7]'>
      {/* <HeroSlider /> */}
      <div className="flex max-w-[1358px] mx-auto gap-x-[28px] px-[16px]">
        <div className="hidden md:block w-[31.3%]">
          <SidebarFilter />
        </div>
        <ListingList />
      </div>
    </div>
  );
}
