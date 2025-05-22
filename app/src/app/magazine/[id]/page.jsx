

import Recommend from '@/components/home/recommend';
import Prefecture from '@/components/prefecture/prefecture';
import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/blogs/relatedBlogCard';
export default function MagazineDetail() {
  const relatedBlogs = [
    {
      id: 1,
      imageUrl: '/assets/images/demo.png',
      title: 'タイトルが入りますタイトルが入りますタイトルが入ります',
      hashtag: 'ハッシュタグ',
      date: '2025/07/20',
    },
    {
      id: 2,
      imageUrl: '/assets/images/magazine-detail.png',
      title: '別のタイトルが入ります別のタイトルが入ります',
      hashtag: '別のタグ',
      date: '2025/07/18',
    },
    {
      id: 3,
      imageUrl: '/assets/images/magazine.png',
      title: '三つ目の記事タイトルが入ります',
      hashtag: '記事タグ',
      date: '2025/07/15',
    },
  ];
  return (
    <main>
      <div className="container mx-auto pt-[0px] grid grid-cols-1 lg:grid-cols-4 gap-[80px] md:gap-[40px] md:px-[16px]">
        {/* Left Section (Recommend, NewOpen, Magazine, Goods) */}
        <div className="lg:col-span-3 space-y-10">
          <Image
            src="/assets/images/magazine.png"
            alt="Magazine"
            width={1000}
            height={500}
            className="w-full h-[221px] md:h-[600px]  mb-[32px] object-cover object-top"
          />
          <div className="px-[16px]">
            <div className="flex gap-[8px] mb-[24px] flex-wrap font-medium text-[12px] text-[#1E1C1C]">
              <span> #ハッシュタグ</span>
              <span> #ハッシュタグ</span>
            </div>
            <h2 className="text-[#1E1C1C] font-bold text-[18px] leading-[24px] mb-[24px] md:mb-[5px]">
              タイトルが入りますタイトルが入りますタイトルが入りますタイトルが入ります
            </h2>
            <div className="flex flex-col-reverse gap-[16px]">
              <p className="text-[#C7C7C7] font-normal text-[12px]  fugaz-one">
                2025/07/20
              </p>
              <div className="flex items-center gap-[5px] md:gap-[12px] flex-wrap">
                <span className="text-[#FFFFFF] bg-[#B900B3] p-[8px] text-[12px] font-medium">
                  カテゴリ名が入ります
                </span>
              </div>
            </div>

            <div className="magazine-detail">
              <div className="w-[32px] h-[4px] bg-[#B900B3]"></div>
              <h2 className="mt-[24px]">見出しが入ります</h2>
              <p className="font-[400] text-[15px] text-[#1E1C1C]">
                本文が入ります本文が入ります本文が入ります本文が入ります本文が入ります本文が入ります本文が入ります本文が入ります本文が入ります本文が入ります本文が入ります本文が入ります本文が入ります本文が入ります本文が入ります本文が入ります本文が入ります本文が入ります本文が入ります本文が入ります本文が入ります
              </p>
              <Image
                src="/assets/images/magazine.png"
                alt="Magazine"
                width={1000}
                height={500}
              />
            </div>
            <div className="flex justify-between items-center gap-[120px] md:gap-[20px] flex-col  md:flex-row px-0 md:px-[0px]">
              <div className="flex gap-[16px] md:gap-[8px] w-[-webkit-fill-available] flex-col md:flex-row ">
                <button className="border border-[#B900B3] text-[#B900B3] py-[20px] px-4 rounded-[10px] w-full flex items-center justify-center max-w-full md:max-w-[240px] h-[56px] relative">
                  もっと見る
                  <Image
                    src="/assets/svg/icon_left_arrow.svg"
                    alt="leftArrow"
                    width={8}
                    height={5}
                    className="absolute right-[15px]"
                  />
                </button>
                <button className="border border-[#B900B3] bg-[#B900B3] text-[#ffffff] py-[20px] px-4 rounded-[10px] w-full flex items-center justify-center max-w-full md:max-w-[240px] h-[56px] relative">
                  もっと見る
                  <Image
                    src="/assets/svg/icon_left_arrow.svg"
                    alt="leftArrow"
                    width={8}
                    height={5}
                    className="absolute right-[15px]"
                  />
                </button>
              </div>
              <div className="flex gap-3  w-[-webkit-fill-available] justify-center md:justify-end">
                <Link
                  href="/"
                  variant="outline"
                  className="flex-1 border border-[#D5D5D5] rounded-[5px] flex items-center justify-center gap-[8px] bg-[#1E1C1C] text-[#ffffff] max-w-[115px] h-[32px]"
                >
                  <Image
                    src="/assets/svg/icon_x_white.svg"
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
                  className="flex-1 flex items-center justify-center gap-2 border border-[#D5D5D5] rounded-[5px] max-w-[115px] h-[32px] bg-[#1977F2] text-[#ffffff] "
                >
                  <Image
                    src="/assets/svg/icon_fb_white.svg"
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
                  className="bg-[#05B63B] flex-1 flex items-center justify-center gap-2 border border-[#D5D5D5] rounded-[5px] text-[#ffffff] font-medium text-[13px] py-[9px] px-[12px] max-w-[115px] h-[32px]"
                >
                  <Image
                    src="/assets/svg/icon_line_white.svg"
                    alt="line"
                    width={14}
                    height={14}
                    className="w-[14px] h-[14px] object-cover"
                  />
                  送る
                </Link>
              </div>
            </div>
          </div>
          <div className="px-[16px]">
            <hr className="text-[#E9E9E9]" />
          </div>
        </div>

        {/* Right Sidebar (News, Ranking, Special) */}
        <div className="lg:col-span-1 space-y-[75px]">
          <div className="md:bg-white pt-[0px] pb-0 md:py-[32px] px-0 md:px-[16px] rounded shadow-none md:shadow relative">
            <div>
              <h2 className="text-[32px] font-normal text-center text-[#1E1C1C]  mb-[0px] leading-[24px]">
                SEE ALSO
              </h2>
              <h3 className="text-[12px] font-normal text-center text-[#1E1C1C] mb-6">
                関連記事
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-x-0 md:gap-x-[16px] gap-y-0 md:gap-y-[30px] w-full">
              {relatedBlogs.map((blog) => (
                <Card
                  key={blog.id}
                  imageUrl={blog.imageUrl}
                  title={blog.title}
                  hashtag={blog.hashtag}
                  date={blog.date}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Prefecture Section */}
      <div className="container px-[16px] md-[] md:mx-auto pt-[80px] pb-[32px]">
        <Recommend />
      </div>
      <div className="container mx-auto px-4 py-10">
        <Prefecture />
      </div>
    </main>
  );
}
