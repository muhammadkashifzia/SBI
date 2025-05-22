'use client';

import { useRef, useEffect } from 'react';
import { Pencil, Trash2, Plus } from 'lucide-react';
import Image from 'next/image';

export function ReviewMenu({ isOpen, onClose, onAdd, onEdit, onDelete }) {
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      className="absolute top-0 right-0 mt-8 mr-2 bg-white rounded-lg shadow-lg border-2 border-black z-50 w-[130px]"
    >
      <div className="py-1">
        <button
          onClick={onEdit}
          className="w-full  px-4 py-3 flex items-center hover:bg-gray-50 border-b border-[#1E1C1C]"
        >
          <Image
            src="/assets/svg/edit.svg"
            alt="edit"
            width={18}
            height={18}
            className="mr-2"
          />
          <span>編集</span>
        </button>
        <button
          onClick={onDelete}
          className="w-full  px-4 py-3 flex items-center hover:bg-gray-50 text-red-500"
        >
          <Trash2 size={18} className="mr-2" />
          <span>削除</span>
        </button>
      </div>
    </div>
  );
}
