'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function RegisterBannerComponent({
  heading,
  subtext,
  buttonLabel,
  note,
  imageSrc,
  linkUrl
}) {
  return (
    <div className="relative w-full overflow-hidden py-[41px] rounded-[5px] mt-[40px]">
      <div className="absolute inset-0">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt="Background"
            fill
            className="object-cover"
            sizes="100vw"
          />
        ) : (
        <div className="absolute inset-0 bg-[#00519ec7] bg-opacity-50" />
        )}
            <div className="absolute inset-0 bg-[#00519ec7] bg-opacity-50" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center gap-y-[40px] h-full pl-[37px] md:pl-[64px] pr-[37px] md:pr-[60px]">
        <div className="text-white text-center">
          <h3 className="text-[30px] leading-[38px] font-bold mb-[10px]">
            {heading}
          </h3>
          <p className="text-[16px] font-normal leading-[24px]">{subtext}</p>
        </div>

        <div>
        <Link
          href={linkUrl || "#"}
          className="mb-[10px] bg-white text-[#00519E] font-semibold px-4 py-2 rounded shadow hover:bg-gray-100 transition w-[295px] max-w-full h-[52px] flex justify-center items-center"
        >
          {buttonLabel}
        </Link>
          {note && <p className="text-white text-center">{note}</p>}
        </div>
      </div>
    </div>
  );
}
