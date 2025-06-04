// components/RestaurantGallery.jsx
import React from 'react';

const galleryImages = [
  { src: '/assets/images/image01.png', alt: '店舗内観', label: '店舗内観' },
  { src: '/assets/images/image02.png', alt: '店舗内観', label: '店舗内観' },
  { src: '/assets/images/image03.png', alt: '商品', label: '商品' },
  { src: '/assets/images/image04.png', alt: '商品', label: '商品' },
  { src: '/assets/images/image05.png', alt: '商品', label: '商品' },
  // Add more objects as needed
];

export default function RestaurantGallery() {
  return (
    <div className="mt-[100px]">
      <h2 className="mb-[20px] text-[28px] font-bold text-[#2C3237]">
        写真ギャラリー ({galleryImages.length}枚)
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-x-[20px] gap-y-[20px] md:gap-y-[34px]">
        {galleryImages.map((image, index) => (
          <div key={index} className="flex flex-col border border-[#C1C1C1] rounded-[5px]">
            <div className="w-full h-[208px] md:h-[144px] bg-gray-200 flex justify-center items-center mb-[10px]">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full rounded-t-[5px] object-cover object-top"
              />
            </div>
            <div className="pt-[10px] px-[15px] pb-[15px]">
              <p className="font-normal text-[16px]">{image.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
