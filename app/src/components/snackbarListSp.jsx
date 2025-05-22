'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import NewOpenSkeletonCard from '@/components/shimmer/newOpenSkeleton';

export default function NewOpen(  ) {
  const [loading, setLoading] = useState(true);

  const magazineList = [
    {
      id: 1,
      title: 'スナック りえ',
      image: '/assets/images/magazine.png',
      location: '東京都 下北沢駅',
      tags: ['20席以上', '元気ママ'],
    },
    {
      id: 2,
      title: 'バー ハナコ',
      image: '/assets/images/magazine.png',
      location: '大阪府 梅田駅',
      tags: ['カラオケあり', 'お洒落'],
    },
    {
      id: 3,
      title: 'カフェ さくら',
      image: '/assets/images/magazine.png',
      location: '京都府 祇園四条駅',
      tags: ['朝営業', '静かなお店'],
    },
    {
      id: 4,
      title: 'ラウンジ ミカ',
      image: '/assets/images/magazine.png',
      location: '福岡県 天神駅',
      tags: ['VIPルーム', 'ドリンク豊富'],
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="pl-[16px] md:pl-0 w-full md:w-[85%]">
        {loading ? (
          <div className="flex gap-4">
            {[...Array(4)].map((_, idx) => (
              <NewOpenSkeletonCard key={idx} />
            ))}
          </div>
        ) : (
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1500: { slidesPerView: 4 },
              1280: { slidesPerView: 3.5 },
              1023: { slidesPerView: 2.5 },
              768: { slidesPerView: 2.5 },
              500: { slidesPerView: 2.5 },
              475: { slidesPerView: 1.6 },
              320: { slidesPerView: 1.2 },
            }}
          >
            {magazineList.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-transparent rounded-[10px] shadow-[0px_5px_20px_0px_#0000000A]  w-[95%] pt-[10px] relative mx-auto">
                  <div>
                    <Image
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-[139px] object-cover object-top rounded-t-[12px]"
                      width={200}
                      height={180}
                    />
                    <div className="absolute top-[0px]  left-[-5px] bg-[#B900B3] text-white w-[20px] h-[20px] border border-[#ffffff] rounded-full flex items-center justify-center fugaz-one">
                      {item.id}
                    </div>
                  </div>
                  <div className="px-[12px] pb-[25px] pt-[12px] bg-white rounded-b-[12px]">
                    <p className="text-[16px] font-bold text-[#B900B3] mb-[12px]">
                      {item.title}
                    </p>
                    <p className="text-[12px] font-normal text-[#1E1C1C] flex items-center mb-[15px] gap-[4px]">
                      <Image
                        src="/assets/svg/icon_place.svg"
                        className="w-[12px] h-[12px]"
                        width={12}
                        height={12}
                        alt="Location icon"
                      />
                      {item.location}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-[#DF5CDA] text-[#ffffff] text-[12px] font-semibold px-2 py-1 rounded-[4px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}
