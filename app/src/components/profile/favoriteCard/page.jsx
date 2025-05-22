import React, { useState } from 'react';
import Image from 'next/image';
import { MamaModal } from '../modal/MamaModal';

const FavoriteCard = ({ snack, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUserIconClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="bg-white rounded-md pt-[40px] pl-[40px] pr-[12px] pb-[35px] relative">
        {/* User icon in top right */}
        <div
          className="absolute top-2 right-2 cursor-pointer"
          onClick={handleUserIconClick}
        >
          <Image
            src="/assets/svg/user.svg"
            width={24}
            height={24}
            alt="User icon"
          />
        </div>

        {/* Snack name and location */}
        <div className="mb-4">
          <h3 className="text-[#B900B3] font-[900] text-[16px]">スナック りえ</h3>
          <p className="text-[12px] font-[400] text-gray-500">{snack.location}</p>
        </div>

        {/* Mama profile photo and name */}
        <div className="flex flex-col w-full max-w-[120px]">
          {/* Changed from items-left to items-center */}
          <div className="w-[120px] h-[120px] rounded-full overflow-hidden mb-[4px]">
            {/* Added mb-2 for spacing */}
            <Image
              src={'/assets/images/mama.png' || '/placeholder.svg'}
              alt="Mama profile photo"
              width={120}
              height={120}
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-[#1E1C1C] text-center text-[14px] font-[500]">りえママ</p>{' '}
          {/* Removed text-center as it's now centered by flex-col items-center */}
        </div>
      </div>

      {/* Mama Modal */}
      <MamaModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        snackName="スナック りえ"
        location={snack.location}
        mamaName="りえママ"
        imageUrl="/assets/images/mama.png"
        tags={['優しい', '明るい', '話しやすい']}
      />
    </>
  );
};

export default FavoriteCard;
