import React from "react";
import { X } from "lucide-react"; // Already correct

export default function ImageCard({ src, label, onDelete }) {
    console.log(src)
  return (
    <div className="relative w-[110px]">
      <div className="relative w-[110px] h-[110px] rounded-[6px] overflow-hidden border border-[#E6E6E6]">
        <img
          src={src}
          alt={label}
          className="w-full h-full object-cover"
        />

        {/* Delete Button */}
        {onDelete && (
          <button
            type="button"
            onClick={onDelete}
            className="absolute top-1 right-1 w-6 h-6 bg-white border border-gray-200 rounded-full shadow flex items-center justify-center hover:bg-gray-100"
          >
            <X size={16} className="text-gray-700" />
          </button>
        )}
      </div>

      {/* Label under image */}
      <p className="text-center mt-2 text-sm font-medium text-[#2C3237] truncate w-full">
        {label}
      </p>
    </div>
  );
}
