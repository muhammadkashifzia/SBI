'use client';
import { X, Trash2 } from 'lucide-react';

export function DeleteConfirmationModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#00000099] bg-opacity-30 flex items-center justify-center z-[10001]">
      <div className="bg-white rounded-[10px] w-full max-w-md mx-4 overflow-hidden">
        {/* Header */}
        <div className="relative p-6 text-center">
          <h2 className="text-[16px] font-[700] text-[#1E1C1C]">削除の確認</h2>
          <button
            onClick={onClose}
            className="absolute right-2 top-2 text-[#1E1C1C] "
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-[#DEDEDE] w-full max-w-[313px] mx-auto"></div>

        {/* Content */}
        <div className="p-6 text-center">
          <p className="text-[15px] font-[500] line-height-[24px] text-[#1E1C1C]">
            この記録が削除されます。
            <br />
            本当によろしいですか？
          </p>
        </div>

        {/* Delete Button */}
        <button
          onClick={onConfirm}
          className="w-full bg-[#FF0000] text-white py-4 flex items-center justify-center"
        >
          <Trash2 size={20} className="mr-1" />
          <span className="text-[16px] font-[700]">削除する</span>
        </button>
      </div>
    </div>
  );
}
