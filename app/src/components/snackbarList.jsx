"use client";
import { useEffect, useState } from 'react';
import SnackBarCard from '@/components/snackbarCard';
import SnackBarCardSkeleton from '@/components/shimmer/snackBarCardSkeleton';

const snackBars = [
  {
    id: 1,
    name: 'スナック りえ',
    location: '東京都 下北沢駅',
    imageUrl: '/assets/images/magazine.png',
  },
  {
    id: 2,
    name: 'スナック りえ',
    location: '東京都 下北沢駅',
    imageUrl: '/assets/images/magazine.png',
  },
  {
    id: 3,
    name: 'スナック りえ',
    location: '東京都 下北沢駅',
    imageUrl: '/assets/images/magazine.png',
  },
  {
    id: 4,
    name: 'スナック りえ',
    location: '東京都 下北沢駅',
    imageUrl: '/assets/images/magazine.png',
  },
  {
    id: 5,
    name: 'スナック りえ',
    location: '東京都 下北沢駅',
    imageUrl: '/assets/images/magazine.png',
  },
];

const SnackBarList = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loading simulation

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-[18px]">
        {loading
          ? Array.from({ length: 5 }).map((_, index) => (
              <SnackBarCardSkeleton key={index} />
            ))
          : snackBars.map((snackBar) => (
              <SnackBarCard key={snackBar.id} {...snackBar} />
            ))}
      </div>
    </div>
  );
};

export default SnackBarList;
