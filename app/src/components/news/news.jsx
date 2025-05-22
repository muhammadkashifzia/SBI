'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const newsItems = [
  {
    id: 1,
    date: '2025.01.30',
    text: 'テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります',
  },
  {
    id: 2,
    date: '2025.01.30',
    text: 'テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります',
  },
  {
    id: 3,
    date: '2025.01.30',
    text: 'テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります',
  },
  {
    id: 4,
    date: '2025.01.30',
    text: 'テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります',
  },
  {
    id: 5,
    date: '2025.01.30',
    text: 'テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります',
  },
];

const NewsSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading
        ? Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="pb-[24px] mb-[16px] border-b border-gray-200 animate-pulse"
            >
              <div className="h-[12px] w-[80px] bg-gray-300 rounded mb-[8px]"></div>
              <div className="h-[14px] w-full bg-gray-300 rounded"></div>
            </div>
          ))
        : newsItems.map((item, index) => (
            <div
              key={index}
              className="pb-[24px] mb-[16px] border-b border-gray-200"
            >
              <span className="block text-[12px] font-normal text-[#C7C7C7] mb-[4px] fugaz-one">
                {item.date}
              </span>
              <p className="text-[12px] font-medium text-[#1E1C1C] line-clamp-1">
                <Link href={`/news/${item.id}`}>{item.text}</Link>
              </p>
            </div>
          ))}
    </div>
  );
};

export default NewsSection;
