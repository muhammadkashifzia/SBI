// components/SidebarFilter.jsx
import React from 'react';
import Image from 'next/image';
export default function SidebarFilter() {
  return (
    <aside className="w-72 p-4 border border-[#DCDCDC] rounded-[5px]">
      <div className="flex gap-[10px] items-center mb-[20px]">
        <Image
          src="/assets/svg/filter-icon.svg"
          alt="checkedIcon"
          width={15}
          height={17}
        />{' '}
        <h2 className="font-medium text-[24px] text-[#2C3237]">絞り込み</h2>
      </div>
      <div className="mb-6">
        <h3 className="font-medium text-[20px] mb-[22.5px]">カテゴリー</h3>
        <ul className="space-y-1">
          {['グルメ', 'カフェ', '和食', '居酒屋', 'スイーツ'].map((item) => (
            <li key={item}>
              <label className="inline-flex items-center">
                <input type="checkbox" className="mr-2 w-[20px] h-[20px] rounded-[4px] border border-[#808080]" /> {item}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">場所 / エリア</h3>
        <select className="w-full border rounded p-1 mb-2">
          <option>都道府県を選択してください</option>
        </select>
        <div className="flex gap-2 mb-2">
          {['東京', '神奈川', '大阪', '福岡', '北海道'].map((place) => (
            <button
              key={place}
              className="px-2 py-1 border rounded text-sm hover:bg-gray-100"
            >
              {place}
            </button>
          ))}
        </div>
        <ul className="space-y-1">
          {['エリア1', 'エリア2', 'エリア3', 'エリア4'].map((area) => (
            <li key={area}>
              <label className="inline-flex items-center">
                <input type="checkbox" className="mr-2" /> {area}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-2">星レビュー</h3>
        <div className="flex items-center gap-2">
          <input
            type="number"
            min="0"
            max="5"
            className="border rounded px-2 py-1 w-16"
            placeholder="0"
          />
          <span>〜</span>
          <input
            type="number"
            min="0"
            max="5"
            className="border rounded px-2 py-1 w-16"
            placeholder="5"
          />
        </div>
      </div>
    </aside>
  );
}
