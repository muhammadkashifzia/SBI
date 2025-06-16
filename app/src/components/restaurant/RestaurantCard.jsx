import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
const RestaurantCard = ({ restaurant }) => {
  const { id } = restaurant;
  const ratingNumber = parseFloat(restaurant.rating.split(' ')[0]);
  const reviewsCount = restaurant.rating.match(/\((\d+)\)/)?.[1];

  const renderStars = () => {
    const fullStars = Math.floor(ratingNumber);
    const hasHalfStar = ratingNumber - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} className="text-yellow-500 inline-block mr-1" />
        ))}
        {hasHalfStar && <FaStarHalfAlt className="text-yellow-500 inline-block mr-1" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} className="text-yellow-500 inline-block mr-1" />
        ))}
      </>
    );
  };

  return (
    <div>
      <div className="relative">
          <Link  href={`/restaurants/${id}`}> 
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-[200px] object-cover rounded-[5px] mb-[15px]"
        />
        </Link>
        <span className="inline-flex gap-[10px] text-white bg-[#9F8C5B] text-sm px-2 py-[11px] rounded-full absolute bottom-[11px] left-[12px] h-[42px] text-[16px] font-bold w-[120px] justify-center items-center">
          <Image src='/assets/svg/location-icon.svg' width={14} height={20} alt="locationIcon"/> {restaurant.area}
        </span>
      </div>
      <div>
        <Link  href={`/restaurants/${id}`} className="text-[22px] font-bold mb-[14px] text-[#2C3237]">{restaurant.name}</Link>
        <div className="flex items-center gap-[5px]">
         <div>{renderStars()}</div>
          <span className="text-gray-700 text-sm">
            {ratingNumber.toFixed(2)} ({reviewsCount})
          </span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;