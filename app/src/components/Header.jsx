"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MobileSidebar from '@/components/MobileSidebar';
export default function HeaderWithSidebar() {

const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
 const [user, setUser] = useState({
    name: '田中 太郎',
    avatar: '/assets/images/profile-images.png',
  });

  return (
    <div>
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <header className=" text-white p-4 flex justify-between items-center w-full z-50">
          <button onClick={() => setSidebarOpen(true)}>
            <Image
              src="/assets/svg/hamburger.svg"
              alt="hamburger"
              width={24}
              height={16}
              className="cursor-pointer"
            />
          </button>

          {!user ? (
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none w-[48px] h-[48px]"
              >
                <Image
                  src={user.avatar}
                  alt="Profile"
                  width={40}
                  height={40}
                  className="rounded-full w-[48px] h-[48px] object-cover object-top cursor-pointer"
                />
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-[8px] w-[240px] bg-[#B900B3] text-white rounded-[10px] shadow-lg pl-[16px] pr-[24px] pt-[18px] pb-[24px] z-50">
                  <div className="flex items-center gap-[8px]">
                    <Image
                      src="/assets/svg/icon_glass.svg"
                      alt="Glass"
                      width={20}
                      height={20}
                      className="w-[32px] h-[32px]"
                    />
                    <div>
                      <div className="font-bold text-[15px]">{user.name}</div>
                      <div className="text-[12px] font-[300]">
                        マイページ表示
                      </div>
                    </div>
                  </div>
                  <hr className="my-[16px] border-white" />
                  <ul className="space-y-3 text-[14px] font-bold">
                    <li>– 気になるスナック</li>
                    <li>– 行ったスナック</li>
                    <li>– お気に入りママ</li>
                    <li>– ボトルキープ</li>
                  </ul>
                  <hr className="my-[16px] border-white" />
                  <button className="w-full text-left font-bold text-[14px]">
                    ログアウト
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-[10px] md:gap-[8px]">
              <Link
                href="/login"
                className="md:bg-[#B900B3] text-white px-0 md:px-3 py-[12px] rounded flex items-center gap-[4px]  md:flex-col cursor-pointer"
              >
                <Image
                  src="/assets/svg/icon_user.svg"
                  alt="Iconuser"
                  width={14}
                  height={14}
                />
                <span className="text-[15px] font-semibold">ログイン</span>
              </Link>
              <Link
                href="/register"
                className="bg-[#B900B3] text-white px-3 py-[12px] rounded flex items-center gap-[4px] md:flex-col  cursor-pointer"
              >
                <Image
                  src="/assets/svg/icon_glass.svg"
                  alt="Iconglass"
                  width={14}
                  height={14}
                />
                <span className="text-[15px] font-semibold">新規登録</span>
              </Link>
            </div>
          )}
        </header>

        <MobileSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          user={user}
        />
      </div>
    </div>
  );
}
