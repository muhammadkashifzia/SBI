import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FilledStar = () => (
  <svg
    className="w-[20px] h-[20px] fill-[#FFB20E]"
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3.82016 19.5L9.99992 15.1295L16.1797 19.5L13.9277 12.278L20 7.75722L12.4277 7.66454L10 0.5L7.57227 7.66454L0 7.75722L6.07226 12.278L3.82016 19.5Z" />
  </svg>
);

const EmptyStar = () => (
  <svg
    className="w-[20px] h-[20px] fill-[#DDDDDD]"
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3.82016 19.5L9.99992 15.1295L16.1797 19.5L13.9277 12.278L20 7.75722L12.4277 7.66454L10 0.5L7.57227 7.66454L0 7.75722L6.07226 12.278L3.82016 19.5Z" />
  </svg>
);

export default function ListingItem({
  id,
  title,
  category,
  station,
  tagline,
  description,
  rating,
  reviews,
  image,
}) {
  return (
    <div className="rounded-md overflow-hidden shadow-sm mb-6">
      <div className="flex flex-col gap-0">
        <img
          src={image}
          alt="Listing"
          className="w-full h-full object-cover col-span-1"
        />
        <div className="col-span-2 p-4">
          <h3 className="text-[22px] font-bold mb-[14px] flex gap-[10px] text-[#2C3237]">
            <Image
              src="/assets/svg/checked-icon.svg"
              alt="checkedIcon"
              width={24}
              height={24}
            />
            {title}
          </h3>

          <div className="flex gap-[20px] mb-[14px] md:mb-[14.67px] md:flex-row flex-col">
            <span className="text-[16px] font-medium text-[#006BA6] flex gap-[10px]">
              <Image
                src="/assets/svg/knifeIcon.svg"
                alt="knife Icon"
                width={15}
                height={15}
              />
              <span className="font-bold text-[16px] text-[#2C3237]">
                {category}
              </span>
            </span>
            <span className="flex gap-[10px]">
              <Image
                src="/assets/svg/map-location.svg"
                alt="map location"
                width={12}
                height={17}
              />
              {station}
            </span>
          </div>

          <h2 className="font-medium text-[16px] leading-[28px] mb-[5px] text-[#2C3237]">
            {tagline}
          </h2>

          <p className="text-sm text-gray-700 line-clamp-2">{description}</p>

          <div className="flex items-start md:items-center justify-start md:justify-between text-sm mt-[14px] flex-col md:flex-row gap-y-[20px]">
            <div className="w-full md:w-[200px] flex">
              <span className="font-medium text-[14px] text-[#006BA6] border border-[#006BA6] rounded-[4px] py-[3px] px-[12.5px]">
                クーポン掲載有り
              </span>
            </div>

            <div className="inline-flex gap-y-[20px] md:gap-y-[0px] gap-x-[15px] md:gap-x-[30px] items-start md:items-center justify-start md:justify-end w-full flex-col md:flex-row">
              <div className="flex items-center gap-1 w-[160px] break-keep">
                {Array.from({ length: 5 }, (_, i) =>
                  rating > i ? <FilledStar key={i} /> : <EmptyStar key={i} />,
                )}
                <span className="text-[16px] font-normal text-[#2C3237]">
                  {rating}
                </span>
                <span className="text-sm text-gray-500">({reviews})</span>
              </div>

              <Link
                href={`/restaurants/${id}`}
                className="bg-[#006BA6] text-white px-[10px] py-[12px] rounded-[4px]  w-full h-[36px] flex items-center justify-center max-w-[173px]"
              >
                詳細ページ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
