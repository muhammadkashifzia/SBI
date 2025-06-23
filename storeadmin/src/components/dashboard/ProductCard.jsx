import React, { useState } from "react";
import DeleteConfirmModal from "../../components/shared/DeleteConfirmModal";

const ProductCard = ({ product, onEdit, onDelete }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleConfirmDelete = () => {
    onDelete();
    setShowDeleteModal(false);
  };

  return (
    <div className="w-full sm:w-[48%] lg:w-[351px] h-auto border rounded-[5px] overflow-hidden shadow-sm">
      <div className="relative h-[197px]">
        <div className="flex items-center absolute top-[12px] left-2 gap-[10px] z-10">
          <button onClick={onEdit}>
            <img src="/svg/dashboard/edit.svg" alt="Edit" className="w-[20px] cursor-pointer" />
          </button>
          <button onClick={() => setShowDeleteModal(true)}>
            <img src="/svg/dashboard/reddelete.svg" alt="Delete" className="w-[20px] cursor-pointer" />
          </button>
        </div>

        {product?.image && (
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="p-[16px] flex flex-col gap-[10px] bg-[#F3F3F3]">
        <h3 className="font-bold text-[18px] sm:text-[20px]">{product.title}</h3>
        <span className="font-bold text-[14px] sm:text-[15px]">{product.originalPrice}</span>
        <p className="text-[14px] sm:text-[16px] text-[#2C3237]">{product.description}</p>
      </div>

      {showDeleteModal && (
        <DeleteConfirmModal
          onClose={() => setShowDeleteModal(false)}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
  );
};

export default ProductCard;
