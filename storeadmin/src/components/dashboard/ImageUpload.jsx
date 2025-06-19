import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import CategorySelect from "./CategorySelect";
import ImageCard from "./ImageCard";

export default function UploadBox({ onUpload, uploadedImages, onDelete }) {
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (file && category) {
      onUpload({ file, category });
      setFile(null);
      setCategory("");
    }
  };

  return (
    <>
      <div className="border border-[#E6E6E6] rounded-md p-4 w-full max-w-[500px] mx-auto text-center">
        <div className="text-[#666] mb-4">
          <div className="text-[14px]">クリックしてアップロード</div>
          <div className="text-[12px]">
            ドラッグ＆ドロップ JPG, JPEG, PNGファイル
          </div>
        </div>

        {file && (
          <div className="relative w-[120px] h-[80px] mx-auto mb-2">
            <img
              src={URL.createObjectURL(file)}
              alt="preview"
              className="object-cover rounded-md w-full h-full"
            />
            <button
              onClick={() => setFile(null)}
              className="absolute top-[-10px] right-[-10px] text-red-500 bg-white rounded-full w-6 h-6 flex items-center justify-center shadow"
            >
              ✖
            </button>
          </div>
        )}

        <Input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mb-3"
        />

        <CategorySelect value={category} onChange={setCategory} />

        <Button
          onClick={handleUpload}
          className="mt-4 w-[150px] bg-[#006BA6] hover:bg-[#006BA6] text-white font-bold rounded"
        >
          アップロード
        </Button>
      </div>{" "}
      <div className="flex flex-wrap gap-4 mt-8">
        {uploadedImages.map((img, index) => (
          <ImageCard
            key={index}
            src={img.url}
            label={img.category}
            onDelete={() => onDelete(index)} // <-- IMPORTANT
          />
        ))}
      </div>
    </>
  );
}
