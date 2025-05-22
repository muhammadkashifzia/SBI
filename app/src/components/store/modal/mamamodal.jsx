'use client';
import Image from 'next/image';

export default function MamaModal({ isOpen, onClose, member }) {
  if (!isOpen) return null; // Simple toggle

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      <div className="relative bg-[#B900B3] text-white w-full max-w-[856px] mx-[15px] md:mx-auto rounded-[50px] md:rounded-[30px] !rounded-tr-[10px] px-[24px] md:px-[72px] pb-[32px] pt-[56px] overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-[10px] right-[10px] bg-white w-[40px] h-[40px] flex justify-center items-center cursor-pointer"
        >
          <Image
            src="/assets/svg/icon_modal_close.svg"
            alt="close"
            width={20}
            height={20}
          />
        </button>

        {/* Header */}
        <div className="mt-[12px] mb-[16px] md:mb-[40px] text-center md:text-left">
          <h2 className="text-[24px] font-[900]">
            {member.name}
          </h2>
          <p className="text-[15px] font-[400]">東京都世田谷区</p>
        </div>

        {/* Profile section */}
        <div className="flex flex-col md:flex-row items-center text-center gap-[11px] md:gap-[32px]">
          <div className="w-[160px] h-[160px]">
            <Image
              src={member.image}
              alt={member.name}
              width={160}
              height={160}
              className="rounded-full object-cover"
            />
          </div>

          <div>
            {/* Name and Favorite Button */}
            <div className="flex flex-col gap-[16px] md:flex-row justify-center items-center md:justify-between border-b md:border-b border-white pb-[15px] mb-[20px]">
              <div className="flex gap-[4px] items-center">
                <Image
                  src="/assets/svg/icon_female.svg"
                  alt="ママの画像"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <p className="text-[20px] font-extrabold">りえママ</p>
              </div>
              <button className="flex gap-[4px] items-center justify-center border border-white rounded-[10px] md:rounded-[5px] py-[9px] w-full max-w-full md:max-w-[201px] h-[40px] md:h-[34px] px-[16px] bg-[#B900B3]">
                <Image
                  src="/assets/svg/icon_favourite.svg"
                  alt="お気に入り"
                  width={16}
                  height={16}
                />
                <p className="text-[13px] font-normal text-white">
                  お気に入りママに登録
                </p>
              </button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-[8px] justify-center md:justify-start">
              {[
                '歌うまママ1',
                '料理上手ママ',
                '恋バナ好きママ',
                '豪快ママ',
                '世話焼きママ',
                'お笑いママ',
                'パリピママ',
              ].map((tag, i) => (
                <span
                  key={i}
                  className="bg-white text-[#B900B3] p-[8px] rounded-[5px] text-[14px] font-bold"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Close Link */}
        <div className="block text-center mt-[32px] md:mt-[100px]">
          <button
            onClick={onClose}
            className=" underline text-white cursor-pointer text-[15px] font-[400]">
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
}
