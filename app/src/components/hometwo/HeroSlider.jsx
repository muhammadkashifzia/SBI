// components/HeroSlider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const HeroSlider = () => {
  return (
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
  );
};

export default HeroSlider;