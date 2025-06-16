'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const categories = [
  {
    name: 'グルメ',
    count: 20,
    subcategories: [
      { name: '焼き肉', count: 5 },
      { name: 'カフェ', count: 3 },
      { name: '焼き鳥', count: 6 },
      { name: 'スイーツ', count: 6 },
    ],
  },
  {
    name: 'ファッション',
    count: 20,
    subcategories: [
      { name: 'スニーカー', count: 8 },
      { name: 'ドレス', count: 4 },
      { name: 'バッグ', count: 5 },
      { name: 'アクセサリー', count: 3 },
    ],
  },
  {
    name: 'グッズ',
    count: 20,
    subcategories: [],
  },
  {
    name: 'アミューズメント',
    count: 20,
    subcategories: [],
  },
  {
    name: 'サービス',
    count: 20,
    subcategories: [],
  },
];

const prefectures = ['東京', '神奈川', '大阪', '愛知', '福岡', '北海道'];

export default function SidebarFilter() {
  const [selectedPrefectures, setSelectedPrefectures] = useState([]);

  const handlePrefectureSelect = (e) => {
    const value = e.target.value;
    if (value && !selectedPrefectures.includes(value)) {
      setSelectedPrefectures([...selectedPrefectures, value]);
    }
  };

  const togglePrefecture = (pref) => {
    if (selectedPrefectures.includes(pref)) {
      setSelectedPrefectures(selectedPrefectures.filter((p) => p !== pref));
    } else {
      setSelectedPrefectures([...selectedPrefectures, pref]);
    }
  };

  const removePrefecture = (pref) => {
    setSelectedPrefectures(selectedPrefectures.filter((p) => p !== pref));
  };

  return (
    <aside className="w-[415px] p-[15px] border border-[#DCDCDC] rounded-[5px] bg-[#FAFAFA]">
      <div className="flex gap-[10px] items-center mb-[20px]">
        <Image
          src="/assets/svg/filter-icon.svg"
          alt="filter icon"
          width={15}
          height={17}
        />
        <h2 className="font-medium text-[24px] text-[#2C3237]">絞り込み</h2>
      </div>
      <div className="bg-[#FFFFFF] py-[18px] px-[15px] gap-x-[10px] flex border border-[#E6E6E6] rounded-[5px] mb-[20px]">
        <span className="text-[10px] text-[#006BA6] inline-flex gap-[5px] border border-[#006BA6] rounded-full py-[8.5px] px-[15px]">
          グルメ
          <Image
            src="/assets/svg/close-tag-icon.svg"
            width={8}
            height={8}
            alt="closeIcon"
            className="cursor-pointer"
          />
        </span>
        <span className="text-[10px] text-[#006BA6] inline-flex gap-[5px] border border-[#006BA6] rounded-full py-[8.5px] px-[15px]">
          グルメ
          <Image
            src="/assets/svg/close-tag-icon.svg"
            width={8}
            height={8}
            alt="closeIcon"
            className="cursor-pointer"
          />
        </span>
      </div>
      {/* Category Section */}
      <div className="mb-6 border border-[#E6E6E6] rounded-[5px] bg-white p-[15px]">
        <h3 className="font-medium text-[14px] mb-[15px]">カテゴリー</h3>
        <ul className="space-y-[12px] text-[13px]">
          {categories.map((category) => (
            <li key={category.name}>
              <label className="inline-flex items-center gap-2 font-medium">
                <input type="checkbox" className="w-[20px] h-[20px]" />
               <span className='font-medium text-[18px] text-[#2C3237]'> {category.name}</span> <span className='font-medium text-[18px] text-[#2C3237]'>({category.count})</span>
              </label>
              {category.subcategories.length > 0 && (
                <ul className="mt-[10px] space-y-[8px]">
                  {category.subcategories.map((sub) => (
                    <li key={sub.name}>
                      <label className="inline-flex items-center gap-2">
                        <input type="checkbox" className="w-[20px] h-[20px]" />
                        <div className="flex items-center gap-2">
                          <span className="inline-block border border-[#CBCBCB] text-[#006BA6] bg-white text-[18px] font-medium px-[12px] py-[2px] rounded-[3px]">
                            {sub.name}
                          </span>
                          <span className="text-[#2C3237] text-[18px] font-medium">
                            ({sub.count})
                          </span>
                        </div>
                      </label>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Location / Area Section */}
      <div className="mb-6 border border-[#E6E6E6] rounded-[5px] bg-white p-[15px]">
        <h3 className="font-medium text-[20px] mb-[15px] text-[#2C3237]">場所 / エリア</h3>
        <p className="text-[16px] font-medium text-[#2C3237] mb-[15px]">
          都道府県を選択してください。
        </p>
        <div className="relative mb-[15px]">
          <select
            className="appearance-none w-full border border-[#ECEDF0] rounded-[4px] text-[13px] px-[14.68px] py-[19.1px] bg-white"
            onChange={handlePrefectureSelect}
            value=""
          >
            <option value="">都道府県を選択してください</option>
            {prefectures.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          <div className="cursor-pointer  top-[50%] transform -translate-y-1/2   absolute inset-y-0 right-[5.64px] flex items-center px-2 text-gray-700 bg-white shadow w-[41px] h-[41px] justify-center">
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.4844 1.43896L5.96794 5.9554L1.45151 1.43896"
                stroke="#2C3237"
                strokeWidth="1.80657"
              />
            </svg>
          </div>
        </div>

        {/* Selected prefectures display (click to remove) */}
        {selectedPrefectures.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-[20px]">
            {selectedPrefectures.map((pref) => (
              <div
                key={pref}
                onClick={() => removePrefecture(pref)}
                className="cursor-pointer flex items-center px-[20px] py-[10px] border border-[#DCDCDC] rounded-[3px]  bg-white hover:bg-gray-100 text-[#006BA6] font-medium text-[18px]"
              >
                {pref}
              </div>
            ))}
          </div>
        )}

        <h4 className="text-[16px] font-medium mb-[15px] text-[#2C3237]">
          エリアを選択してください。
        </h4>
        <ul className="space-y-[10px]">
          {['エリア1', 'エリア2', 'エリア3', 'エリア4'].map((area) => (
            <li key={area}>
              <label className="inline-flex items-center gap-[10px] text-[13px]">
                <input type="checkbox" className="w-[20px] h-[20px]" />
                <span className="text-[#006BA6] border border-[#CBCBCB] rounded-[3px] text-[18px] font-medium px-[20px] py-[2px]">
                  {area}
                </span>
                <span className="font-medium text-[18px] text-[#2C3237]">(5)</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Star Review */}
      <div className="border border-[#E6E6E6] rounded-[5px] bg-white p-[15px]">
        <h3 className="font-medium text-[14px] mb-[20px]">星レビュー</h3>
        <div className="flex items-center gap-[10px]">
          <div className="relative  w-[145px]">
            <select className="appearance-none border border-[#DCDCDC] rounded-[5px] px-[8px] py-[5px] text-[13px] bg-white h-[55px] w-full">
              <option value="">下限☆数</option>
              {[0, 1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
            <div className="cursor-pointer  top-[50%] transform -translate-y-1/2   absolute inset-y-0 right-[5.64px] flex items-center px-2 text-gray-700 bg-white shadow w-[41px] h-[41px] justify-center">
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.4844 1.43896L5.96794 5.9554L1.45151 1.43896"
                  stroke="#2C3237"
                  strokeWidth="1.80657"
                />
              </svg>
            </div>
          </div>
          <span className="text-[13px]">〜</span>
          <div className="relative w-[145px]">
            <select className="appearance-none border border-[#DCDCDC] rounded-[5px] px-[8px] py-[5px] text-[13px] bg-white h-[55px] w-full">
              <option value="">上限☆数</option>
              {[0, 1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
            <div className="cursor-pointer  top-[50%] transform -translate-y-1/2 z-20 absolute inset-y-0 right-[5.64px] flex items-center px-2 text-gray-700 bg-white shadow w-[41px] h-[41px] justify-center">
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.4844 1.43896L5.96794 5.9554L1.45151 1.43896"
                  stroke="#2C3237"
                  strokeWidth="1.80657"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
