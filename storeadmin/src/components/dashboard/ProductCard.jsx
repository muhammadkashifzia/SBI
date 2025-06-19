import React from 'react';
import { Edit, Trash2 } from 'lucide-react'; 

const ProductCard = ({ product, onEdit, onDelete }) => {
  return (
    <div className="w-[250px] border border-[#E6E6E6] rounded-md overflow-hidden">
      <div className="relative h-[160px] bg-gray-100">
        {product?.image && (
          <img 
            src={product?.image } 
            alt={product?.title } 
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-[16px] mb-1">{product.title }</h3>
        <p className="text-[14px] text-[#666] mb-2">{product.description } </p>
        <div className="flex justify-between items-center">
          <span className="font-bold">¥{product.price }</span>
          <div className="flex gap-2">
            <button onClick={onEdit} className="text-[#006BA6] hover:text-[#005a8c]">
              <Edit size={18} />
            </button>
            <button onClick={onDelete} className="text-red-500 hover:text-red-700">
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;