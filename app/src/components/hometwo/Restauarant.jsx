'use client'
import { useState } from 'react';
import RestaurantCard from '@/components/restaurant/restaurantCard';

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
      image: '/assets/images/restaurant02.png',
      rating: '5.00 (20)',
      area: 'エリア名',
      category: 'グルメ',
    },
    {
      id: 3,
      name: 'レストランC',
      image: '/assets/images/restaurant03.png',
      rating: '5.00 (25)',
      area: 'エリア名',
      category: 'グルメ',
    },
     {
      id: 4,
      name: 'レストランA',
      image: '/assets/images/restaurant.png',
      rating: '1.00 (30)',
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
      rating: '2.00 (25)',
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
    <div className='mt-[89px] md:mt-[100px]'>
          <h2 className='text-[32px] font-bold mb-[15px] flex md:hidden'>レビュー高評価</h2>
      <div className='flex justify-start md:justify-end mb-[20px]'>
          
        <div className='flex flex-col md:flex-row justify-between w-full overflow-x-auto'>
          <h2 className='text-[32px] font-bold mb-[15px] hidden md:flex'>レビュー高評価</h2>
       <div className='inline-flex space-x-[26px] w-[max-content]'>
           {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-[20px] font-bold cursor-pointer  ${
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

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[34px]'>
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      
      </div>
      <div className='flex justify-center mt-[50px]'>  <button className='cursor-pointer text-[#006BA6] text-[20px] font-normal'>もっと見る</button></div>
    </div>
  );
}
