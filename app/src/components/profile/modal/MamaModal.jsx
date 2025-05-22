'use client';
import Image from 'next/image';
import { X, Heart, User } from 'lucide-react';

export function MamaModal({
  isOpen,
  onClose,
  snackName,
  location,
  mamaName,
  imageUrl,
  tags,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#00000099] bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#B900B3] text-white rounded-[30px] w-full max-w-md relative overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-white rounded p-1"
        >
          <X className="h-5 w-5 text-[#B900B3]" />
        </button>

        {/* Snack info */}
        <div className="text-center pt-12 pb-[16px]">
          <h2 className="text-[16px] font-[900]">{snackName}</h2>
          <p className="text-[12px] font-[400] text-white/80">{location}</p>
        </div>

        {/* Mama profile */}
        <div className="flex flex-col items-center pb-4">
          <div className="w-[160px] h-[160px] rounded-full overflow-hidden ">
            <Image
              src={imageUrl || '/placeholder.svg'}
              alt={mamaName}
              width={128}
              height={128}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex items-center mt-2  rounded-full px-3 py-1 gap-1">
            {/* <User size={16} className="text-[#B900B3] mr-1" /> */}
            <div className='bg-white rounded-full w-6 h-6 flex items-center justify-center'>
            <Image src="/assets/svg/user.svg" width={16} height={16} alt="user" className='text-[#B900B3]' />
            </div>
            <span className="text-white font-[900] text-[16px]">{mamaName}</span>
          </div>
        </div>

        {/* Remove from favorites button */}
        <div className="px-4 pb-[32px]">
          <button className="w-full bg-white rounded-[10px] py-[12px] flex items-center justify-center">
            <Heart className="h-5 w-5 text-[#B900B3] fill-[#B900B3] mr-1" />
            <span className="text-[#B900B3] text-[13px] font-[400]">
              お気に入りママを解除
            </span>
          </button>
        </div>

        {/* Tags */}
        <div className="px-4 pb-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-white text-[#B900B3] rounded-md px-3 py-1 text-[12px] font-[700]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Close button */}
        <div className=" p-4">
          <button onClick={onClose} className="w-full text-[14px] font-[400] text-center text-white underline">
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
}
