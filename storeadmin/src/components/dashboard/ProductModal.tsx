import React, { useState } from "react";
import BaseModal from "../shared/BaseModal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const ProductModal = ({ product, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: product?.title || "",
    price: product?.price || "",
    description: product?.description || "",
    image: product?.image || null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputFields = [
    { label: "商品タイトル", name: "title", type: "text" },
    { label: "価格", name: "price", type: "number" },
    { label: "詳細情報", name: "description", type: "text" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <BaseModal onClose={onClose}>
      <div className="p-6">
        <h2 className="text-[16px] font-medium mb-[24px]">
          {product ? "商品を編集" : "新しい商品を追加"}
        </h2>

        {/* Upload Area */}
        <div className="mb-6 mx-auto w-full flex justify-center">
          <div className="border border-dashed border-[#D4D4D4] max-w-[238px] w-full px-[34px] py-[14px] rounded-[4px] flex flex-col items-center justify-center cursor-pointer text-center">
            <img
              src="/svg/dashboard/gallary.svg"
              alt="Upload Icon"
              className="w-[48px] h-[48px]"
            />
            <div className="text-[#006BA6] pt-[18px] text-[16px] font-bold leading-[27px]">
              クリックしてアップロード
            </div>
            <div className="text-[13px] text-[#2C3237]">
              ドラッグ＆ドロップ JPG, JPEG, PNGファイル
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {inputFields.map((field, idx) => (
            <div className="mb-4" key={idx}>
              <Label className="text-[16px] font-normal mb-[8px] text-[#2C3237] block">
                {field.label}
              </Label>
              <Input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder="こちらに入力してください"
                required
                className="w-full h-[48px] px-[14px] py-[16px] border border-[#E6E6E6] rounded-[4px] pr-12 focus-visible:outline-none focus-visible:ring-0"
              />
            </div>
          ))}
          <div className="flex justify-center  pt-[4px] rounded-[4px]">
            <Button
              type="submit"
              className="bg-[#006BA6] w-[400px] h-[36px] text-white font-bold hover:bg-[#005a8c] rounded-[4px]"
            >
              保存する
            </Button>
          </div>
        </form>
      </div>
    </BaseModal>
  );
};

export default ProductModal;
