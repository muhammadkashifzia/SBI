"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function WithDrawConfirmation() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="min-h-screen px-[16px] pt-[16px]  max-w-[780px] mx-auto">
      <h2 className="text-center text-[#B900B3] font-bold text-[16px] flex items-center justify-center gap-[4px] mb-[16px]">
        <span>
          <Image
            src="/assets/svg/icon_edit03.svg"
            alt="warning"
            width={18}
            height={18}
          />
        </span>
        退会手続き
      </h2>
      <div className="relative bg-[#B900B3] text-white text-[14px] font-bold rounded-lg py-[30px] mb-[30px] text-center text-sm max-w-[257px] h-[80px] mx-auto">
        退会…本当に？
        <Image
          src="/assets/svg/icon_polygon03.svg"
          alt="polygon"
          width={20}
          height={20}
          className="absolute -bottom-3 left-1/2 transform -translate-x-1/2"
        />
      </div>
      <div className="flex justify-center mb-[32px]">
        <img
          src="/assets/svg/icon_illust.svg"
          alt="Leave Illustration"
          className="h-[80] w-[82]"
          width={82}
          height={80}
        />
      </div>

      <p className="text-center text-[#B900B3] text-[15px] font-[700] mb-[40px]">
        スナックサファリを退会すると、
        <br />
        これまでの記録データが全て削除され、
        <br />
        機能がご利用頂けなくなります。
      </p>
      <div className="bg-white px-[16px] pt-[24px] pb-[40px] rounded-md mb-[32px]">
        <h3 className="font-[500] text-[15px] mb-[24px] flex items-center gap-1 justify-center border-b border-[#EAEAEA] pb-[24px]">
          <img
            src="/assets/svg/icon_attention.svg"
            alt="Leave Illustration"
            className="h-[16] w-[16]"
            width={16}
            height={16}
          />
          退会における注意事項
        </h3>
        <ul className="list-disc pl-5 text-[14px] space-y-[10px] text-[#1E1C1C] font-normal">
          <li>PC、スマートフォン、全てのデバイスで退会が適用されます。</li>
          <li>これまでに記録した全てのデータが削除されます。</li>
          <li>
            一度退会した後のデータ及びアカウント復旧は行うことができません。
          </li>
        </ul>
      </div>
      <div className="bg-[#F2F2F2] pt-[32px] px-[20px] pb-[40px] rounded-[10px]">
        <p className="text-[#1E1C1C] font-bold text-[15px] mb-[21px] text-center">
          退会手続き
        </p>
        <div className="flex items-center gap-[10px] text-[15px] font-normal justify-center mb-[37px]">
          <input
            id="notes"
            className="appearance-none w-[32px] h-[32px] border-3 border-[#DEDEDE] custom-checkbox !rounded-[5px]"
            onClick={() => setChecked(!checked)}
            type="checkbox"
            checked={checked}
            readOnly
          />
          <label htmlFor="notes" className="cursor-pointer font-normal text-[400]">
            注意事項を確認しました。
          </label>
        </div>
        <div className="flex gap-4">
          <Link
            href="/my-account"
            className="relative flex-1 py-2 rounded-[10px] h-[50px] border border-[#B900B3] text-[#B900B3] font-[700] text-[15px] justify-center flex items-center"
          >
            退会しない
            <Image
              src="/assets/svg/icon_left_arrow.svg"
              alt="arrow"
              className="absolute right-[15px]"
              width={8}
              height={8}
            />
          </Link>
          <Link
            href="/withdraw-done"
            className={`flex-1 py-2 rounded-[10px] h-[50px] text-white text-[15px] font-bold justify-center flex items-center ${
              checked ? 'bg-gray-800' : 'bg-gray-400 cursor-not-allowed'
            }`}
            disabled={!checked}>
            退会する
          </Link>
        </div>
      </div>
    </div>
  );
}
