'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function Banner() {
  return (
    <>

      {/* Banner */}
      <div
        className="h-full min-h-[356px]  md:min-h-[690px] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center text-white relative py-[57px]  md:py-[221px] "
        style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url('/assets/images/banner.png')`,
            backgroundColor: 'lightgray',
          }}
        
      >
        <div className="w-full max-w-[100%] md:max-w-[752px] mx-auto px-[16px]">
          {/* Title */}
          <div className="text-center mb-6">
            <div className="mb-[36px] md:mb-[30px]">
              <p className="font-[700] text-[24px] md:text-[50px] mb-[38px] leading-[38px]">
            全国で掲載店舗拡大中
              </p>
              <p className="font-[700] text-[24px] md:text-[50px] leading-[38px] mb-[38px]">
              お得に使用できる店舗を探そう
              </p>
            </div>
           
          </div>

         

          <button className="bg-white text-[#006BA6] mt-[24px] rounded-[4px] border border-white w-full flex gap-[8px] items-center justify-center py-[16px] text-[16px] font-bold max-w-[295px] h-[52px] mx-auto cursor-pointer">
            
         掲載店舗を探す
          </button>
        </div>
      </div>
    </>
  );
}
