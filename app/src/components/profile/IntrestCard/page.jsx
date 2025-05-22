import React from 'react';
import Image from 'next/image';


const IntrestCard = ({ snack, index }) => {
  return (
    <>
      <div key={index} className=" bg-white rounded-md p-[10px] flex">
        <div className="flex-shrink-0 mr-[16px]">
          <Image
            src="/assets/images/post.png"
            alt={snack.name}
            width={110}
            height={110}
            className="rounded-md object-cover"
          />
        </div>
        <div className="flex-grow mt-[14px]">
          <h3 className="text-[#B900B3] font-[900] text-[18px] mb-[4px]">
            {snack.name}
          </h3>
          <p className="text-[14px] text-[#C0C0C0] font-[400]">
            {snack.location}
          </p>
        </div>
        <div className="flex items-start">
          {/* <Eye className="text-purple-600" size={20} /> */}
          <Image src="/assets/svg/heart.svg" width={20} height={20} alt="eye" />
        </div>
      </div>


    </>
  );
};

export default IntrestCard;
