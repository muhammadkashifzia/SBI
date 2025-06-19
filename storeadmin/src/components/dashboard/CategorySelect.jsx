import React from "react";
import { Label } from "@/components/ui/label";

const categories = ["商品", "飲み物", "セット", "その他"];

export default function CategorySelect({ value, onChange }) {
  return (
    <div className="mb-4">
      <Label className="block mb-2 text-[16px] text-[#2C3237]">カテゴリを選択</Label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full max-w-[429px] border border-[#E6E6E6] h-[48px] rounded-[4px] px-4"
      >
        <option value="">選択してください</option>
        {categories.map((cat, i) => (
          <option key={i} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
}