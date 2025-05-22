'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function MobileSidebar({
  sidebarOpen,
  setSidebarOpen,
  user,
  handleLogout,
}) {
  const [isClient, setIsClient] = useState(true);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  useEffect(() => {
    setIsClient(false);
  }, []);

  if (!sidebarOpen) return null;

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleCancelLogout = () => {
    setShowLogoutModal(false);
  };

  const handleConfirmLogout = () => {
    setShowLogoutModal(false);
    setSidebarOpen(false);
    handleLogout();
  };

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-[#171717a3] z-40"
          onClick={handleCloseSidebar}
        />
      )}

      {sidebarOpen && (
        <div
          className={`fixed top-0 left-0 h-full w-80 bg-[#F4F4F4] shadow-lg transition-transform duration-300 py-[16px] z-50 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="absolute right-[16px] cursor-pointer">
            <button onClick={handleCloseSidebar}>
              <Image
                src="/assets/svg/close-icon.svg"
                alt="Close Icon"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </button>
          </div>

          <div className="px-[16px] overflow-y-auto h-full">
            <div className="mb-[30px]">
              <Link href="/" onClick={handleCloseSidebar}>
                <Image
                  src="/assets/svg/logo.svg"
                  alt="Snack Safari Logo"
                  className="mb-[32px] mx-auto"
                  width={132}
                  height={56}
                />
              </Link>
            </div>

            <div className="mb-[30px] border-b border-[#EAEAEA]">
              <ul className="space-y-[15px] text-[#070707] font-medium text-[14px]">
                <li
                  className="cursor-pointer bg-[#006BA6]  py-[15px] px-[10px] rounded-[4px] text-white"
                  onClick={handleCloseSidebar}
                >
                  ホーム
                </li>
                <li
                  className="cursor-pointer bg-white py-[15px] px-[10px] rounded-[4px]"
                  onClick={handleCloseSidebar}
                >
                  Web3 割について
                </li>
                <li
                  className="cursor-pointer bg-white py-[15px] px-[10px] rounded-[4px]"
                  onClick={handleCloseSidebar}
                >
                  店舗無料掲載希望
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-[8px] mb-[32px]">
              <Link
                href="/login"
                onClick={handleCloseSidebar}
                className="w-full bg-[#006BA6] border border-[#006BA6] text-[#ffffff] font-semibold py-2 rounded flex justify-center items-center space-x-2"
              >
                <span className="text-[14px] font-[600]">ログイン</span>
              </Link>
              <Link
                href="/register"
                onClick={handleCloseSidebar}
                className="w-full bg-[#006BA6] text-white py-2 rounded flex justify-center items-center space-x-2"
              >
                新規登録
              </Link>
              <Link
                href="/register"
                onClick={handleCloseSidebar}
                className="relative w-full bg-[#ffffff] text-[#070707] py-2 rounded flex justify-center items-center space-x-2"
              >
                <div className="absolute left-[10px] top-[50%] transform -translate-y-1/2">
                  <Image
                    src="/assets/svg/bell-fill-icon.svg"
                    width={16}
                    height={18}
                    alt='bellIcon'
                  />
                  <span className="inline-block w-[7px] h-[7px] bg-[#FF0000] rounded-full absolute top-[-3px] left-[9px]"></span>
                </div>
                お知らせ

                         <span className='inline-block w-[7px] h-[7px] bg-[#FF0000] rounded-full absolute top-[50%] transform -translate-y-1/2  right-[10px]'></span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {showLogoutModal && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-[#171717a3]">
          <div className="bg-white rounded-[10px] w-[90%] max-w-[360px] text-center px-[24px] pt-[24px] pb-[48px]">
            <p className="text-[16px] font-bold mb-[24px]">
              ログアウトしますか？
            </p>
            <hr className="mb-[32px] text-[#DEDEDE]" />
            <button
              onClick={handleConfirmLogout}
              className="bg-[#FF0000] text-white w-full py-3 rounded-[10px] font-bold mb-[24px]"
            >
              ログアウトする
            </button>
            <button
              onClick={handleCancelLogout}
              className="text-[#FF0000] font-bold text-[15px] cursor-pointer"
            >
              キャンセル
            </button>
          </div>
        </div>
      )}
    </>
  );
}
