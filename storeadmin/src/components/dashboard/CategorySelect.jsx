import React from "react";
import { Label } from "@/components/ui/label";

const categories = ["商品", "飲み物", "セット", "その他"];

export default function CategorySelect({ value, onChange }) {
  return (
    <div className="mb-[10px]">
      
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full max-w-[371px] border border-[#E6E6E6] h-[48px] rounded-[4px] px-[16px] py-[14px]"
      >
        <option value="">選択してください</option>
        {categories.map((cat, i) => (
          <option key={i} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}
