'use client';
import React from 'react';
import { useState } from 'react';
import {
  X,
  ChevronDown,
  ChevronUp,
  Trash2,
  ChevronRight,
  MoreVertical,
  MoreHorizontal,
} from 'lucide-react';
import Image from 'next/image';
import { AddBottleModal } from './AddBottleModal';
import { DeleteConfirmationModal } from './DeleteConfirmationModal';

export function EditVisitModal({
  isOpen,
  onClose,
  visitDate = '2025/07/20',
  rating = 4,
  reviewText = '先日いれたボトルを飲みに行った。今日もおでんが美味しくて、カラオケも盛り上がり素敵な夜になりました。',
  bottleKeeps = [
    {
      id: 1,
      type: 'ウイスキー (山崎12年)',
      purchaseDate: '2025/07/20',
      memo: 'ここにはメモが入力されています。ここにはメモが入力されています。',
    },
    {
      id: 2,
      type: 'ウイスキー (山崎12年)',
      purchaseDate: '2025/07/20',
      memo: 'ここにはメモが入力されています。ここにはメモが入力されています。',
    },
  ],
  onUpdate,
  onDelete,
}) {
  const [date, setDate] = useState(visitDate);
  const [currentRating, setCurrentRating] = useState(rating);
  const [text, setText] = useState(reviewText);
  const [showRatingDropdown, setShowRatingDropdown] = useState(false);
  const [isAddBottleModalOpen, setIsAddBottleModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [bottles, setBottles] = useState(bottleKeeps);
  const [expandedBottle, setExpandedBottle] = useState(null);
  const [openMenus, setOpenMenus] = useState({});
  const [selectedBottle, setSelectedBottle] = useState(null);

  const handleEdit = (bottle) => {
    setSelectedBottle(bottle);
    setIsAddBottleModalOpen(true);
    setOpenMenus({});
  };

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ date, rating: currentRating, reviewText: text });
  };

  const toggleBottleExpand = (id) => {
    setExpandedBottle(expandedBottle === id ? null : id);
  };

  const handleAddBottle = (bottleData) => {
    if (selectedBottle) {
      // Update existing bottle
      setBottles(
        bottles.map((bottle) =>
          bottle.id === selectedBottle.id
            ? {
                ...bottle,
                type: `ウイスキー (${bottleData.name})`,
                purchaseDate: bottleData.purchaseDate,
                memo: bottleData.memo,
              }
            : bottle,
        ),
      );
    } else {
      // Add new bottle
      const newId =
        bottles.length > 0 ? Math.max(...bottles.map((b) => b.id)) + 1 : 1;
      setBottles([
        ...bottles,
        {
          id: newId,
          type: `ウイスキー (${bottleData.name})`,
          purchaseDate: bottleData.purchaseDate,
          memo: bottleData.memo,
        },
      ]);
    }
    setIsAddBottleModalOpen(false);
    setSelectedBottle(null);
  };

  const handleDeleteBottle = (id) => {
    setSelectedBottle(bottles.find((bottle) => bottle.id === id));
    setIsDeleteModalOpen(true);
    setOpenMenus({}); // Close the dropdown menu
  };

  const handleDeleteConfirm = () => {
    if (selectedBottle) {
      setBottles(bottles.filter((bottle) => bottle.id !== selectedBottle.id));
    }
    setIsDeleteModalOpen(false);
    setSelectedBottle(null);
  };

  const ratingOptions = [5.0, 4.0, 3.0, 2.0, 1.0];

  const toggleMenu = (id) => {
    setOpenMenus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      <div className="fixed inset-0 bg-[#00000099] bg-opacity-20 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl w-full max-w-lg overflow-hidden">
          {/* Header */}
          <div className="relative px-5 mt-4 text-center">
            <h2 className="text-xl font-medium text-[#B900B3]">
              行った記録を編集
            </h2>
            <button
              onClick={onClose}
              className="absolute right-5 top-3 text-[#B900B3] hover:text-[#B900B3]"
              aria-label="Close"
            >
              <X size={24} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="px-6 py-3">
            {/* Visit Date */}
            <div className="mb-6">
              <label
                htmlFor="visit-date"
                className="block text-[12px] font-[400px] text-[#808080] mb-2"
              >
                訪問日
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="visit-date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-4 border-3 border-[#EEEEEE] rounded-lg text-lg"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  {/* <Calendar size={24} className="text-gray-800" /> */}
                  <Image
                    src="/assets/svg/calendar.svg"
                    alt="Calendar"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>

            {/* Rating */}
            <div className="mb-6">
              <label className="block text-[12px] font-[400px] text-[#808080] mb-2">
                評価
              </label>
              <div className="flex items-center justify-between border-3 border-gray-100 rounded-lg p-2">
                <div className="flex ">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setCurrentRating(star)}
                      className="focus:outline-none"
                    >
                      {star <= currentRating ? (
                        <Image
                          src="/assets/svg/fStar.svg"
                          alt="Star"
                          width={36}
                          height={36}
                        />
                      ) : (
                        <Image
                          src="/assets/svg/eStar.svg"
                          alt="Star"
                          width={36}
                          height={36}
                        />
                      )}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setShowRatingDropdown(!showRatingDropdown)}
                    className="flex items-center justify-between ml-[12px] w-24 p-2 border border-[#B900B3]  text-[#B900B3] text-xl"
                  >
                    <span>{currentRating}.0</span>
                    <Image
                      src="/assets/svg/chevronDown.svg"
                      alt="ChevronDown"
                      width={20}
                      height={20}
                    />
                  </button>
                </div>

                <div className="flex items-center">
                  <div className="relative">
                    {showRatingDropdown && (
                      <div className="absolute top-full right-22 mt-6 w-25 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                        {ratingOptions.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => {
                              setCurrentRating(option);
                              setShowRatingDropdown(false);
                            }}
                            className="block w-full text-left px-3 py-1 hover:bg-gray-100 text-[#B900B3]"
                          >
                            {option.toFixed(1)}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <button
                    type="button"
                    className="ml-4 text-gray-500 hover:text-gray-700 underline"
                  >
                    削除
                  </button>
                </div>
              </div>
            </div>

            {/* Review Text */}
            <div className="mb-3">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full p-4 h-40 border-3 border-[#EEEEEE] rounded-lg text-lg"
                placeholder="レビューを入力してください"
              />
            </div>

            {bottles.map((bottle) => (
              <div key={bottle.id} className="mb-4">
                <div className="block text-sm text-gray-600 mb-2">
                  ボトルキープ
                </div>
                <div className="border-3 border-[#EEEEEE] rounded-lg">
                  <div
                    className="flex items-center p-4 cursor-pointer"
                    onClick={() => toggleBottleExpand(bottle.id)}
                  >
                    {/* <Wine size={20} className="text-gray-400 mr-3" /> */}
                    <Image
                      src="/assets/svg/bottle.svg"
                      alt="bottle"
                      width={20}
                      height={20}
                    />
                    <span className="flex-grow">{bottle.type}</span>
                    {expandedBottle === bottle.id ? (
                      <ChevronUp size={20} className="text-gray-600" />
                    ) : (
                      <ChevronDown size={20} className="text-gray-600" />
                    )}
                  </div>

                  {expandedBottle === bottle.id && (
                    <div className="border-t border-gray-200 p-2 relative">
                      <div className="space-y-1 bg-[#F8F8F8] p-[16px] rounded-lg">
                        <div className="flex justify-between items-center">
                          <p className="text-[#888888] text-[14px] font-[500]">
                            {bottle.purchaseDate} 購入
                          </p>
                          <MoreHorizontal
                            className="text-[#B900B3]"
                            size={20}
                            onClick={() => toggleMenu(bottle.id)}
                          />
                        </div>
                        {openMenus[bottle.id] && (
                          <div className="absolute top-3 right-5 mt-8 bg-white rounded-[10px] shadow-lg border-2 border-black z-50 w-[130px]">
                            <div className="py-1">
                              <button
                                onClick={() => handleEdit(bottle)}
                                className="w-full text-left px-7 py-3 gap-2 flex items-center hover:bg-gray-50 border-b border-gray-200"
                              >
                                <Image
                                  src="/assets/svg/edit.svg"
                                  alt="edit"
                                  width={18}
                                  height={18}
                                />
                                <span>編集</span>
                              </button>
                              <button
                                onClick={() => handleDeleteBottle(bottle.id)}
                                className="w-full text-left px-7 py-3 flex items-center hover:bg-gray-50 text-[#FF0000]"
                              >
                                <Trash2 size={18} className="mr-2" />
                                <span>削除</span>
                              </button>
                            </div>
                          </div>
                        )}

                        <p className="text-[#1E1C1C] text-[15px] font-[500]">
                          {bottle.memo}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            <div className="flex justify-center pb-4 cursor-pointer">
              <Image
                src="/assets/svg/plus.svg"
                alt="Plus"
                width={20}
                height={20}
                onClick={() => setIsAddBottleModalOpen(true)}
              />
            </div>

            {/* Delete Button */}
            <div className="mb-2 flex justify-center">
              <button
                type="button"
                onClick={() => setIsDeleteModalOpen(true)}
                className="flex items-center text-red-500 hover:text-red-700"
              >
                <Trash2 size={20} className="mr-1" />
                <span className="text-[16px] font-[400]">記録を削除</span>
              </button>
            </div>
          </form>

          {/* Update Button */}
          <button
            type="submit"
            form="edit-form"
            className="w-full bg-[#B900B3] text-white py-4 flex items-center justify-center text-lg relative"
          >
            <span>更新する</span>
            <ChevronRight size={24} className="absolute right-6" />
          </button>
        </div>
      </div>
      <AddBottleModal
        isOpen={isAddBottleModalOpen}
        onClose={() => {
          setIsAddBottleModalOpen(false);
          setSelectedBottle(null);
        }}
        onAdd={handleAddBottle}
        defaultDate={date}
        initialData={selectedBottle}
      />
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setSelectedBottle(null);
        }}
        onConfirm={handleDeleteConfirm}
      />
    </>
  );
}
