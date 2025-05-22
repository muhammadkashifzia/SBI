'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MobileSidebar from '@/components/MobileSidebar';

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const user = {
    name: '田中 太郎',
    avatar: '/assets/images/profile-images.png',
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative z-10 bg-[#FAF8F4]">
      <header className="md:container mx-auto  py-[16px] md:py-[12px] flex items-center justify-start md:justify-between px-4 relative">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/assets/svg/logo.svg"
            alt="Logo"
            width={69}
            height={24}
            className="w-[132.92px] h-[56px] md:w-[132.92px] md:h-[56px]"
          />
        </Link>
        <div className="hidden md:flex w-full gap-[30px] justify-end">
          <div className="flex gap-[10px] items-center text-[16px] font-bold leading-[24px]">
            <Link href="/login">Web3 割について</Link>|
            <Link href="/login">店舗無料掲載希望</Link>
          </div>
          <div className="flex gap-[30px]">
            <Link
              href="/login"
              className="break-keep bg-[#006BA6] text-[#ffffff] px-3 py-[12px] rounded-[5px] flex items-center gap-[4px] justify-center cursor-pointer text-[16px] font-bold leading-[24px] max-w-[177px] w-full h-[36px]"
            >
              ユーザー向けログイン
            </Link>
            <Link
              href="/register"
              className="bg-[#006BA6] text-[#ffffff] px-3 py-[12px] rounded-[5px] flex items-center gap-[4px] justify-center cursor-pointer text-[16px] font-bold leading-[24px] max-w-[177px] w-full h-[36px]"
            >
              店舗向けログイン
            </Link>
          </div>
        </div>
        <div className="ml-[18px] hidden md:flex">
          <Link
            href="/register"
            className="relative bg-[#006BA6] text-[#ffffff] px-3 py-[12px] rounded-[4px] flex items-center  cursor-pointer max-w-full w-[36px] h-[36px]"
          >
            <Image src="/assets/svg/bell-icon.svg" width={16} height={18} alt='bellIon'/>
            <span className='inline-block w-[7px] h-[7px] bg-[#FF0000] rounded-full absolute top-[8px] left-[19px]'></span>
          </Link>
        </div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="md:hidden mr-4 focus:outline-none absolute right-[0px] top-[50%] transform -translate-y-1/2"
        >
          <div className="w-[30px] h-6 relative flex flex-col justify-center items-center">
            {sidebarOpen ? (
              <>

                <span className="absolute h-0.5 w-full bg-[#2c3237] rotate-45" />
                <span className="absolute h-0.5 w-full bg-[#2c3237] -rotate-45" />
              </>
            ) : (
              <>
                 <span className="absolute h-0.5 w-full bg-[#2c3237] top-[0%]" />
                <span className="absolute h-0.5 w-full bg-[#2c3237] top-[30%]" />
                <span className="absolute h-0.5 w-full bg-[#2c3237] top-[60%]" />
              </>
            )}
          </div>
        </button>
      </header>

      <MobileSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        user={user}
      />
    </div>
  );
}
