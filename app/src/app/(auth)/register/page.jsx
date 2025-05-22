import { FaFacebookF, FaEnvelope, FaUser } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { SiLine } from 'react-icons/si';
import Image from 'next/image';
import Link from 'next/link';
export default function Register() {
  return (
    <div className="min-h-screen  flex  justify-center px-4 pt-[16px] pb-[150px]">
      <div className="bg-transparent sm:bg-white max-w-[712px] w-full  pb-[56px] px-[16px] md:px-[116px] pt-[80px] sm:pt-[48px] text-center lg:px-[116px]">
        <Image
          src="/assets/svg/logo.svg"
          alt="スナックサファリ"
          className="mb-[32px] mx-auto"
          width={180}
          height={64}
        />

        <h2 className="text-[18px] text-[#1E1C1C] font-bold">新規登録</h2>

        <div className="space-y-[16px] mt-4">
          <button className="w-full flex items-center justify-center border-[0.8px] border-[#1E1C1C] rounded-[8px]  py-[13px] px-[16px] hover:bg-gray-50 relative text-[15px] font-bold text-[#1E1C1C]">
            <Image
              src="/assets/svg/icon_mail 1.svg"
              alt="mailIon"
              className="absolute left-4"
              width={20}
              height={20}
            />
            メールアドレスで登録
          </button>

          <button className="flex w-full items-center justify-center border-[0.8px] border-[#1E1C1C] rounded-[8px]  py-[13px] px-[16px] hover:bg-gray-50 relative text-[15px] font-bold text-[#1E1C1C]">
            <Image
              src="/assets/svg/icon_google.svg"
              alt="googleIon"
              className="absolute left-4"
              width={20}
              height={20}
            />
            Googleで登録
          </button>

          <button className="hidden sm:flex w-full items-center justify-center border-[0.8px] border-[#1E1C1C] rounded-[8px]  py-[13px] px-[16px] hover:bg-gray-50 relative text-[15px] font-bold text-[#1E1C1C]">
            <Image
              src="/assets/svg/icon_line.svg"
              alt="lineIon"
              className="absolute left-4"
              width={20}
              height={20}
            />
            LINEで登録
          </button>

          <button className="hidden sm:flex w-full items-center justify-center border-[0.8px] border-[#1E1C1C] rounded-[8px]  py-[13px] px-[16px] hover:bg-gray-50 relative text-[15px] font-bold text-[#1E1C1C]">
            <Image
              src="/assets/svg/icon_fb.svg"
              alt="lineIon"
              className="absolute left-4"
              width={20}
              height={20}
            />
            Facebookで登録
          </button>
        </div>

        <p className="text-[12px] text-[#666666] mt-[40px] sm:mt-4 font-normal">
          <a href="#" className="text-[#0073CC] underline">
            利用規約
          </a>
          及び
          <a href="#" className="text-[#0073CC] underline ml-1">
            プライバシーポリシー
          </a>
          に同意の上、登録又はログインへお進みください。
        </p>

        <div className="border-t border-[#CCCCCC] mt-[32px] pt-[24px]">
          <p className="text-[15px] font-medium mb-[16px] text-[#1E1C1C]">
            アカウントをお持ちの方
          </p>
          <Link
            href="/login"
            className="w-full flex items-center justify-center border-[0.8px] border-[#B900B3] text-[#B900B3] rounded-[8px] py-[13px] px-[16px] hover:bg-purple-50 relative text-[15px] font-bold "
          >
            <FaUser className="absolute left-4" />
            ログイン
          </Link>
        </div>
      </div>
    </div>
  );
}
