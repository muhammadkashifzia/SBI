import React from "react";
import { Label } from "@/components/ui/label";

const categories = ["商品", "飲み物", "セット", "その他"];

export default function CategorySelect({ value, onChange }) {
  return (
   <div className="mb-[10px] relative max-w-[371px] w-full">
  <select
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="appearance-none w-full text-[16px] border border-[#E6E6E6] rounded-[4px] px-[16px] py-[10px] pr-10"
  >
    <option value="">選択してください</option>
    {categories.map((cat, i) => (
      <option key={i} value={cat}>
        {cat}
      </option>
    ))}
  </select>

  {/* Custom arrow */}
  <div className="pointer-events-none absolute right-[16px] top-1/2 -translate-y-1/2 text-gray-400">
    ▼
  </div>
</div>

  );
}
