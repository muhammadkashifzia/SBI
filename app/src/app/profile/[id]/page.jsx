'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  ChevronLeft,
  MoreVertical,
  Wine,
  Plus,
  Pencil,
  Trash2,
} from 'lucide-react';
import Image from 'next/image';
import { CardMenu } from '@/components/profile/modal/CardMenu';
import { EditVisitModal } from '@/components/profile/modal/EditVisitModal';
import { DeleteConfirmationModal } from '@/components/profile/modal/DeleteConfirmationModal';


// Visit data structure
const visitData = [
  {
    id: 1,
    date: '2025/07/20 訪問',
    rating: 4.0,
    review: `先日いれたボトルを飲みに行った。
今日もおでんが美味しくて、カラオケも楽しめて
素敵な夜になりました。`,
  },
  {
    id: 2,
    date: '2025/05/18 訪問',
    rating: 3.0,
    review: `常連さんたちとワイワイ愉快な夜だった。
ママの手作りおでんがすごく美味しかった。
お店の雰囲気も良く、ついつい長居したくなる空間
が最高でした。`,
  },
];

export default function SnackDetailPage() {
  const [openMenus, setOpenMenus] = useState({
    1: false,
    2: false,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedVisit, setSelectedVisit] = useState(null);

  const toggleMenu = (id) => {
    setOpenMenus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleEdit = (visit) => {
    setSelectedVisit(visit);
    setIsModalOpen(true);
  };

  const handleDelete = (visit) => {
    setSelectedVisit(visit);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedVisit(null);
  };

  const handleConfirmDelete = () => {
    // TODO: Implement delete logic
    console.log('Deleting visit:', selectedVisit);
    closeDeleteModal();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVisit(null);
  };

  const handleUpdate = (updatedData) => {
    // TODO: Implement update logic
    console.log('Updated data:', updatedData);
    closeModal();
  };

  return (
    <>
      <div className="max-w-7xl mx-auto  min-h-screen">
        {/* Header with back button */}
        <div className="p-4 md:p-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center text-[#B900B3] hover:text-[#B900B3] transition-colors"
          >
            <ChevronLeft size={20} />
            <span className="font-medium ml-1 text-[15px]">行ったお店一覧</span>
          </Link>
        </div>

        {/* Main content container */}
        <div className="md:flex md:gap-6 lg:gap-8 md:px-6 lg:px-8">
          {/* Snack info section - fixed width on larger screens */}
          <div className="md:w-1/3 lg:w-1/4 bg-gray-50 md:rounded-lg md:shadow-sm md:sticky md:top-4 md:self-start">
            {/* Snack bar info */}
            <div className="px-[16px] py-4 flex justify-between items-center md:flex-col md:items-start md:gap-4">
              <div>
                <h1 className="text-[20px] font-[900] text-[#B900B3]">
                  スナック りえ
                </h1>
                <p className="text-[#888888] text-[14px] font-[400]">東京都世田谷区</p>
              </div>
              <div className="flex flex-col items-center text-[#B900B3] md:flex-row md:gap-1">
                {/* <Wine size={24} className="md:w-6 md:h-6" /> */}
                <Image
                  src="/assets/svg/bottle.svg"
                  alt="wine"
                  width={24}
                  height={24}
                />
                <span className="text-[14px] font-[400]">(2)</span>
              </div>
            </div>

            {/* Add visit button */}
            <div className="p-4 border-b  md:border-b-0 border-[#FAFAFA]">
              <button className="flex items-center justify-center text-[#B900B3] hover:text-purple-800 transition-colors w-full">
                <div className="bg-[#B900B3] rounded-full p-1 mr-2">
                  <Plus size={16} className="text-white" />
                </div>
                <span className='text-[15px] font-[700]'>行ったを追加する</span>
              </button>
            </div>
          </div>

          {/* Visits list section - flexible width */}
          <div className="md:w-2/3 lg:w-3/4 divide-[#DEDEDE] divide-y bg-white">
            {visitData.map((visit) => (
              <div key={visit.id} className="px-[12px] py-4">
                <div className="flex justify-between items-start">
                  <span className="text-gray-500 md:text-lg">{visit.date}</span>
                  <div className="relative">
                    <button
                      onClick={() => toggleMenu(visit.id)}
                      aria-label="Menu"
                      className="hover:bg-gray-100 rounded-full p-1 transition-colors"
                    >
                      <MoreVertical size={20} className="text-[#B900B3]" />
                    </button>
                    {openMenus[visit.id] && (
                      <div className="absolute top-0 right-2 mt-8 bg-white rounded-[10px] shadow-lg border-2 border-black z-50 w-[130px]">
                        <div className="py-1">
                          <button
                            onClick={() => handleEdit(visit)}
                            className="w-full text-left px-7 py-3 gap-2 flex items-center hover:bg-gray-50 border-b border-gray-200" >
                            <Image
                              src="/assets/svg/edit.svg"
                              alt="edit"
                              width={18}
                              height={18}
                            />
                            <span>編集</span>
                          </button>
                          <button
                            onClick={() => handleDelete(visit)}
                            className="w-full text-left px-7 py-3 flex items-center hover:bg-gray-50 text-[#FF0000]"
                          >
                            <Trash2 size={18} className="mr-2" />
                            <span>削除</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-2 md:mb-3">
                  <div className="flex mr-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star}>
                        {star <= visit.rating ? (
                          <Image
                            src="/assets/svg/fstar.svg"
                            alt="star"
                            width={24}
                            height={24}
                          />
                        ) : (
                          <Image
                            src="/assets/svg/estar.svg"
                            alt="star"
                            width={24}
                            height={24}
                          />
                        )}
                      </span>
                    ))}
                  </div>
                  <span className="text-xl md:text-2xl font-medium text-[#B900B3]">
                    {visit.rating}
                  </span>
                </div>

                {/* Review text */}
                <p className="text-[#1E1C1C] text-[15px] font-[400] leading-[24px]">
                  {visit.review}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <EditVisitModal
        isOpen={isModalOpen}
        onClose={closeModal}
        visitDate={selectedVisit?.date}
        rating={selectedVisit?.rating}
        reviewText={selectedVisit?.review}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
}
