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
      {/* Header */}
      <div className="flex gap-[10px] items-center mb-[20px]">
        <Image
          src="/assets/svg/filter-icon.svg"
          alt="filter icon"
          width={15}
          height={17}
        />
        <h2 className="font-medium text-[14px] text-[#2C3237]">絞り込み</h2>
      </div>

      {/* Category Section */}
      <div className="mb-6 border border-[#E6E6E6] rounded-[5px] bg-white p-[15px]">
        <h3 className="font-medium text-[14px] mb-[15px]">カテゴリー</h3>
        <ul className="space-y-[12px] text-[13px]">
          {categories.map((category) => (
            <li key={category.name}>
              <label className="inline-flex items-center gap-2 font-medium">
                <input type="checkbox" className="w-[16px] h-[16px]" />
                {category.name} ({category.count})
              </label>
              {category.subcategories.length > 0 && (
                <ul className="mt-[10px] space-y-[8px]">
                  {category.subcategories.map((sub) => (
                    <li key={sub.name}>
                      <label className="inline-flex items-center gap-2">
                        <input type="checkbox" className="w-[16px] h-[16px]" />
                        <span className="inline-block border border-[#CBCBCB] text-[#006BA6] bg-white text-[13px] px-[12px] py-[5px] rounded-[3px]">
                          {sub.name} ({sub.count})
                        </span>
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
        <h3 className="font-medium text-[14px] mb-[15px]">場所 / エリア</h3>

        <select
          className="w-full border border-[#DCDCDC] rounded-[5px] text-[13px] p-[6px] mb-[15px] bg-white"
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

        {/* Selected prefectures display (click to remove) */}
        {selectedPrefectures.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-[15px]">
            {selectedPrefectures.map((pref) => (
              <div
                key={pref}
                onClick={() => removePrefecture(pref)}
                className="cursor-pointer flex items-center px-2 py-1 border border-[#DCDCDC] rounded-[3px] text-[12px] bg-white hover:bg-gray-100 text-[#006BA6]"
              >
                {pref}
              </div>
            ))}
          </div>
        )}

        <h4 className="text-[13px] font-medium mb-[10px]">
          エリアを選択してください。
        </h4>
        <ul className="space-y-[10px]">
          {['エリア1', 'エリア2', 'エリア3', 'エリア4'].map((area) => (
            <li key={area}>
              <label className="inline-flex items-center gap-[10px] text-[13px]">
                <input type="checkbox" className="w-[16px] h-[16px]" />
                {area} (5)
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Star Review */}
      <div className="border border-[#E6E6E6] rounded-[5px] bg-white p-[15px]">
        <h3 className="font-medium text-[14px] mb-[15px]">星レビュー</h3>
        <div className="flex items-center gap-[10px]">
         <div className='relative  w-[145px]'>
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
