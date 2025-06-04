'use client';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

export default function HeroSlider() {
  return (
    <div className="relative w-full mb-[200px] md:mb-[100px]">
      {/* Swiper Slider */}

      <div className="bg-gradient-to-r from-white to-blue-400">
        <div className="max-w-[1360px] mx-auto custom-slider">
          <Swiper
            modules={[Navigation]}
            navigation
            loop
            className="w-full h-[300px] md:h-[400px]"
          >
            {[1, 2, 3].map((_, i) => (
              <SwiperSlide key={i}>
                <div className="h-full w-full flex items-center justify-center">
                  <p className="text-white text-xl font-bold">Slide {i + 1}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Search Overlay */}
      <div className="z-1 absolute -bottom-45 md:-bottom-12 left-1/2 transform -translate-x-1/2 w-[95%] md:w-[80%] max-w-[1360px] bg-white shadow-lg rounded-[5px] py-[14px] px-[20px] flex flex-wrap flex-col md:flex-row items-center justify-between border border-[#DDDDDD]">
        <div className="flex items-center w-full  flex-1 border-0 px-3 py-[10px] gap-[20px] h-[59px] border-r-0 md:border-r-1 border-b-1 md:border-b-0 border-[#BEBEBE]">
          <span>
            <Image src="/assets/svg/search-icon.svg" width={32} height={32} className='w-[20px] md:w-[32px] h-[20px] md:h-[32px] ' alt='searchIcon'/>
          </span>
          <input
            type="text"
            placeholder="キーワード"
            className="w-full outline-none text-[20px] text-[#2C3237]"
          />
        </div>
        <div className="flex items-center w-full flex-1 border-0 px-3 py-[10px] gap-[20px] h-[59px] border-r-0 md:border-r-1 border-[#BEBEBE] border-b-1 md:border-b-0">
          <span>
            <Image src="/assets/svg/map-location.svg" width={22} height={30} className='w-[18px] md:w-[32px] h-[20px] md:h-[32px]' alt='mapLocationIcon'/>
          </span>
          <input
            type="text"
            placeholder="場所/エリア"
            className="w-full outline-none text-[#2C3237]"
          />
        </div>
        <div className="flex items-center w-full flex-1 border-0 px-3 py-[10px] gap-[20px] h-[59px] border-r-0 md:border-r-1 border-[#BEBEBE] border-b-1 md:border-b-0">
          <span>
            <Image src="/assets/svg/knife-icon.svg" width={31} height={32} className='w-[16px] md:w-[31px] h-[32px] md:h-[32px]' alt='mapLocationIcon'/>
          </span>
          <input
            type="text"
            placeholder="カテゴリ―"
            className="w-full outline-none text-[#2C3237]"
          />
        </div>
        <div className="flex items-center w-full flex-1 border-0 px-3 py-[10px] gap-[20px] border-b-1 md:border-b-0 border-[#BEBEBE]">
          <span className="text-yellow-500">
            <Image src="/assets/svg/star-icon.svg" width={31} height={32} alt='starIcon'/>
          </span>
          <input
            type="text"
            placeholder="星レビュー"
            className="w-full outline-none"
          />
        </div>
        <button className="text-[20px] mt-[16px] md:mt-0 cursor-pointer bg-[#006BA6] text-white px-17.5 py-1.5 md:py-5 rounded hover:bg-[#006BA6] transition w-full md:w-[auto]">
          検索
        </button>
      </div>
    </div>
  );
}
