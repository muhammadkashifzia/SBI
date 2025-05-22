import React from 'react';
import Image from 'next/image';
// import CouponIcon from '../../assets/svgs/coupon/couponIcon.svg';

const CouponCard = ({ coupon }) => {
  return (
    <div>
      <div
        key={coupon.id}
        className="border border-[#B900B3] rounded-[10px] overflow-hidden flex flex-col-reverse md:flex-row py-0 md:py-[16px] px-0 md:px-[16px] gap-0 md:gap-[16px]"
      >
        {/* Coupon Vertical Bar - Hidden on mobile, shown on sm+ */}
        <div className="hidden md:flex w-12 flex-col items-center justify-center text-[#B900B3] text-[32px] font-normal">
          <h2 className="text-[32px] font-normal text-[#B900B3] -rotate-90 font-modak">
            coupon
          </h2>
        </div>
        {/* Coupon Content */}
        <div className="flex-1 relative">
          <div className="p-[16px] md:p-0">
            <div className="flex mdflex-col flex-row sm:items-center gap-[8px] sm:gap-2 mb-[8px]">
              {coupon.forNewCustomers && (
                <span className="inline-block bg-[#B900B3] font-[400] text-white text-xs sm:text-[14px] px-1 mb-2 sm:mb-0 w-fit p-[4px]">
                  ご新規さま
                </span>
              )}
              <h3 className="text-[15px] font-[700] text-[#B900B3]">
                {coupon.title}
              </h3>
            </div>

            <p className="text-[14px] font-normal mt-2 sm:mt-0 mb-4 sm:mb-[42px]">
              {coupon.description}
            </p>
            <div className="text-[12px] font-[300] text-gray-500">
              {coupon.notes.map((note, index) => (
                <p key={index}>{note}</p>
              ))}
            </div>
          </div>
        </div>
        <div className='w-2 min-h-full border-l-3 border-[#B900B3] border-dotted hidden md:inline-block'></div>
        {/* Coupon Value */}
        <div className=" md:w-[230px] rounded-t-[5px] md:rounded-[5px] bg-[#B900B3] flex items-center justify-center relative py-[8px]">
          <p className="hidden md:flex text-white text-center text-[15px] sm:text-xl font-[700] whitespace-pre-line leading-relaxed">
            {coupon.value}
          </p>
          <h2 className="flex md:hidden text-white text-[16px] font-normal">SPECIAL COUPON</h2>
          <Image
            src="/assets/svg/icon_special_coupon.svg"
            alt="Coupon"
            width={40}
            height={40}
            className="hidden md:block w-[90%] h-auto absolute left-1/2 top-[50%] transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default CouponCard;
