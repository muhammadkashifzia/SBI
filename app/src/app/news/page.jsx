'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function NewsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; // Number of news items per page

  // Sample news data
  const newsItems = [
    {
      id: 1,
      date: '2025.01.30',
      category: 'プレスリリース',
      title:
        'タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります',
      link: '/news/1',
    },
    {
      id: 2,
      date: '2025.01.30',
      category: 'プレスリリース',
      title:
        'タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります',
      link: '/news/2',
    },
    {
      id: 3,
      date: '2025.01.30',
      category: 'プレスリリース',
      title:
        'タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります',
      link: '/news/3',
    },
    {
      id: 4,
      date: '2025.01.30',
      category: 'プレスリリース',
      title:
        'タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります',
      link: '/news/4',
    },
    {
      id: 5,
      date: '2025.01.30',
      category: 'プレスリリース',
      title:
        'タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります',
      link: '/news/5',
    },
    {
      id: 6,
      date: '2025.01.30',
      category: 'プレスリリース',
      title:
        'タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります',
      link: '/news/6',
    },
    {
      id: 7,
      date: '2025.01.30',
      category: 'プレスリリース',
      title:
        'タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります',
      link: '/news/7',
    },
    {
      id: 8,
      date: '2025.01.30',
      category: 'プレスリリース',
      title:
        'タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります',
      link: '/news/8',
    },
    {
      id: 9,
      date: '2025.01.30',
      category: 'プレスリリース',
      title:
        'タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります',
      link: '/news/9',
    },
    {
      id: 10,
      date: '2025.01.30',
      category: 'プレスリリース',
      title:
        'タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります',
      link: '/news/10',
    },
  ];

  // Calculate total pages
  const totalPages = Math.ceil(newsItems.length / itemsPerPage);

  // Get current page items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = newsItems.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Generate page numbers for pagination
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Always show first, last, and nearby pages
  const visiblePages = () => {
    const pages = [];
    const maxVisible = 5; // Maximum visible page numbers

    // Always show first page
    if (currentPage > 2) {
      pages.push(1);
      if (currentPage > 3) pages.push('...');
    }

    // Show current page and nearby pages
    let start = Math.max(1, currentPage - 1);
    let end = Math.min(totalPages, currentPage + 1);

    for (let i = start; i <= end; i++) {
      if (!pages.includes(i)) pages.push(i);
    }

    // Always show last page
    if (currentPage < totalPages - 1) {
      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="mx-auto bg-[#f9f7f2]">
      {/* Header */}
      <div className="bg-[#B900B3] py-6 relative">
        <div className="container mx-auto px-[16px] flex justify-between items-center relative">
          <div>
            <h1 className="text-5xl font-bold text-white Modak">News</h1>
            <p className="text-white mt-0 text-[14px] font-[400]">お知らせ</p>
          </div>
          <div className="absolute right-6">
            <Image
              src="/assets/svg/icon_illust.svg"
              alt="Bartender illustration"
              width={106}
              height={103}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* News List */}
      <div className="pt-[40px] pb-[80px] container mx-auto px-[16px]">
        {currentItems.map((item) => (
          <div key={item.id}>
            <div className="py-[32px]">
              <div className="flex items-center mb-[8px]">
                <span className="text-[#B900B3] font-[400] text-[12px] mr-2 fugaz-one">
                  {item.date}
                </span>
                <span className="bg-[#B900B3] text-white font-[700] text-[12px] px-[5px] py-[4px] rounded">
                  {item.category}
                </span>
              </div>
              <Link
                href={item.link}
                className="text-gray-800 hover:text-[#B900B3]"
              >
                <h2 className="text-[14px] text-[#1E1C1C] font-[500] letter-spacing-2">
                  {item.title}
                </h2>
              </Link>
            </div>
            <hr className="border-[#C8C8C8] border-[0.8px]" />
          </div>
        ))}

        {/* Pagination */}
        <div className="flex justify-center items-center mt-8 space-x-2">
          <button
            onClick={() => paginate(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={`${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-[#B900B3] hover:text-[#B900B3] cursor-pointer'}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-move-left-icon lucide-move-left"
            >
              <path d="M6 8L2 12L6 16" />
              <path d="M2 12H22" />
            </svg>
          </button>

          {visiblePages().map((number, index) =>
            number === '...' ? (
              <span key={`ellipsis-${index}`} className="text-[#B900B3]">
                ...
              </span>
            ) : (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer   ${
                  currentPage === number
                    ? 'bg-[#B900B3] text-white'
                    : 'text-[#B900B3] hover:bg-purple-100'
                }`}
              >
                {number}
              </button>
            ),
          )}

          <button
            onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className={`${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-[#B900B3] hover:text-[#B900B3] cursor-pointer'}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-move-right-icon lucide-move-right"
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M2 12H22" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
