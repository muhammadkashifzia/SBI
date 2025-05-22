'use client';

import { useRef, useEffect } from 'react';
import { Pencil, Trash2, Plus } from 'lucide-react';
import Image from 'next/image';

export function CardMenu({ isOpen, onClose, onAdd, onEdit, onDelete }) {
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
      className="absolute top-0 right-0 mt-5 mr-2 bg-white rounded-lg shadow-lg border-2 border-black z-50 w-[130px]"
    >
      <div className="py-1">
        <button
          onClick={onAdd}
          className="w-full px-7 py-2 flex items-center text-[15px] font-[500] text-black hover:bg-gray-50 cursor-pointer"
        >
          {/* <Plus size={18} className="mr-2" /> */}
          <Image
            src="/assets/svg/music.svg"
            alt="plus"
            width={18}
            height={18}
            className="mr-2"
          />
          <span>追加</span>
        </button>
        <div className="flex justify-center">
          <div className="bg-black w-[98px] h-[1px]"></div>
        </div>
        <button
          onClick={onEdit}
          className="w-full  px-7 py-2 flex items-center text-[15px] font-[500] text-black hover:bg-gray-50 cursor-pointer"
        >
          {/* <Pencil size={18} className="mr-2" /> */}
          <Image
            src="/assets/svg/edit.svg"
            alt="edit"
            width={18}
            height={18}
            className="mr-2"
          />
          <span>編集</span>
        </button>
        <div className="flex justify-center">
          <div className="bg-black w-[98px] h-[1px]"></div>
        </div>
        <button
          onClick={onDelete}
          className="w-full  px-7 py-2 flex items-center text-[15px] font-[500] hover:bg-gray-50 text-red-500 cursor-pointer"
        >
          <Trash2 size={18} className="mr-2" />
          <span>削除</span>
        </button>
      </div>
    </div>
  );
}
