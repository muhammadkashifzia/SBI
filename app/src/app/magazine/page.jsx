


"use client"; 
import Prefecture from '@/components/prefecture/prefecture';
import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/magazine/pickup/pickUpCard';
import RankingCardList from '@/components/magazine/ranking/rankingList';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
export default function MagazineListing() {
  const PickUpListing = [
    {
      id: 1,
      imageUrl: '/assets/images/demo.png',
      title: 'タイトルが入りますタイトルが入りますタイトルが入ります',
      hashtag: 'ハッシュタグ',
      date: '2025/07/20',
    },
    {
      id: 2,
      imageUrl: '/assets/images/magazine-detail.png',
      title: '別のタイトルが入ります別のタイトルが入ります',
      hashtag: '別のタグ',
      date: '2025/07/18',
    },
    
  ];
   const SnackBarListing = [
     {
       id: 1,
       imageUrl: '/assets/images/demo.png',
       title: 'タイトルが入りますタイトルが入りますタイトルが入ります',
       hashtag: 'ハッシュタグ',
       date: '2025/07/20',
     },
     {
       id: 2,
       imageUrl: '/assets/images/magazine-detail.png',
       title: '別のタイトルが入ります別のタイトルが入ります',
       hashtag: '別のタグ',
       date: '2025/07/18',
     },
     {
       id: 3,
       imageUrl: '/assets/images/magazine-detail.png',
       title: '別のタイトルが入ります別のタイトルが入ります',
       hashtag: '別のタグ',
       date: '2025/07/18',
     },
     {
       id: 4,
       imageUrl: '/assets/images/magazine-detail.png',
       title: '別のタイトルが入ります別のタイトルが入ります',
       hashtag: '別のタグ',
       date: '2025/07/18',
     },
   ];
  const cardData = [
    {
      id: 1,
      color: 'bg-purple-700',
      text: 'タイトルが入りますタイトルが入りますタイトルが入ります',
    },
    {
      id: 2,
      color: 'bg-red-600',
      text: 'タイトルが入りますタイトルが入りますタイトルが入ります',
    },
    {
      id: 3,
      color: 'bg-green-600',
      text: 'タイトルが入りますタイトルが入りますタイトルが入ります',
    },
    // Add more cards as needed
  ];
  return (
    <main>
      <div className="container mx-auto pt-[40px] grid grid-cols-1 lg:grid-cols-4 gap-[64px] md:px-[16px]">
        {/* Left Section (Recommend, NewOpen, Magazine, Goods) */}
        <div className="lg:col-span-3 space-y-[24px]">
          <Image
            src="/assets/svg/snackmagazine.svg"
            alt="Magazine"
            width={1000}
            height={500}
            className="w-full max-w-[361px] h-auto mb-[24px] object-cover object-top px-[16px] md:px-0"
          />
          <Image
            src="/assets/images/magazine.png"
            alt="Magazine"
            width={1000}
            height={500}
            className="w-full h-[221px]  md:h-[600px]  mb-[24px] object-cover object-top"
          />
          <div className="px-[16px]">
            <h2 className="text-[#1E1C1C] font-bold text-[16px] leading-[24px] mb-[24px]">
              タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります
            </h2>
            <div className="flex justify-between gap-[16px]">
              <p className="text-[#C7C7C7] font-normal text-[16px] fugaz-one">
                2025/07/20
              </p>
              <Link
                href="/"
                className="text-[12px] font-medium pb-[2px] border-b inline-flex align-center text-[#1E1C1C]"
              >
                記事を読む
              </Link>
            </div>
          </div>
          <div className="w-full py-[64px] bg-[#F1F1F1] px-[12px] mb-[43px]">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              spaceBetween={0}
              slidesPerView={2}
              autoplay={{ delay: 2500 }}
              loop={true}
              className="slider-card"
            >
              {cardData.map((card) => (
                <SwiperSlide key={card.id}>
                  <div className="w-[90%] mx-auto">
                    <div
                      className={`rounded-lg h-[100px] md:h-48 ${card.color} flex items-end px-0`}
                    ></div>
                    <p className="text-black text-[12px] font-normal mt-[12px] line-clamp-2">
                      {card.text}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div>
            <div className="flex justify-between items-center mb-[47px] px-[16px] md:px-0">
              <div className="relative max-w-[100%]  xs:max-w-[100%] sm:max-w-[100%] md:max-w-[300px]">
                <p className="absolute top-0 right-[10px] xs:-right-[50px] sm:-right-[110px] md:-right-[110px] lg:-right-[110px] text-[#1E1C1C] text-[12px] xs:text-[12px] sm:text-[16px] md:text-[16px] inline font-medium">
                  今日から「スナッカー」になる。
                </p>
                <h2 className="text-[#1E1C1C] text-[30px]  xs:text-[30px] sm:text-[40px] md:text-[56px] font-medium bg-[#E6F03D] py-[14px] px-[4px] w-fit">
                  Be Snacker
                </h2>
                <p className="mt-[16px] font-[500] text-[13px]">
                  一流のスナッカーになるために、
                  <br /> 今日も夜な夜な通う。
                  <br /> 大人の青春を謳歌するために、
                  <br /> 今日もワクワクが止まらない。
                </p>
              </div>
              <div>
                <Image
                  src="/assets/svg/icon_illust.svg"
                  alt="PickUp"
                  width={124}
                  height={121}
                  className="w-[124px] h-[121px]"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-[1px] md:gap-x-[16px] gap-y-[30px] w-full">
              {SnackBarListing.map((pickup) => (
                <Card
                  key={pickup.id}
                  imageUrl={pickup.imageUrl}
                  title={pickup.title}
                  hashtag={pickup.hashtag}
                  date={pickup.date}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar (News, Ranking, Special) */}
        <div className="lg:col-span-1 space-y-[64px]">
          <div className="relative">
            <div className="mb-[28px]">
              <h2 className="text-[40px] font-normal text-center text-[#1E1C1C]  mb-[12px] leading-[50px]">
                Ranking
              </h2>
              <h3 className="text-[12px] font-bold text-center text-[#1E1C1C] mb-[16px]">
                月刊ランキング
              </h3>
            </div>
            <RankingCardList />
            <div className="w-full flex md:hidden max-w-[265px] mx-auto mt-[32px]">
              <Link
                className="h-[39px] items-center  text-[#B900B3] text-[12px] font-medium  hover:underline  whitespace-nowrap py-[15px] flex w-full justify-center bg-[#B900B30A] rounded-[7px]"
                href="#"
              >
                もっとみる →
              </Link>
            </div>
          </div>
          <div className="bg-white pt-[48px] md:px-[24px] relative">
            <div>
              <h2 className="text-[32px] font-normal text-center text-[#1E1C1C]  ">
                Pick Up
              </h2>
              <h3 className="text-[12px] font-normal text-center text-[#1E1C1C] mb-6">
                ピックアップ
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-y-[15px] w-full">
              {PickUpListing.map((pickup) => (
                <Card
                  key={pickup.id}
                  imageUrl={pickup.imageUrl}
                  title={pickup.title}
                  hashtag={pickup.hashtag}
                  date={pickup.date}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container px-[16px] md-[] md:mx-auto pt-[48px] pb-[32px]">
        <div className="flex w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[12px] w-full">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-[91px] md:h-[210px] rounded-[5px] bg-gray-300 w-full"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-10">
        <Prefecture />
      </div>
    </main>
  );
}
