import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CategorySelect from "./CategorySelect";
import ImageCard from "./ImageCard";
import DeleteConfirmModal from "../../components/shared/DeleteConfirmModal";

export default function UploadBox({ onUpload, uploadedImages, onDelete }) {
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("");
  const [deleteIndex, setDeleteIndex] = useState(null); // NEW STATE

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

  const confirmDelete = (index) => {
    setDeleteIndex(index);
  };

  const handleConfirmDelete = () => {
    if (deleteIndex !== null) {
      onDelete(deleteIndex);
      setDeleteIndex(null);
    }
  };

  return (
    <>
      <div className="p-[20px]">
        <div className="p-[20px] w-full">
          <div className="border border-dashed border-[#D4D4D4] rounded-[12px] w-full max-w-[604px] mx-auto py-[14px]">
            <div className="mx-auto w-full rounded-[4px] flex flex-col items-center justify-center mb-[10px] cursor-pointer text-[17px] text-[#2C3237] font-bold leading-[27px]">
              <img
                src="/svg/dashboard/gallary.svg"
                alt="Upload Icon"
                className="w-[48px] h-[48px]"
              />
              <div className="text-[#006BA6] pt-[18px]">
                クリックしてアップロード
              </div>
              <div className="">ドラッグ＆ドロップ JPG, JPEG, PNGファイル</div>
            </div>
            <div className="max-w-[371px] mx-auto">
              {file && (
                <div className="relative w-[150px] h-[84px] my-[15px] rounded-[5px] gap-[10px]">
                  <img
                    src={URL.createObjectURL(file)}
                    alt="preview"
                    className="object-cover w-full h-full max-w-[150px] max-h-[84px] mx-[20px]"
                  />
                  <div className="absolute top-1 right-[-120px]">
                    {file.name}
                  </div>
                  <div className="absolute top-17 right-[-120px]">
                    <img
                      src="/svg/dashboard/delete.svg"
                      onClick={() => setFile(null)}
                      alt="delete"
                      className="w-4 h-4"
                    />
                  </div>
                </div>
              )}

              <div className="mb-[8px]">
                <label
                  htmlFor="fileUpload"
                  className="text-[#2C3237] text-[16px] cursor-pointer inline-block font-normal"
                >
                  写真属性を選択
                </label>

                <Input
                  id="fileUpload"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden !h-[48px] px-[16px] py-[14px]"
                />
              </div>

              <CategorySelect value={category} onChange={setCategory} />

              <div className="w-full flex justify-center mt-[10px]">
                <Button
                  onClick={handleUpload}
                  className="w-[150px] bg-[#006BA6] hover:bg-[#006BA6] text-white font-bold rounded"
                >
                  アップロード
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-[30px] mt-[32px]">
          {uploadedImages.map((img, index) => (
            <ImageCard
              key={index}
              index={index + 1}
              src={img.url}
              label={img.category}
              onDelete={() => confirmDelete(index)}
            />
          ))}
        </div>
        {deleteIndex !== null && (
          <DeleteConfirmModal
            onClose={() => setDeleteIndex(null)}
            onConfirm={handleConfirmDelete}
          />
        )}{" "}
      </div>

      <div className="flex justify-start  my-[30px]">
        <Button
          type="button"
          onClick={() => console.log(schedule)}
          className="bg-[#006BA6] hover:bg-[#005a8c] text-white px-6 py-2 rounded w-[150px] !h-[50px]"
        >
          保存
        </Button>
      </div>
    </>
  );
}
