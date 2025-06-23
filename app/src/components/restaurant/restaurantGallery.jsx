'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
const galleryImages = [
  { src: '/assets/images/image01.png', alt: '店舗内観', label: '店舗内観' },
  { src: '/assets/images/image02.png', alt: '店舗内観', label: '店舗内観' },
  { src: '/assets/images/image03.png', alt: '商品', label: '商品' },
  { src: '/assets/images/image04.png', alt: '商品', label: '商品' },
  { src: '/assets/images/image05.png', alt: '商品', label: '商品' },
  // Add more objects as needed
];

export default function RestaurantGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (image) => {
    const index = galleryImages.findIndex((img) => img.src === image.src);
    setSelectedImage(image);
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="mt-[100px]">
      <h2 className="mb-[20px] text-[28px] font-bold text-[#2C3237]">
        写真ギャラリー ({galleryImages.length}枚)
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-x-[20px] gap-y-[20px] md:gap-y-[34px]">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="flex flex-col border border-[#C1C1C1] rounded-[5px]"
          >
            <div
              className="w-full h-[208px] md:h-[144px] bg-gray-200 flex justify-center items-center mb-[10px]"
              onClick={() => handleImageClick(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full rounded-t-[5px] object-cover object-top cursor-pointer"
              />
            </div>
            <div className="pt-[10px] px-[15px] pb-[15px]">
              <p className="font-normal text-[16px]">{image.label}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed bg-[#0000009c] inset-0 flex justify-center items-center z-50 w-full modal-gallery-slider">
          <div className="relative bg-white  max-w-[1000px]  rounded-[5px] p-[24px] mx-auto max-h-[95vh] overflow-auto">
            <h3 className="text-[28px] font-bold mb-[24px] text-[#2C3237]">
              写真ギャラリー ({galleryImages.length}枚)
            </h3>
            <button
              onClick={handleCloseModal}
              className="absolute top-[35px] right-[24px] z-10 w-[20px] h-[20px] cursor-pointer"
            >
              <Image
                src="/assets/svg/close-modal-icon.svg"
                alt="Close"
                width={20}
                height={20}
              />
            </button>

            <div className="mb-5">
              <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={1}
                navigation={true}
                loop={true}
                initialSlide={selectedImageIndex}
                className="w-full"
              >
                {galleryImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col justify-center  border border-[#C1C1C1] rounded-[5px] md:rounded-0">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-[189px] md:h-[536px] object-cover rounded-[5px] md:rounded-0"
                      />
                        <div className="pt-[10px] px-[15px] pb-[15px] block md:hidden">
                      <p className="font-normal text-[14px]">{image.label}</p>
                    </div>
                    </div>
                    
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Related Photos */}
            <div className="mt-5">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-[15px]">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="flex flex-col border border-[#C1C1C1] rounded-[5px]"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-[100px] object-cover rounded-[5px] hover:opacity-80 transition-opacity"
                      onClick={() => {
                        setSelectedImage(image);
                        setSelectedImageIndex(index);
                      }}
                    />
                    <div className="pt-[10px] px-[15px] pb-[15px]">
                      <p className="font-normal text-[14px]">{image.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
