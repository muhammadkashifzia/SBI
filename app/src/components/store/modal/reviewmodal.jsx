'use client';
import React, { useState } from 'react';
import { X, ChevronDown, Trash2 } from 'lucide-react';
import Image from 'next/image';

const ReviewModal = ({
  isOpen,
  onClose,
  visitDate = '2025/07/20',
  rating = 4,
  reviewText = '先日いれたボトルを飲みに行った。今日もおでんが美味しくて、カラオケも盛り上がり素敵な夜になりました。',
  brand = 'ボトルキープ',
  bottleKeeps = [
    {
      id: 1,
      type: 'ボトルキープを記録',
      memo: 'ここにはメモが入力されています。ここにはメモが入力されています。',
    },
  ],
  onUpdate,
  onDelete,
}) => {
  const [date, setDate] = useState(visitDate);
  const [currentRating, setCurrentRating] = useState(rating);
  const [text, setText] = useState(reviewText);
  const [brandName, setBrandName] = useState(brand);
  const [expandedBottle, setExpandedBottle] = useState(null);
  const [duplicateFields, setDuplicateFields] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({
      date,
      rating: currentRating,
      reviewText: text,
      bottles: duplicateFields,
    });
  };

  const toggleBottleExpand = (id) => {
    setExpandedBottle(expandedBottle === id ? null : id);
  };

  const handleAddDuplicate = () => {
    setDuplicateFields((prev) => [
      ...prev,
      {
        id: Date.now(),
        date: visitDate,
        brand: '',
      },
    ]);
  };

  const handleRemoveDuplicate = (id) => {
    setDuplicateFields((prev) => prev.filter((field) => field.id !== id));
  };

  const handleDuplicateChange = (id, key, value) => {
    setDuplicateFields((prev) =>
      prev.map((field) =>
        field.id === id ? { ...field, [key]: value } : field,
      ),
    );
  };

  const renderStar = (star) => {
    if (currentRating >= star) {
      // Full Star
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-[#B900B3]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l2.39 7.26H22l-5.19 3.77L18.6 22 12 17.27 5.4 22l1.79-8.97L2 9.26h7.61z" />
        </svg>
      );
    } else if (currentRating >= star - 0.5) {
      // Half Star
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-[#B900B3]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <defs>
            <linearGradient id="half-grad">
              <stop offset="50%" stopColor="#B900B3" />
              <stop offset="50%" stopColor="#EEEEEE" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half-grad)"
            d="M12 2l2.39 7.26H22l-5.19 3.77L18.6 22 12 17.27 5.4 22l1.79-8.97L2 9.26h7.61z"
          />
        </svg>
      );
    } else {
      // Empty Star
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-[#EEEEEE]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l2.39 7.26H22l-5.19 3.77L18.6 22 12 17.27 5.4 22l1.79-8.97L2 9.26h7.61z" />
        </svg>
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#00000099] flex items-center justify-center z-50 p-4 overflow-y-auto min-h-[556px]">
      <div className="bg-white rounded-[10px] w-full max-w-[640px] overflow-y-auto overflow-x-hidden">
        <div className="relative px-5 py-[24px] text-center border-b border-[#EEEEEE]">
          <h2 className="text-xl font-medium text-[#B900B3]">スナック りえ</h2>
          <button
            onClick={onClose}
            className="absolute right-[20px] top-[20px] text-[#B900B3] cursor-pointer"
          >
            <X size={24} />
          </button>
        </div>

        <form
          id="edit-form"
          onSubmit={handleSubmit}
          className="px-[32px] pt-[40px] pb-[32px]"
        >
          <div className="flex gap-[16px] mb-[24px] flex-col md:flex-row">
            <div className="max-w-full md:max-w-[200px] w-full">
              <label
                htmlFor="visit-date"
                className="block text-[12px] font-[400px] text-[#808080] mb-[5px]"
              >
                訪問日
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="visit-date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full border-3 border-[#EEEEEE] rounded-[5px] px-[16px] py-[11px] h-[62px] focus:outline-none  focus:border-[#B900B3]"
                />
              </div>
            </div>

            {/* Rating */}
            <div className="w-full max-w-[360px]">
              <label className="block text-[12px] font-[400px] text-[#808080] mb-[5px]">
                評価
              </label>
              <div className="flex items-center justify-between gap-2 border-3 border-[#EEEEEE] rounded-[5px] py-[11px] px-[16px] h-[62px]">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setCurrentRating(star)}
                        className="focus:outline-none"
                      >
                        {renderStar(star)}
                      </button>
                    ))}
                  </div>
                  <select
                    value={currentRating}
                    onChange={(e) =>
                      setCurrentRating(parseFloat(e.target.value))
                    }
                    className="border border-[#EEEEEE] rounded-[2px] p-2 text-sm h-[36px]"
                  >
                    {[1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map((value) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <p
                    className="cursor-pointer underline text-[14px] text-[#808080] font-normal"
                    onClick={() => {
                      setCurrentRating(0);
                    }}
                  >
                    削除
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Review Text */}
          <div className="mb-3">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full p-[16px]  h-40 border-3 border-[#EEEEEE] rounded-[5px] text-[16px] text-[#808080] placeholder-[#BBBBBB]"
              placeholder="レビューを入力してください"
            />
          </div>

          {/* BottleKeeps */}
          {bottleKeeps.map((bottle) => (
            <div key={bottle.id} className="mb-4 border-b border-[#EEEEEE]">
              <div
                className="flex items-center pt-[4px] pb-[16px] cursor-pointer gap-[4px]"
                onClick={() => toggleBottleExpand(bottle.id)}
              >
                <Image
                  src="/assets/svg/icon_keep_sp.svg"
                  alt="bottle"
                  width={20}
                  height={20}
                />
                <span className="flex-grow text-[#68686A] text-[16px] font-medium">
                  {bottle.type}
                </span>
                {expandedBottle === bottle.id ? (
                  <X size={20} className="text-gray-600" />
                ) : (
                  <ChevronDown size={20} className="text-gray-600" />
                )}
              </div>

              {expandedBottle === bottle.id && (
                <div className="border-t border-gray-200 pt-[20px]">
                  <div className="flex gap-[16px] mb-[24px]">
                    <div className="w-full md:w-1/2">
                      <label className="text-sm text-[#808080] mb-[5px] block">
                        訪問日
                      </label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full border-3 border-[#EEEEEE] rounded-[5px] px-[16px] py-[11px] h-[62px]  focus:outline-none  focus:border-[#B900B3]"
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <label className="text-sm text-[#808080] mb-[5px] block">
                        銘柄
                      </label>
                      <input
                        type="text"
                        value={brandName}
                        onChange={(e) => setBrandName(e.target.value)}
                        className="w-full border-3 border-[#EEEEEE] rounded-[5px] px-[16px] py-[11px] h-[62px]  focus:outline-none  focus:border-[#B900B3]"
                        placeholder="山崎12年"
                      />
                    </div>
                  </div>
                  {/* Duplicate Fields */}
                  {duplicateFields.map((field) => (
                    <div
                      key={field.id}
                      className="flex gap-4 mb-4 items-end relative"
                    >
                      <div className="w-full md:w-1/2">
                        <label className="text-sm text-[#808080] mb-[5px] block">
                          訪問日
                        </label>
                        <input
                          type="date"
                          value={field.date}
                          onChange={(e) =>
                            handleDuplicateChange(
                              field.id,
                              'date',
                              e.target.value,
                            )
                          }
                          className="w-full border border-[#EEEEEE] rounded-[5px] px-[16px] py-[11px] h-[62px]"
                        />
                      </div>
                      <div className="w-full md:w-1/2 relative">
                        <label className="text-sm text-[#808080] mb-[5px] block">
                          銘柄
                        </label>
                        <input
                          type="text"
                          value={field.brand}
                          onChange={(e) =>
                            handleDuplicateChange(
                              field.id,
                              'brand',
                              e.target.value,
                            )
                          }
                          className="w-full border border-[#EEEEEE] rounded-[5px] px-[16px] py-[11px] h-[62px]"
                          placeholder="山崎12年"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRemoveDuplicate(field.id)}
                        className="absolute -right-[25px] bottom-[0%] transform -translate-y-1/2 text-red-500 cursor-pointer"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  ))}
                  {/* Add Button */}
                  <div
                    className="flex justify-center pb-4 cursor-pointer"
                    onClick={handleAddDuplicate}
                  >
                    <Image
                      src="/assets/svg/plus.svg"
                      alt="Plus"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </form>

        <button
          type="submit"
          form="edit-form"
          className="w-full bg-[#B900B3] text-white py-4 text-lg cursor-pointer"
        >
          記録する
        </button>
      </div>
    </div>
  );
};

export default ReviewModal;
