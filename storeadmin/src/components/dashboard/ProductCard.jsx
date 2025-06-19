import React from "react";
import { Edit, Trash2 } from "lucide-react";

const ProductCard = ({ product, onEdit, onDelete }) => {
  return (
    <div className="w-[351px] h-[452px]  ">
      <div className="relative h-[197px] ">
        <div className="relative">
          <div className="flex  items-center absolute top-[12px] left-2 right-2 flex gap-[10px]">
            <button
              onClick={onEdit}
              className="text-[#006BA6] hover:text-[#005a8c]"
            >
              <img src="/svg/dashboard/edit.svg" alt="" className="w-[20px] " />
            </button>
            <button
              onClick={onDelete}
              className="text-red-500 hover:text-red-700"
            >
              <img src="/svg/dashboard/reddelete.svg" alt="" className="w-[20px]" />
            </button>
          </div>
        </div>

        {product?.image && (
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-full object-cover rounded-[5px]"
          />
        )}
      </div>
      <div className="p-[20px] flex flex-col gap-[15px]">
        <h3 className="font-bold text-[20px]">{product.title}</h3>
        <span className="font-bold">¥{product.originalPrice}</span>
        <p className="text-[16px] text-[#2C3237] ">{product.description} </p>
      </div>
    </div>
  );
};

export default ProductCard;
