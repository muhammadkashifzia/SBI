'use client';
import { useState } from 'react';
import { X, Calendar, Trash2, ChevronRight } from 'lucide-react';
import { DeleteConfirmationModal } from './DeleteConfirmationModal';
import Image from 'next/image';

export function BottleEditModal({
  isOpen,
  onClose,
  bottleData = {
    purchaseDate: '2025/07/20',
    bottleType: 'ウイスキー（山崎12年）',
    memo: 'ここにはメモが入力されています。',
  },
  onUpdate,
  onDelete,
}) {
  const [formData, setFormData] = useState(bottleData);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  if (!isOpen) return null;

  const handleUpdate = () => {
    if (onUpdate) onUpdate(formData);
    onClose();
  };

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
    console.log('Delete button clicked');
  };

  const handleConfirmDelete = () => {
    if (onDelete) onDelete();
    setIsDeleteModalOpen(false);
    onClose();
  };

  return (
    <>
      {/* Overlay with higher z-index */}
      <div className="fixed inset-0 bg-[#00000099] bg-opacity-50 flex items-center justify-center z-[9999]">
        {/* Modal container with relative z-index */}
        <div className="bg-white rounded-[10px] w-full max-w-md mx-4 overflow-hidden relative z-[10000]">
          {/* Header */}
          <div className="relative py-[24px] text-center">
            <h2 className="text-[16px] font-[700] text-[#B900B3]">
              ボトルキープを編集
            </h2>
            <button
              onClick={onClose}
              className="absolute right-2 top-2 text-[#B900B3]"
              aria-label="Close"
            >
              <X size={24} />
            </button>
          </div>

          {/* Form */}
          <div className="px-[12px]">
            {/* Purchase Date */}
            <div className="mb-[12px]">
              <label
                htmlFor="purchaseDate"
                className="block text-[12px] font-[400] text-[#808080] mb-1"
              >
                購入日
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="purchaseDate"
                  value={formData.purchaseDate}
                  onChange={(e) =>
                    setFormData({ ...formData, purchaseDate: e.target.value })
                  }
                  className="w-full border-[3px] border-[#EEEEEE] rounded-lg p-4 pr-12"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-700">
                  <Image
                    src="/assets/svg/calendar.svg"
                    alt="Calendar"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>

            {/* Bottle Type */}
            <div className="mb-[12px]">
              <label
                htmlFor="bottleType"
                className="block text-[12px] font-[400] text-[#808080] mb-1"
              >
                銘柄
              </label>
              <input
                type="text"
                id="bottleType"
                value={formData.bottleType}
                onChange={(e) =>
                  setFormData({ ...formData, bottleType: e.target.value })
                }
                className="w-full border-[3px] border-[#EEEEEE] rounded-lg p-4"
              />
            </div>

            {/* Memo */}
            <div className="mb-[24px]">
              <label
                htmlFor="memo"
                className="block text-[12px] font-[400] text-[#808080] mb-1"
              >
                メモ
              </label>
              <textarea
                id="memo"
                value={formData.memo}
                onChange={(e) =>
                  setFormData({ ...formData, memo: e.target.value })
                }
                className="w-full border-[3px] border-[#EEEEEE] rounded-lg p-4 h-48 resize-none"
              />
            </div>

            {/* Delete Button */}
            <div className="flex justify-center mb-[40px]">
              <button
                type="button"
                onClick={handleDeleteClick}
                className="flex items-center text-[#FF0000] text-[16px] font-[400]"
              >
                <Trash2 size={20} className="mr-2" color="#FF0000" />
                <span>記録を削除</span>
              </button>
            </div>
          </div>

          {/* Update Button */}
          <button
            type="button"
            onClick={handleUpdate}
            className="w-full bg-[#B900B3] text-white py-[14px] flex items-center justify-center text-[16px] font-[700] relative"
          >
            <span>更新する</span>
            <ChevronRight size={24} className="absolute right-6" />
          </button>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
}