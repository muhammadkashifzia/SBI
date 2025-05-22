import React from 'react';
import Image from 'next/image';


const BottleCard = ({ snack, index, handleEditBottle }) => {
  return (
    <div className="bg-white rounded-md px-[24px] pt-[24px] pb-[32px] relative">
      <div className="mb-[34px]">
        <h3 className="text-[#B900B3] font-[900] text-[16px] mb-[8px]">
          {snack.snackName}
        </h3>
        <p className="text-[12px] font-[400] text-[#888888]">{snack.location}</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-[#000000] mb-[8px] font-[400] text-[12px]">{snack.expiryDate}</p>
        <div className="mb-[16px]">
          <Image
            src="/assets/svg/bottle.svg"
            width={40}
            height={40}
            alt="bottle"
          />
        </div>
        <p className="text-[#000000] text-center text-[15px] font-[400]">{snack.bottleType}</p>
      </div>
      <div onClick={() => handleEditBottle(index)}>
        <Image
          src="/assets/svg/edit.svg"
          width={24}
          height={24}
          alt="edit icon"
          className="absolute top-2 right-2 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default BottleCard;
