import React from 'react';
import Image from 'next/image';
const blogsItems = [
  {
    thumbnail: '/assets/images/demo.png',
    title: 'GW中の営業時間について',
    date: '2025.01.30',
  },
  {
    thumbnail: '/assets/images/demo.png',
    title: 'GW中の営業時間について',
    date: '2025.01.30',
  },
  {
    thumbnail: '/assets/images/demo.png',
    title: 'GW中の営業時間について',
    date: '2025.01.30',
  },
  {
    thumbnail: '/assets/images/demo.png',
    title: 'GW中の営業時間について',
    date: '2025.01.30',
  },
  {
    thumbnail: '/assets/images/demo.png',
    title: 'GW中の営業時間について',
    date: '2025.01.30',
  },
];

const BlogsSection = () => {
  return (
    <div>
      {blogsItems.map((item, index) => (
        <div
          key={index}
          className="pb-[21px] md:pb-[16px] mb-[16px] border-b border-gray-200 flex items-center gap-[10px]"
        >
          <div>
            <Image
              src={item.thumbnail}
              alt={item.title}
              width={48}
              height={48}
              className='rounded-full object-cover w-[48px] h-[48px]'
            />
          </div>
          <div>
            <h3 className="text-[14px] font-bold text-[#B900B3]  line-clamp-1 mb-[4px]">
              {item.title}
            </h3>
            <span className="block text-[12px] font-normal text-[#98958F]">
              {item.date}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogsSection;
