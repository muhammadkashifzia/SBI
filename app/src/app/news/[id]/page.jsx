'use client';

import { use } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function NewsDetailPage(props) {
  const params = use(props.params); // unwrap the params Promise
  const { id } = params;
  // const [currentPage, setCurrentPage] = useState(1);

  // In a real app, you would fetch the news item based on the ID
  const newsItem = {
    id: Number.parseInt(id),
    date: '2025/07/20',
    title: 'タイトルが入りますタイトルが入りますタイトルが入ります',
    imageUrl: '/assets/images/magazine.png',
    content: `
      本文が入ります本文が入ります本文が入ります本文が入ります本文が入ります本文が入ります本文が入ります本文が入ります本文が入ります本文が入ります本文が入ります本文が入ります本文が入ります本文が入ります本文が入ります本文が入ります本文が入ります本文が入ります本文が入ります本文が入ります
    `,
    relatedLink: {
      text: 'テキストが入ります (リンク)',
      url: '/related-article',
    },
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = newsItem.title;

    switch (platform) {
      case 'twitter':
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
        );
        break;
      case 'facebook':
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        );
        break;
      case 'line':
        window.open(
          `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`,
        );
        break;
      default:
        break;
    }
  };

  return (
    <div className="max-w-7xl mx-auto bg-white mt-[40px] mb-[80px]">
      <div className="px-[16px] py-6">
        {/* Date */}
        <p className="text-[#C7C7C7] mb-[24px] font-[400] text-[12px] fugaz-one">
          {newsItem.date}
        </p>

        {/* Title */}
        <h1 className="text-[18px] font-[700] mb-6">{newsItem.title}</h1>

        {/* Social Share Buttons */}
        <div className="flex gap-[8px] mb-6">
          <button
            onClick={() => handleShare('twitter')}
            className="flex-1 bg-black text-white py-[10px] rounded flex items-center justify-center text-[11px] font-[500] cursor-pointer"
          >
            <Image
              src="/assets/svg/x.svg"
              alt="twitter"
              width={20}
              height={20}
              className="mr-1"
            />
            ポスト
          </button>
          <button
            onClick={() => handleShare('facebook')}
            className="flex-1 bg-[#1977F2] text-white py-[10px] rounded flex items-center justify-center text-[11px] font-[500] cursor-pointer"
          >
            <Image
              src="/assets/svg/facebook.svg"
              alt="twitter"
              width={20}
              height={20}
              className="mr-1"
            />
            シェア
          </button>
          <button
            onClick={() => handleShare('line')}
            className="flex-1 bg-[#05B63B] text-white py-[10px] rounded flex items-center justify-center text-[11px] font-[500] cursor-pointer"
          >
            <Image
              src="/assets/svg/line.svg"
              alt="twitter"
              width={20}
              height={20}
              className="mr-1"
            />
            送る
          </button>
        </div>

        {/* Main Image */}
        <div className="mb-6">
          <div className="bg-gray-100 w-full h-auto md:h-80 relative rounded-[5px]">
            <Image
              src={newsItem.imageUrl || '/placeholder.svg'}
              alt={newsItem.title}
              height={400}
              width={800}
              className="object-cover w-[100%] h-auto md:h-[320px] object-top"
            />
          </div>
        </div>

        {/* Purple Accent Line */}
        <div className="h-1 w-[32px] bg-[#B900B3] mb-6"></div>

        {/* Content */}
        <div className="mb-[32px]">
          <p className="text-[16px] font-[700] text-[#1E1C1C] mb-4">
            見出しが入ります
          </p>
          <p className="text-[15px] font-[400] text-[#1E1C1C] mb-6 leading-[28px]">
            {newsItem.content}
          </p>
        </div>

        {/* Related Link Button */}
        <div className="mb-0">
          <Link
            href={newsItem.relatedLink.url}
            className="block w-full bg-[#B900B3] text-[14px]  text-white py-4 px-6 rounded-[10px] text-center relative"
          >
            <span>{newsItem.relatedLink.text}</span>
            <ChevronRight className="absolute right-4 top-1/2 transform -translate-y-1/2" />
          </Link>
        </div>

        {/* Pagination */}
        {/* <div className="flex justify-center items-center mt-12 space-x-2 border-t border-gray-100 pt-8">
          <Link href="#" className="text-gray-400 hover:text-purple-600">
            <ChevronLeft size={20} />
          </Link>
          <Link
            href="#"
            className={`w-10 h-10 flex items-center justify-center rounded-full text-[16px] font-[500] ${
              currentPage === 1
                ? 'bg-[#B900B3] text-white'
                : 'text-[#B900B3] hover:bg-purple-100'
            }`}
            onClick={() => setCurrentPage(1)}
          >
            1
          </Link>
          <Link
            href="#"
            className={`w-10 h-10 flex items-center justify-center rounded-full text-[16px] font-[500] ${
              currentPage === 2
                ? 'bg-[#B900B3] text-white'
                : 'text-[#B900B3] hover:bg-purple-100'
            }`}
            onClick={() => setCurrentPage(2)}
          >
            2
          </Link>
          <Link
            href="#"
            className={`w-10 h-10 flex items-center justify-center rounded-full text-[16px] font-[500] ${
              currentPage === 3
                ? 'bg-[#B900B3] text-white'
                : 'text-[#B900B3] hover:bg-purple-100'
            }`}
            onClick={() => setCurrentPage(3)}
          >
            3
          </Link>
          <span className="text-[#B900B3]">...</span>
          <Link
            href="#"
            className={`w-10 h-10 flex items-center justify-center rounded-full text-[16px] font-[500] ${
              currentPage === 13
                ? 'bg-[#B900B3] text-white'
                : 'text-[#B900B3] hover:bg-purple-100'
            }`}
            onClick={() => setCurrentPage(13)}
          >
            13
          </Link>
          <Link href="#" className="text-[#B900B3] hover:text-[#B900B3]">
            <ChevronRight size={20} />
          </Link>
        </div> */}

        {/* back button */}
        <div>
          <Link
            href="/news"
            className=" flex items-center justify-center  text-[13px] font-[500] text-[#1E1C1C] py-6  rounded-[10px] text-center "
          >
            <ChevronLeft className="" />
            <span> お知らせ一覧</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
