import React from 'react';
import Image from 'next/image';
import RestaurantGallery from '@/components/restaurant/restaurantGellery'
import RecommendedProducts from '@/components/restaurant/recommendedProducts'
import ShopInfo from '@/components/restaurant/ShopInfo'
import CopounCard from '@/components/restaurant/copounCard'
import ReviewList from '@/components/restaurant/reviewList';
export default function RestaurantListing() {
    const shopData = {
    name: "インペリアルバイキング サール／帝国ホテル 東京",
    furigana: "いんぺりあるばいきんぐ さーる",
    phone: "03-1234-5678",
    postalCode: "123-4567",
    address: "東京都千代田区千代田町1-2-3-XXビル10F",
    station: "銀座駅A10出口徒歩3分",
    parking: "有 or 無",
    website: "https://www.example.com",
    businessHours: [
      { day: "月曜日", time: "9:00 - 18:00" },
      { day: "火曜日", time: "9:00 - 18:00" },
      { day: "水曜日", time: "9:00 - 18:00" },
      { day: "木曜日", time: "9:00 - 18:00" },
      { day: "金曜日", time: "9:00 - 18:00" },
      { day: "土曜日", time: "定休日" },
      { day: "日曜日", time: "定休日" },
    ],
    socialLinks: {
      facebook: "#",
      instagram: "#",
      tiktok: "#",
      twitter: "#",
      youtube: "#",
    },
  };

  const dummyReviews = [
  {
    rating: 4,
    comment: `こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。`,
    username: 'ユーザーA',
  },
  {
    rating: 4,
    comment: `こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。`,
    username: 'ユーザーB',
  },
  {
    rating: 5,
    comment: `こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。。`,
    username: 'ユーザーC',
  },
   {
    rating: 3,
    comment: `こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。。`,
    username: 'ユーザーD',
  },
   {
    rating: 4,
    comment: `こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。。`,
    username: 'ユーザーE',
  },
   {
    rating: 2,
    comment: `こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。。`,
    username: 'ユーザーF',
  },
   {
    rating: 3,
    comment: `こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。こちらはコメントの参考文章です。ユーザーが入力した文章がこちらに反映されます。`,
    username: 'ユーザーG',
  },
];
  return (
    <div>
   
        <div className="overflow-hidden mb-6">
            <div className="flex flex-col gap-0">
              <img
                src="/assets/images/restaurant-image.png"
                alt="Listing"
                className="w-full h-full object-cover col-span-1"
              />
              <div className="container mx-auto pt-[30px] md:pt-[60px] px-[16px]">
                <h3 className="text-lg font-bold mb-[14px] flex gap-[10px]">
                  <Image
                    src="/assets/svg/checked-icon.svg"
                    alt="checkedIcon"
                    width={24}
                    height={24}
                  />
                  インペリアブッフェ - 帝国ホテルレストラン -
                </h3>
                <div className="flex gap-[20px] mb-[14.67px] flex-wrap">
                  <span className="text-[16px] font-medium text-[#006BA6] flex gap-[10px]">
                    <Image
                      src="/assets/svg/knifeIcon.svg"
                      alt="knife Icon"
                      width={15}
                      height={15}
                    />
                    グルメ / ラグジュアリー
                  </span>
                  <span className="flex gap-[10px]">
                    <Image
                      src="/assets/svg/map-location.svg"
                      alt="checkedIcon"
                      width={12}
                      height={17}
                    />
                    銀座駅 徒歩7分
                  </span>
                </div>
                <h2 className="font-medium text-[16px] leading-[28px] mb-[5px] text-[#2C3237]">
                  こちらはタグラインを表示する箇所になります。最大30文字程度です。
                </h2>
                <p className="text-[16px] font--normal text-[#2C3237] mb-[20px]">
                  こちらは店舗の説明になります。こちらは店舗の説明になります。こちらは店舗の説明になります。こちらは店舗の説明になります。こちらは店舗の説明になります。こちらは店舗の説明になります。こちらは店舗の説明になりますこちらは店舗の説明になります。こちらは店舗の説明になります。こちらは店舗の説明になります。こちらは店舗の説明になります。こちらは店舗の説明になります。こちらは店舗の説明になります。こちらは店舗の説明になります...こちらは店舗の説明になります。こちらは店舗の説明になります。こちらは店舗の説明になります。こちらは店舗の説明になります。こちらは店舗の説明になります。こちらは店舗の説明になります。こちらは店舗の説明になります......
                </p>
                <div className='mb-[10px]'>
                    <span className="flex gap-[10px] text-[16px] font-normal ">
                    <Image
                      src="/assets/svg/train-station-icon.svg"
                      alt="checkedIcon"
                      width={20}
                      height={20}
                    />
                    銀座駅 徒歩7分
                  </span>
                </div>
                <div className='flex gap-[30px]'>
                    <span className="flex gap-[10px] text-[16px] font-normal ">
                    <Image
                      src="/assets/svg/sun-icon.svg"
                      alt="checkedIcon"
                      width={20}
                      height={20}
                    />
                   5,000円〜5,999円
                  </span>
                    <span className="flex gap-[10px] text-[16px] font-normal ">
                    <Image
                      src="/assets/svg/moon-icon.svg"
                      alt="checkedIcon"
                      width={12}
                      height={12}
                    />
                   5,000円〜5,999円
                  </span>
                </div>
                 <div className=" mt-[15px] border-y border-[#C1C1C1] py-[15px]">
                  <p className='font-bold text-[16px] leading-[28px] mb-[24px] text-[#2C3237]'>レビュー / コメント数</p>
                  <div className="flex gap-x-[30px] items-center">
                    <div className="flex w-[max-content] items-center gap-[5px]"><span className='text-yellow-500 text-[24px]'>★★★★☆</span> <span className='text-[#2C3237] font-medium text-[22px]'>4.0 (20)</span></div>
                  </div>
                </div>
                <RestaurantGallery />
                  <RecommendedProducts />
                  <ShopInfo {...shopData} />
                  <CopounCard />
                   <ReviewList reviews={dummyReviews} />
              </div>
            </div>
          </div>
    </div>
  );
}
