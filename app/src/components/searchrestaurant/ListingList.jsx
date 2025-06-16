'use client';
import React, { useState } from 'react';
import ListingItem from '@/components/searchrestaurant/ListingItemCard';

// Tabs
const tabs = [
  { id: 'searchList', label: '検索リスト' },
  { id: 'SortByPrice', label: '価格順' },
  { id: 'StarReviewOrder', label: '星レビュー順' },
];

// Mock restaurant data
const mockItems = [
  {
    id: '1',
    title: 'インペリアブッフェ - 帝国ホテルレストラン - ',
    price: 5000,
    rating: 5,
    category: '和食 / グルメ',
    station: '新宿駅 徒歩2分',
    tagline: '美味しさと雰囲気が自慢。',
    description:
      'こちらは店舗の説明になります。こちらは店舗の説明になります。こちらは店舗の説明になります。こちらは店舗の説明になります。こちらは店舗の説明になります。こちらは店舗の説明になります。こちらは店舗の説明になりますこちらは店舗の説明になります。こちらは店舗の説明になります。こちらは店舗の説明になります。こちらは店舗の説明になります。こちらは店舗の説明になります。こちらは店舗の説明になります。こちらは店舗の説明になります',
    image: '/assets/images/restaurant-image.png',
    reviews: 20,
  },
  {
    id: '2',
    title: 'レストランB',
    price: 3000,
    rating: 3,
    category: 'カフェ / 洋食',
    station: '渋谷駅 徒歩5分',
    tagline: '気軽に立ち寄れるカフェスタイル。',
    description:
      '手軽でおしゃれなランチを楽しめます。友人とのランチにおすすめ。',
    image: '/assets/images/restaurant-image.png',
    reviews: 20,
  },
  {
    id: '3',
    title: 'レストランC',
    price: 7000,
    rating: 4,
    category: '高級 / フレンチ',
    station: '銀座駅 徒歩1分',
    tagline: '本格フレンチで特別な時間を。',
    description: '記念日にぴったりの高級感溢れるフレンチレストラン。',
    image: '/assets/images/restaurant-image.png',
    reviews: 20,
  },
  {
    id: '4',
    title: 'レストランD',
    price: 4500,
    rating: 2,
    category: 'グルメ / 中華',
    station: '池袋駅 徒歩6分',
    tagline: '本場の味をリーズナブルに。',
    description: 'ボリュームたっぷり、本格中華を楽しめます。',
    image: '/assets/images/restaurant-image.png',
    reviews: 20,
  },
  {
    id: '5',
    title: 'レストランE',
    price: 6500,
    rating: 1,
    category: 'ラグジュアリー / イタリアン',
    station: '東京駅 徒歩4分',
    tagline: '本格イタリアンで贅沢なひとときを。',
    description: '厳選素材を使った本格イタリアン。デートにも最適です。',
    image: '/assets/images/restaurant-image.png',
    reviews: 20,
  },
];

export default function ListingList() {
  const [activeTab, setActiveTab] = useState('searchList');

  // Sorting logic
  const filteredItems = [...mockItems].sort((a, b) => {
    if (activeTab === 'SortByPrice') return a.price - b.price;
    if (activeTab === 'StarReviewOrder') return b.rating - a.rating;
    return 0;
  });

  return (
    <main className="flex-1">
      <div className="flex justify-between items-center mb-[20px]">
        <h2 className="text-[24px] font-bold text-[#2C3237]">
          検索結果 {filteredItems.length}件
        </h2>

        {/* Tabs */}
        <div className="flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-[11px] border-b-2 ${
                activeTab === tab.id
                  ? 'border-[#006BA6] text-[#006BA6] font-bold'
                  : 'border-transparent text-[#9E9E9E] text-[16px] cursor-pointer'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Listing Items */}
      <div>
        {filteredItems.map((item) => (
          <ListingItem key={item.id} {...item} />
        ))}
      </div>
    </main>
  );
}
