'use client'
import { useState } from 'react';
import RestaurantCard from '@/components/restaurant/RestaurantCard';

export default function Home() {
  const categories = ['グルメ', 'ファッション', 'グッズ', 'アミューズメント', 'サービス'];
  const [selectedCategory, setSelectedCategory] = useState('グルメ');

  const restaurants = [
    {
      id: 1,
      name: 'レストランA',
      image: '/assets/images/restaurant.png',
      rating: '5.00 (30)',
      area: 'エリア名',
      category: 'グルメ',
    },
    {
      id: 2,
      name: 'レストランB',
      image: '/assets/images/restaurant.png',
      rating: '5.00 (20)',
      area: 'エリア名',
      category: 'グルメ',
    },
    {
      id: 3,
      name: 'レストランC',
      image: '/assets/images/restaurant.png',
      rating: '5.00 (25)',
      area: 'エリア名',
      category: 'グルメ',
    },
     {
      id: 4,
      name: 'レストランA',
      image: '/assets/images/restaurant.png',
      rating: '5.00 (30)',
      area: 'エリア名',
      category: 'グルメ',
    },
    {
      id: 5,
      name: 'レストランB',
      image: '/assets/images/restaurant.png',
      rating: '5.00 (20)',
      area: 'エリア名',
      category: 'グルメ',
    },
    {
      id: 6,
      name: 'レストランC',
      image: '/assets/images/restaurant.png',
      rating: '5.00 (25)',
      area: 'エリア名',
      category: 'グルメ',
    },
    {
      id: 7,
      name: 'レストランD',
      image: '/assets/images/restaurant.png',
      rating: '5.00 (25)',
      area: 'エリア名',
      category: 'ファッション',
    },
    // Add more restaurants with different categories
  ];

  const filteredRestaurants = restaurants.filter(
    (restaurant) => restaurant.category === selectedCategory
  );

  return (
    <div className='max-w-[1360px] mx-auto mt-[100px]'>
      <div className='flex justify-end mb-[20px]'>
        <div className='flex justify-between w-full'>
          <h2 className='text-[32px] font-bold'>レビュー高評価</h2>
       <div className='flex space-x-[26px]'>
           {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-[20px] font-bold cursor-pointer ${
                selectedCategory === cat
                  ? 'text-[#006BA6] border-b-2 border-[#006BA6]'
                  : 'text-[#9E9E9E] hover:text-[#006BA6]'
              }`}
            >
              {cat}
            </button>
          ))}
       </div>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-[34px]'>
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      
      </div>
      <div className='flex justify-center mt-[50px]'>  <button className='cursor-pointer text-[#006BA6] text-[20px] font-normal'>もっと見る</button></div>
    </div>
  );
}
