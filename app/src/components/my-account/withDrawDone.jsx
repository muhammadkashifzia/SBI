'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function WithDrawDone() {
  return (
    <div className="min-h-screen px-[16px] pt-[16px]  max-w-[780px] mx-auto">
      <h2 className="text-center text-[#B900B3] font-normal text-[16px] flex items-center justify-center mb-[16px]">
        退会が完了しました
      </h2>
      <p className="text-center text-[#1E1C1C] text-[14px] font-normal mb-[32px] max-w-[350px] mx-auto">
        スナックサファリをご利用いただき、 ありがとうございました。
        またのご利用を、心よりお待ちしております。
      </p>
      <div className="relative bg-[#B900B3] text-white text-[14px] font-bold rounded-lg py-[30px] mb-[30px] text-center text-sm max-w-[257px] h-[80px] mx-auto">
        またお会いしましょ...！
        <Image
          src="/assets/svg/icon_polygon03.svg"
          alt="polygon"
          width={20}
          height={20}
          className="absolute -bottom-3 left-1/2 transform -translate-x-1/2"
        />
      </div>
      <div className="flex justify-center mb-[36px]">
        <img
          src="/assets/svg/icon_illust.svg"
          alt="Leave Illustration"
          className="h-[80] w-[82]"
          width={82}
          height={80}
        />
      </div>
      <div>
        <Link
          href="/"
          className="relative flex-1 py-2 rounded-[10px] h-[50px] border border-[#B900B3] text-[#B900B3] font-semibold text-sm justify-center flex items-center"
        >
          TOPに戻る
          <Image
            src="/assets/svg/icon_left_arrow.svg"
            alt="arrow"
            className="absolute right-[15px]"
            width={8}
            height={8}
          />
        </Link>
      </div>
    </div>
  );
}
