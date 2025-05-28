// components/ListingItem.jsx
import React from 'react';
import Image from 'next/image';
export default function ListingItem() {
  return (
    <div className="rounded-md overflow-hidden shadow-sm mb-6">
      <div className="flex flex-col gap-0">
        <img
          src="/assets/images/restaurant-image.png"
          alt="Listing"
          className="w-full h-full object-cover col-span-1"
        />
        <div className="col-span-2 p-4">
          <h3 className="text-lg font-bold mb-[14px] flex gap-[10px]">
            <Image
              src="/assets/svg/checked-icon.svg"
              alt="checkedIcon"
              width={24}
              height={24}
            />
            インペリアブッフェ - 帝国ホテルレストラン -{' '}
          </h3>
          <div className="flex gap-[10px] mb-[14.67px]">
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
          <p className="text-sm text-gray-700 mb-2">
            こちらは高級ホテル内にある贅沢な雰囲気と料理が魅力のレストランです。景色も最高で、記念日や特別な日におすすめです。
          </p>
          <div className="flex items-center justify-between text-sm mt-[14px]">
          <div className='w-[50%] flex'>  <span className=" font-medium text-[14px] text-[#006BA6] border border-[#006BA6] rounded-[4px] py-[9px] px-[12.5px]">
              クーポン掲載有り
            </span></div>
            <div className="flex gap-x-[30px] items-center w-[50%] justify-end">
              <div className="text-yellow-500 flex w-[max-content]">★★★★☆ 4.0 (20)</div>
              <button className="bg-[#006BA6] text-white px-[46.5px] py-[12px] rounded hover:bg-blue-600 max-w-[173px] w-full h-[36px] flex items-center justify-center">
                詳細ページ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
