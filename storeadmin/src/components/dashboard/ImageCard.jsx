import React from "react";

export default function ImageCard({ src, label, index, onDelete }) {
  return (
    <div className="relative w-[228px] h-[181px] border rounded-[4px]">
      <div className="relative w-[228px] h-[134px]  border border-[#E6E6E6]">
        <img src={src} alt={label} className="w-full h-full object-cover rounded-t-[5px] " />

        <div className="absolute  w-[20px]  h-[20px] top-1 left-1 bg-white text-[14px] font-normal text-[#2C3237] px-[6px]  rounded-[4px] ">
          {index}
        </div>

        {onDelete && (
          <button
            type="button"
            onClick={onDelete}
            className="absolute top-1 right-1 w-[20px] h-[20px] flex items-center justify-center"
          >
            <img
              src="/svg/dashboard/delete.svg"
              alt="delete"
              className="w-4 h-4"
            />
          </button>
        )}
      </div>

      <p className="text-start my-[15px] mx-[15px] text-[14px] text-[#2C3237] font-normal  bg-white">
        {label}
      </p>
    </div>
  );
}
