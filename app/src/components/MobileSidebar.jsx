'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function MobileSidebar({ sidebarOpen, setSidebarOpen }) {
  if (!sidebarOpen) return null;

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
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
                <li className="w-full">
                  <Link
                    href="/"
                    className="cursor-pointer bg-[#006BA6]  py-[15px] px-[10px] rounded-[4px] text-white w-full block"
                    onClick={handleCloseSidebar}
                  >
                    ホーム
                  </Link>
                </li>
                <li className="w-full">
                  <Link
                    href="/about"
                    className="cursor-pointer bg-white py-[15px] px-[10px] rounded-[4px] w-full block"
                    onClick={handleCloseSidebar}
                  >
                    Web3 割について
                  </Link>
                </li>
                <li className="w-full">
                  <Link
                    href="/about"
                    className="cursor-pointer bg-white py-[15px] px-[10px] rounded-[4px] w-full block"
                    onClick={handleCloseSidebar}
                  >
                    店舗無料掲載希望
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-[8px] mb-[32px]">
              <Link
                href="/login"
                onClick={handleCloseSidebar}
                className="w-full bg-[#006BA6] border border-[#006BA6] text-[#ffffff] font-semibold py-2 rounded flex justify-center items-center space-x-2"
              >
                <span className="text-[14px] font-[600]">
                  ユーザー向けログイン
                </span>
              </Link>
              <Link
                href="/register"
                onClick={handleCloseSidebar}
                className="w-full bg-[#006BA6] text-white py-2 rounded flex justify-center items-center space-x-2"
              >
                店舗向けログイン
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
                    alt="bellIcon"
                  />
                  <span className="inline-block w-[7px] h-[7px] bg-[#FF0000] rounded-full absolute top-[-3px] left-[9px]"></span>
                </div>
                お知らせ
                <span className="inline-block w-[7px] h-[7px] bg-[#FF0000] rounded-full absolute top-[50%] transform -translate-y-1/2  right-[10px]"></span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
