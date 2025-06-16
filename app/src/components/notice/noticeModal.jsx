import React from "react";
import Image from "next/image";
export default function AnnouncementModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000cc]">
      <div className="bg-white max-w-[500px] rounded-[5px] shadow-lg relative p-[24px]">
        <div className="flex items-center justify-between">
          <h2 className="text-[20px] font-bold leading-[24px] test-[#212121]">お知らせ</h2>
          <button onClick={onClose} className="text-black cursor-pointer text-[24px]">
            ×
          </button>
        </div>
        <div className="mt-[10px]">
          <div className="text-sm text-gray-800 border border-[#DDDDDD] px-[10px] py-[20px] rounded">
            <div className="flex items-center text-[20px] font-normal text-black mb-2">
           <Image src="/assets/svg/alert-icon.svg" alt="Notice Icon" width={20} height={20} className="mr-[10px]" />
            <span>2025年4月1日</span>
          </div>
           <p className="text-[20px] font-normal text-black pl-[30px]"> お知らせのコンテンツお知らせのコンテンツお知らせのコンテンツお知らせのコンテンツ
            お知らせのコンテンツお知らせのコンテンツお知らせのコンテンツお知らせのコンテンツ</p>
          </div>
        </div>
          <button className="bg-[#006BA6] text-white text-sm px-4 py-[8px] rounded w-full max-w-[209px] mt-[10px] mx-auto flex items-center justify-center cursor-pointer">  
            詳しくはこちら
          </button>
      </div>
    </div>
  );
}
