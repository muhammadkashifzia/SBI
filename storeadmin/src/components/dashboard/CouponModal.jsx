import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import BaseModal from "../../components/shared/BaseModal";
import { Label } from "@/components/ui/label";

const MAX_CHAR = 170;

const CouponModal = ({ coupon, onClose, onSave, isProfileComplete }) => {
  const fields = [
    { id: "title", label: "クーポンタイトル" },
    { id: "conditions", label: "ご利用条件" },
    { id: "note", label: "備考" },
  ];

  const [formData, setFormData] = useState({
    title: coupon?.title || "",
    conditions: coupon?.conditions || "",
    note: coupon?.note || "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (value.length <= MAX_CHAR) {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...coupon, ...formData });
  };

  return (
    <BaseModal onClose={onClose} className="max-w-[800px]">
      <h2 className="text-xl font-bold mb-[24px]">
        {coupon ? "クーポンを編集" : "新しいクーポンを追加"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-[30px]">
        {fields.map((field) => (
          <div key={field.id} className="space-y-[8px]">
            <Label
              htmlFor={field.id}
              className="text-[16px] font-normal text-[#2C3237]"
            >
              {field.label}
            </Label>
            <textarea
              id={field.id}
              value={formData[field.id]}
              onChange={handleChange}
              placeholder="こちらに入力してください"
              rows={4}
              className="w-full border text-[#2C3237] h-[73px] border-[#E6E6E6] rounded-md px-[16px] py-[10px] text-[16px]"
            />
            <p className="text-left text-sm text-gray-500">
              {formData[field.id].length}/{MAX_CHAR}
            </p>
          </div>
        ))}

        <div className="flex justify-center">
          <Button
            type="submit"
            className="bg-[#006BA6] rounded-[4px] w-[300px] h-[36px] text-white cursor-pointer"
            disabled={!isProfileComplete}
          >
            保存
          </Button>
        </div>
      </form>
    </BaseModal>
  );
};

export default CouponModal;
