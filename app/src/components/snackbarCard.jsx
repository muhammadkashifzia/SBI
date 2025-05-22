"use client";
import Image from 'next/image';
import PropTypes from 'prop-types';
import Link from 'next/link';
const SnackBarCard = ({ id, name, location, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg  transition-transform duration-300 hover:scale-[1.02] flex gap-[10px] border-b-1 border-[#E9E9E9] pb-[16px]">
      <div className="relative w-[100px] h-[66px]">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover w-[100px] rounded-[12px]"
        />
        <div className="absolute top-[-5px] left-[-5px] bg-[#B900B3] text-white text-[12px] font-[400] w-[20px] h-[20px] border border-[#ffffff] rounded-full flex items-center justify-center fugaz-one">
          {id}
        </div>
      </div>
      <div>
        <Link
          href={`/store/${id}`}
          className="text-[14px] font-bold text-[#B900B3]"
        >
          {name}
        </Link>
        <div className="flex items-center mt-[8px] text-gray-600 gap-[4px]">
          <Image
            src="/assets/svg/icon_place.svg"
            alt="location"
            width={12}
            height={12}
          />
          <p className="text-[#98958F] text-[12px] font-normal">{location}</p>
        </div>
      </div>
    </div>
  );
};

SnackBarCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default SnackBarCard;