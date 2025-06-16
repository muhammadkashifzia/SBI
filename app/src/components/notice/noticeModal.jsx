import React from "react";

export default function AnnouncementModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000cc]">
      <div className="bg-white max-w-[500px] rounded shadow-lg relative">
        <div className="flex items-center justify-between px-4 py-2">
          <h2 className="text-[20px] font-bold leading-[24px] test-[#212121]">お知らせ</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black cursor-pointer">
            ×
          </button>
        </div>
        <div className="px-4 py-3">
          <div className="text-sm text-gray-800 border border-[#DDDDDD] px-[10px] py-[20px] rounded">
            <div className="flex items-center text-[20px] font-normal text-black mb-2">
            <span className="mr-2">ℹ️</span>
            <span>2025年4月1日</span>
          </div>
           <p className="text-[20px] font-normal text-black"> お知らせのコンテンツお知らせのコンテンツお知らせのコンテンツお知らせのコンテンツ
            お知らせのコンテンツお知らせのコンテンツお知らせのコンテンツお知らせのコンテンツ</p>
          </div>
        </div>
        <div className="px-4 pb-4">
          <button className="bg-[#006BA6] text-white text-sm px-4 py-1.5 rounded w-full max-w-[209px] mt-[10px] mx-auto flex items-center justify-center cursor-pointer">  
            詳しくはこちら
          </button>
        </div>
      </div>
    </div>
  );
}
