'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Prefecture from '../../components/prefecture/prefecture';
import IntrestCard from '../../components/profile/IntrestCard/page';
import { SnackCard } from '../../components/profile/snackCard/page';
import FavoriteCard from '../../components/profile/favoriteCard/page';
import BottleCard from '../../components/profile/bottleCard/bottleCard';
import { BottleEditModal } from '../../components/profile/modal/BottleEditModal';
import StorePrefecture from '@/components/store/prefecture/prefecture';
import { ChevronDown } from 'lucide-react';
import { useSearchParams, useRouter } from 'next/navigation';
export default function ProfilePage() {
 const searchParams = useSearchParams();
 const router = useRouter();
 const initialTab = searchParams.get('tab') || '気になるスナック';
 const [activeTab, setActiveTab] = useState(initialTab);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBottle, setSelectedBottle] = useState(null);

  const tabs = [
    '気になるスナック',
    '行ったスナック',
    'お気に入りママ',
    'ボトルキープ',
  ];

  const snackData = [
    { id: 1, name: 'スナック りえ', location: '東京都世田谷区', rating: 3.5 },
    { id: 2, name: 'スナック りえ', location: '東京都世田谷区', rating: 3.5 },
    { id: 3, name: 'スナック りえ', location: '東京都世田谷区', rating: 3.5 },
    { id: 4, name: 'スナック りえ', location: '東京都世田谷区', rating: 3.5 },
    { id: 5, name: 'スナック りえ', location: '東京都世田谷区', rating: 3.5 },
    { id: 6, name: 'スナック りえ', location: '東京都世田谷区', rating: 3.5 },
  ];

  const bottleData = [
    {
      snackName: 'スナック りえ',
      location: '東京都世田谷区',
      expiryDate: '2025.07.20',
      bottleType: 'ウイスキー（山崎12年）',
    },
    {
      snackName: 'スナック りえ',
      location: '東京都世田谷区',
      expiryDate: '2025.07.20',
      bottleType: 'ウイスキー（山崎12年）',
    },
    {
      snackName: 'スナック りえ',
      location: '東京都世田谷区',
      expiryDate: '2025.07.20',
      bottleType: 'ウイスキー（山崎12年）',
    },
    {
      snackName: 'スナック りえ',
      location: '東京都世田谷区',
      expiryDate: '2025.07.20',
      bottleType: 'ウイスキー（山崎12年）',
    },
  ];

  useEffect(() => {
    const tab = searchParams.get('tab') || '気になるスナック';
    setActiveTab(tab);
  }, [searchParams]);

  const handleEditBottle = (index) => {
    setSelectedBottle(index);
    setIsModalOpen(true);
  };

  const handleUpdateBottle = (data) => {
    console.log('Updating bottle with data:', data);
    // Here you would update the bottle data
  };

  const handleDeleteBottle = () => {
    console.log('Deleting bottle:', selectedBottle);
    // Here you would delete the bottle
  };

  return (
    <div className="max-w-[1272px] mx-auto px-[] md:px-[16px]">
      <div className="bg-white px-[16px] md:px-[44px] pt-[48px]">
        {/* Profile and Stats Section */}
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-[16px] md:mb-[56px]">
          {/* Profile Section */}
          <div className="flex flex-row items-center gap-[24px]">
            <div className="relative">
              <div className="w-[140px] h-[140px] rounded-full overflow-hidden">
                <Image
                  src="/assets/images/user.jpg"
                  alt="プロフィール写真"
                  className="w-full h-full object-cover"
                  width={140}
                  height={140}
                />
              </div>
              <p className="text-[12px] font-[500] text-[#C0C0C0] mt-[] md:mt-[16px] text-center underline">
                プロフィール編集
              </p>
            </div>
            <div className="mt-2 text-center ">
              <div className="flex items-center justify-center  gap-1">
                <Image
                  src="/assets/svg/starBadge.svg"
                  width={44}
                  height={56}
                  alt="StarBadge"
                />
                <div className="mt-6 md:mt-0px">
                  <h2 className=" text-[18px] font-[700] text-left">
                    田中 太郎
                  </h2>
                  <p className="text-[14px] font-[500] text-[#C0C0C0]">
                    シルバースナッカー
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="md:bg-[#B900B3] md:rounded-lg pb-2 md:px-[12px] pt-3 md:pb-0 text-white">
            <h3 className="hidden md:block text-center text-[15px] font-[700] mb-[9px]">
              スナ活データ
            </h3>
            <div className="sm:hidden flex items-center gap-[4px] mb-[10px]">
              <div className="w-[24px] h-[24px] bg-[#B900B3] rounded-full flex items-center justify-center">
                <Image
                  src="/assets/svg/file.svg"
                  width={16}
                  height={16}
                  alt="eye"
                />
              </div>
              <p className="text-[15px] font-[700] text-[#B900B3]">
                スナ活データ
              </p>
            </div>
            <div className="grid grid-cols-4 gap-[4px] md:gap-2">
              <div className="bg-[#F4F4F4] md:bg-white rounded-lg p-[16px] space-y-1 flex flex-col items-center">
                <Image
                  src="/assets/svg/bHeart.svg"
                  width={24}
                  height={24}
                  alt="eye"
                />
                <p className="text-[12px] font-[700] text-[#B900B3] mb-0 mt-[11px] md:mt-[8px] text-center">
                  気になるスナック
                </p>
                <p className="text-[24px] font-bold text-[#B900B3] text-center">
                  56<span className="text-xs">件</span>
                </p>
              </div>
              <div className="bg-[#F4F4F4] md:bg-white rounded-lg p-[16px] space-y-1 flex flex-col items-center">
                <Image
                  src="/assets/svg/music.svg"
                  width={24}
                  height={24}
                  alt="mic"
                />
                <p className="text-[12px] font-[700] text-[#B900B3] mb-0 mt-[11px] md:mt-[8px] text-center">
                  行ったスナック
                </p>
                <p className="text-[24px] font-bold text-[#B900B3]">
                  14<span className="text-xs">件</span>
                </p>
              </div>
              <div className="bg-[#F4F4F4] md:bg-white rounded-lg p-[16px] flex space-y-1 flex-col items-center">
                <Image
                  src="/assets/svg/user.svg"
                  width={24}
                  height={24}
                  alt="user"
                />
                <p className="text-[12px] font-[700] text-[#B900B3] mb-0 mt-[11px] md:mt-[8px] text-center">
                  お気に入りママ
                </p>
                <p className="text-[24px] font-bold text-[#B900B3]">
                  6<span className="text-xs">人</span>
                </p>
              </div>
              <div className="bg-[#F4F4F4] md:bg-white rounded-lg p-[16px] space-y-1 flex flex-col items-center">
                <Image
                  src="/assets/svg/bottle.svg"
                  width={24}
                  height={24}
                  alt="wine"
                />
                <p className="text-[12px] font-[700] text-[#B900B3] mb-0 mt-[11px] md:mt-[8px] text-center">
                  ボトルキープ
                </p>
                <p className="text-[24px] font-bold text-[#B900B3]">
                  2<span className="text-xs">本</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-t-0 md:border-t-1 border-[#E9E9E9]">
          <div className="flex gap-[32px] md:gap-[40px] pt-0 md:pt-[24px]">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`pb-[12px] md:pb-[24px] text-[12px] md:text-[15px] font-bold cursor-pointer ${
                  activeTab === tab
                    ? 'text-[#B900B3] border-b-2 border-[#B900B3]'
                    : 'text-[#1E1C1C] hover:text-gray-700'
                }`}
                onClick={() => {
                  setActiveTab(tab);
                  router.push(`?tab=${encodeURIComponent(tab)}`);
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-[4px] mt-[56px] mb-[24px]">
        <Image src="/assets/svg/map.svg" width={16} height={16} alt="map" />
        <p className="text-[#C0C0C0] font-[500] mr-[8px] text-[14px] md:mr-0">
          地図表示
        </p>
      </div>

      {/* Snack Listings */}
      <div className="px-2 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
          {activeTab === '気になるスナック' &&
            snackData.map((snack, index) => (
              <IntrestCard key={index} snack={snack} index={index} />
            ))}

          {activeTab === '行ったスナック' &&
            snackData.map((snack, index) => (
              <SnackCard
                key={index}
                snack={snack}
                index={index}
                showRating={true}
                showEditIcon={true}
              />
            ))}

          {activeTab === 'お気に入りママ' &&
            snackData.map((snack, index) => (
              <FavoriteCard key={index} snack={snack} index={index} />
            ))}

          {activeTab === 'ボトルキープ' &&
            bottleData.map((snack, index) => (
              <BottleCard
                key={index}
                snack={snack}
                index={index}
                handleEditBottle={handleEditBottle}
              />
            ))}
        </div>
        <div className="flex flex-col justify-center space-y-[12px] items-center mt-[32px]">
          <p className="text-[#B900B3] font-[700] text-[15px]">
            さらに読み込む...
          </p>
          <div className="w-[40px] h-[40px] bg-[#B900B3] rounded-full flex justify-center items-center cursor-pointer">
            <ChevronDown className="text-white" size={20} />
          </div>
        </div>
      </div>

      {/* Map Display Button */}
      {/* <div className="flex justify-end mt-4">
          <button className="text-xs text-gray-500 flex items-center">
            <span className="mr-1">地図表示</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </button>
        </div> */}

      <div className="space-y-[56px] ml-[8px] mt-[240px] md:ml-[0px] mb-[120px]">
        <StorePrefecture />
        <Prefecture />
      </div>

      {/* Bottle Edit Modal */}
      <BottleEditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        bottleData={
          selectedBottle !== null
            ? {
                purchaseDate: '2025/07/20',
                bottleType: bottleData[selectedBottle].bottleType,
                memo:
                  bottleData[selectedBottle].memo ||
                  'ここにはメモが入力されています。',
              }
            : undefined
        }
        onUpdate={handleUpdateBottle}
        onDelete={handleDeleteBottle}
      />
    </div>
  );
}
