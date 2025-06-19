import React, { useState } from "react";
import BaseModal from "../shared/BaseModal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import UploadBox from "../dashboard/ImageUpload";

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

  const handleImageUpload = ({ file, category }) => {
    const imageUrl = URL.createObjectURL(file);
    setFormData({ ...formData, image: imageUrl });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <BaseModal onClose={onClose}>
      <div className="p-6">
        <h2 className="text-[20px] font-bold mb-6">
          {product ? "商品を編集" : "新しい商品を追加"}
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label>商品タイトル</Label>
            <Input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="こちらに入力してください"
              required
            />
          </div>

          <div className="mb-4">
            <Label>価格</Label>
            <Input
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              placeholder="こちらに入力してください"
              required
            />
          </div>

          <div className="mb-4">
            <Label>詳細情報</Label>
            <Input
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="こちらに入力してください"
              required
            />
          </div>

          <div className="mb-6">
            <Label>画像アップロード</Label>
            <UploadBox
              onUpload={handleImageUpload}
              uploadedImages={formData.image ? [{ url: formData.image }] : []}
              onDelete={undefined}
            />
          </div>

          <div className="flex justify-end gap-3">
            <Button type="button" variant="outline" onClick={onClose}>
              キャンセル
            </Button>
            <Button type="submit" className="bg-[#006BA6] hover:bg-[#005a8c]">
              保存する
            </Button>
          </div>
        </form>
      </div>
    </BaseModal>
  );
};

export default ProductModal;
