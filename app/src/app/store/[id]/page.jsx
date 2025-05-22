'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Prefecture from '@/components/prefecture/prefecture';
import Blogs from '@/components/blogs/blog';
import Link from 'next/link';
import CouponCard from '@/components/store/coupon/couponcard';
import StoreInfo from '@/components/store/storeInfo/storeInfo';
import MamaCast from '@/components/store/mamacast/mamacast';
import StorePrefecture from '@/components/store/prefecture/prefecture';
import dynamic from 'next/dynamic';

export default function StoreDetail() {
  const images = [
    '/assets/images/magazine.png',
    '/assets/images/magazine1.png',
    '/assets/images/magazine2.png',
    '/assets/images/magazine3.png',
    '/assets/images/magazine4.png',
    '/assets/images/magazine2.png',
    '/assets/images/magazine3.png',
    '/assets/images/magazine1.png',
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBottle, setSelectedBottle] = useState(null);
  const [mainImage, setMainImage] = useState(images[0]);
  const handleEditBottle = (index) => {
    setSelectedBottle(index);
    setIsModalOpen(true);
  };
  const handleUpdateBottle = (data) => {
    console.log('Updating bottle with data:', data);

  };

  const handleDeleteBottle = () => {
    console.log('Deleting bottle:', selectedBottle);

  };

  const BottleEditModal = dynamic(
    () => import('@/components/store/modal/reviewmodal'),
    {
      ssr: false,
    },
  );

  const [coupons, setCoupons] = useState([
    {
      id: 1,
      forNewCustomers: true,
      title: '初回セット60分 4,000円',
      description: 'ご新規さま限定で、初回セット60分4000円にてご案内致します！',
      notes: [
        '※初回ご来店時のみ有効です',
        '※他の割引サービスとの併用はできません',
      ],
      value: '初回セット60分\n4,000円',
    },
    {
      id: 2,
      forNewCustomers: true,
      title: 'カラオケ無料',
      description: 'ご新規さま限定で、カラオケ料金無料にてご案内致します！',
      notes: [
        '※初回ご来店時のみ有効です',
        '※他の割引サービスとの併用はできません',
      ],
      value: 'カラオケ無料',
    },
  ]);

  return (
    <main className="pt-[0px] md:pt-[56px]  pb-[100px]">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-0 md:gap-[40px]  md:px-[16px] ">
        <div className="lg:col-span-3">
          <div className="bg-white pl-[16px] md:pl-[40px]  pr-[16px] md:pr-[40px] pb-[56px] pt-[24px] md:py-[48px]">
            <div className="mb-[24px] md:mb-[40px]">
              <h1 className="text-[20px] md:text-[24px] font-[900] text-[#B900B3] mb-[4px]">
                スナック りえ
              </h1>
              <p className="text-[#888888] font-normal text-[15px]">
                東京都世田谷区　最寄駅：下北沢
              </p>
            </div>
            <div className="max-w-7xl mx-auto flex md:grid grid-cols-1 md:grid-cols-2 gap-[24px] flex-col-reverse md:flex-row mb-[48px] md:mb-[80px]">
              <div>
                <div className="gap-[10px] flex-col  bg-white md:bg-transparent w-full  z-20 hidden md:flex">
                  <button className="cursor-pointer relative h-[32px] text-[14px] font-bold w-full border border-[#B900B3] text-[#B900B3] hover:bg-purple-100 flex items-center justify-center gap-2 py-[6px] rounded-[5px]">
                    <Image
                      src="/assets/svg/icon_kininaru01.svg" 
                      alt="店内写真"
                      width={20}
                      height={20}
                      className="rounded-t-xl w-[20px] h-[20px] object-cover absolute left-[15px]"
                    />
                    キニナル
                  </button>
                  <button className="cursor-pointer relative  h-[32px] text-[14px] font-bold w-full border-1 border-[#B900B3] text-[#9E9E9E] md:text-[#B900B3] hover:bg-purple-100 flex items-center justify-center gap-2 py-[6px] rounded-[5px]">
                    <Image
                      src="/assets/svg/icon_place.svg"
                      alt="店内写真"
                      width={14}
                      height={14}
                      className="rounded-t-xl w-[20px] h-[20px] object-cover absolute left-[15px]"
                    />
                    行った
                  </button>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="cursor-pointer relative h-[32px] text-[14px] font-bold w-full bg-gradient-to-r from-[#D6AF4F] to-[#855B15] text-[#ffffff] flex items-center justify-center gap-2 py-[6px]  rounded-[5px] "
                  >
                    <Image
                      src="/assets/svg/icon_keep02.svg"
                      alt="店内写真"
                      width={14}
                      height={14}
                      className="rounded-t-xl w-[20px] h-[20px] object-cover absolute left-[15px]"
                    />
                    ボトルキープを記録
                  </button>
                </div>
                <div className="hidden md:flex gap-[8px] mt-[40px]">
                  <Link
                    href="/"
                    variant="outline"
                    className="flex-1 border border-[#D5D5D5] rounded-[5px] flex items-center justify-center gap-[8px] text-[13px] font-medium"
                  >
                    <Image
                      src="/assets/svg/icon_x.svg"
                      alt="x"
                      width={14}
                      height={14}
                      className="w-[14px] h-[14px] object-cover"
                    />
                    ポスト
                  </Link>
                  <Link
                    href="/"
                    variant="outline"
                    className="flex-1 flex items-center justify-center gap-2 border border-[#D5D5D5] rounded-[5px] text-[13px] font-medium"
                  >
                    <Image
                      src="/assets/svg/icon_fb02.svg"
                      alt="facebook"
                      width={14}
                      height={14}
                      className="w-[14px] h-[14px] object-cover"
                    />
                    シェア
                  </Link>
                  <Link
                    href="/"
                    variant="outline"
                    className="flex-1 flex items-center justify-center gap-2 border border-[#D5D5D5] rounded-[5px] text-[#1E1C1C] font-medium text-[13px] py-[9px] px-[12px]"
                  >
                    <Image
                      src="/assets/svg/icon_line02.svg"
                      alt="line"
                      width={14}
                      height={14}
                      className="w-[14px] h-[14px] object-cover"
                    />
                    送る
                  </Link>
                </div>

                <div className="mt-0 md:mt-[32px] px-[16px] pt-[16px] pb-[41px] bg-gray-100 rounded-xl">
                  <p className="font-bold text-[#B900B3] mb-[10px] text-[15px]">
                    お店の特徴
                  </p>
                  <p className="text-[#1E1C1C] text-[14px] font-medium">
                    オシャレな落ち着いた広々とした店内、赤を基調とした居心地のよいソファー席・カウンター席をご用意しております。
                  </p>
                </div>
              </div>

              <div>
                <Image
                  src={mainImage}
                  alt="Main display"
                  width={446}
                  height={295}
                  className="rounded-t-xl w-full h-[240px] md:h-[295px] object-cover"
                />
                <div className="overflow-x-hidden">
                  <div className="inline-flex w-full gap-[4px] overflow-x-auto scrollbar scrollbar-thin bg-[#F4F4F4] px-[10px] md:px-[10px] pt-[10px] pb-[16px] justify-start md:justify-start">
                    {images.map((imgSrc, i) => (
                      <button
                        key={i}
                        onClick={() => setMainImage(imgSrc)}
                        className="focus:outline-none w-[64px] flex"
                      >
                        <Image
                          src={imgSrc}
                          alt={`Thumbnail ${i + 1}`}
                          width={64}
                          height={48}
                          className="rounded-lg object-cover flex-shrink-0 w-[64px] h-[48px] border-2 border-transparent  cursor-pointer"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <MamaCast />
            </div>
            <div>
              <StoreInfo />
            </div>
            <div>
              <span className="block w-[32px] h-[2px] bg-[#B900B3] mb-[16px]"></span>
              <p className="font-[700] text-[20px]">クーポン</p>
            </div>
            <div className="mt-[32px] flex flex-col gap-[16px] md:gap-[24px]">
              {coupons.map((coupon) => (
                <CouponCard key={coupon.id} coupon={coupon} />
              ))}
            </div>
            <div className="flex md:hidden gap-[8px] md:gap-3 mt-[48px]">
              <Link
                href="/"
                variant="outline"
                className="flex-1 border border-[#D5D5D5] rounded-[5px] flex items-center justify-center gap-[8px]"
              >
                <Image
                  src="/assets/svg/icon_x.svg"
                  alt="x"
                  width={14}
                  height={14}
                  className="w-[14px] h-[14px] object-cover"
                />
                ポスト
              </Link>
              <Link
                href="/"
                variant="outline"
                className="flex-1 flex items-center justify-center gap-2 border border-[#D5D5D5] rounded-[5px]"
              >
                <Image
                  src="/assets/svg/icon_fb02.svg"
                  alt="facebook"
                  width={14}
                  height={14}
                  className="w-[14px] h-[14px] object-cover"
                />
                シェア
              </Link>
              <Link
                href="/"
                variant="outline"
                className="flex-1 flex items-center justify-center gap-2 border border-[#D5D5D5] rounded-[5px] text-[#1E1C1C] font-medium text-[13px] py-[9px] px-[12px]"
              >
                <Image
                  src="/assets/svg/icon_line02.svg"
                  alt="line"
                  width={14}
                  height={14}
                  className="w-[14px] h-[14px] object-cover"
                />
                送る
              </Link>
            </div>
          </div>
          <div className="hidden md:block container mx-auto pt-[100px]">
            <StorePrefecture />
          </div>
        </div>
        <div className="lg:col-span-1 space-y-[56px] md:space-y-[75px]">
          <div className="bg-transparent md:bg-white pt-[56px] md:py-[32px] px-[16px] md:px-[24px] rounded md:shadow relative mt-[35px]">
            <div className="mt-0 md:mt-[-50px] mb-[32px] md:mb-[28px] flex justify-between md:justify-center">
              <div>
                <h2 className="text-[32px] md:text-[56px] font-normal text-left md:text-center text-[#B900B3]  mb-[0px] leading-[50px]">
                  Blog
                </h2>
                <h3 className="text-[15px] md:text-lg text-center text-[#B900B3] mb-6 flex font-bold justify-start md:justify-center items-center gap-2">
                  <span className="block w-[32px] h-[2px] bg-[#B900B3] md:hidden"></span>
                  ママブログ
                </h3>
              </div>
              <Image
                src="/assets/svg/icon_illust.svg"
                alt="arrow"
                width={82}
                height={80}
                className="w-[82px] h-[80px]  block md:hidden"
              />
            </div>
            <Blogs />
          </div>

          <div className="bg-white pb-[32px] md:py-[32px] px-[16px] md:px-[24px] rounded shadow relative mt-[35px] pt-[80px] md:pt-[35px]">
            <div className="mt-[-50px] mb-[28px] ">
              <h2 className="text-[32px] lg:text-[56px]  font-normal text-left md:text-center text-[#B900B3]  mb-[0px] leading-[50px]">
                Recruit
              </h2>
              <h3 className="text-[16px] md:text-lg text-center text-[#B900B3] mb-6 flex justify-start md:justify-center items-center gap-2 font-bold">
                <span className="block w-[32px] h-[2px] bg-[#B900B3]  md:hidden "></span>
                求人情報
              </h3>
            </div>
            <div className="flex gap-[18px]">
              <Image
                src="/assets/svg/icon_illust.svg"
                alt="arrow"
                width={82}
                height={80}
                className="w-[82px] h-[80px] md:mx-auto"
              />
              <div className="bg-[#DC70D9] py-[30px] flex justify-center align-center w-[255px] h-[80px] rounded-[7px] text-[#FFFFFF] md:hidden relative">
                <p>現在、ママ求人中！</p>
                <div className="absolute  top-[20px]   -left-[9px] transform  text-white text-2xl">
                  <Image
                    src="/assets/svg/icon_rightangle_fill_arrow.svg"
                    alt="IconArrow"
                    width={10}
                    height={10}
                  />
                </div>
              </div>
            </div>
            <Link
              href="/"
              className="text-[#B900B3] font-medium text-[14px] mt-[32px] gap-[8px] flex items-center justify-center border-1  md:border-0 md:border-[#B900B3] rounded-[7px] py-[9px] h-[39px] relative"
            >
              求人情報をみる
              <Image
                src="/assets/svg/icon_right_arrow.svg"
                alt="arrow"
                width={24}
                height={24}
                className="w-[24px] h-[24px] inline-block absolute right-[15px] md:relative md:right-auto"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-[16px]  pt-[64px] md:pt-[56px]">
        <Prefecture />
      </div>
      <div className="fixed md:hidden bg-white w-full bottom-0 py-[10px]">
        <div className="flex justify-between items-center px-[16px] gap-[15px]">
          <Link
            href="/"
            className="flex flex-col justify-center items-center gap-[5px]"
          >
            <Image
              src="/assets/svg/icon_kininaru04.svg"
              alt="店内写真"
              width={14}
              height={14}
              className="rounded-t-xl w-[20px] h-[20px] object-cover"
            />
            <p className="text-[#9E9E9E] text-[12px] font-bold">キニナル</p>
          </Link>
          <Link
            href="/"
            className="flex flex-col justify-center items-center gap-[5px]"
          >
            <Image
              src="/assets/svg/icon_been_sp.svg"
              alt="店内写真"
              width={14}
              height={14}
              className="rounded-t-xl w-[20px] h-[20px] object-cover "
            />
            <span className="text-[#9E9E9E] text-[12px] font-bold">行った</span>
          </Link>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex flex-col justify-center items-center gap-[5px]"
          >
            <Image
              src="/assets/svg/icon_keep_sp.svg"
              alt="店内写真"
              width={14}
              height={14}
              className="rounded-t-xl w-[20px] h-[20px] object-cover"
            />
            <span className="text-[#9E9E9E] text-[12px] font-bold">
              ボトルキープ
            </span>
          </button>
        </div>
      </div>
      {isModalOpen && (
        <BottleEditModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          bottleData={
            selectedBottle !== null
              ? {
                  purchaseDate: '2025/07/20',
                  bottleType: bottleData[selectedBottle].bottleType,
                  memo:
                    bottleData[selectedBottle].memo ||
                    'ここにはメモが入力されています。',
                }
              : undefined
          }
          onUpdate={handleUpdateBottle}
          onDelete={handleDeleteBottle}
        />
      )}
    </main>
  );
}
