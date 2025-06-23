import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CategorySelect from "./CategorySelect";
import ImageCard from "./ImageCard";
import DeleteConfirmModal from "../../components/shared/DeleteConfirmModal";

export default function UploadBox({ onUpload, uploadedImages, onDelete }) {
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("");
  const [deleteIndex, setDeleteIndex] = useState(null);

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
      <div className="lg:p-[20px] p-[10px] lg:pt-[32px] bg-white">
        <div className="lg:p-[20px] p-[10px] w-full">
          <div className="border border-dashed border-[#D4D4D4] rounded-[12px] w-full max-w-[604px] mx-auto py-[14px]  px-[10px]">
            <label
              htmlFor="fileUpload"
              className="cursor-pointer flex flex-col items-center justify-center text-center text-[#2C3237] lg:font-bold lg:text-[17px] text-[14px] font-medium  leading-[20px] lg:leading-[27px]"
            >
              <img
                src="/svg/dashboard/gallary.svg"
                alt="Upload Icon"
                className="w-[48px] h-[48px]"
              />
              <div className="text-[#006BA6] pt-[18px]">クリックしてアップロード</div>
              <div>ドラッグ＆ドロップ JPG, JPEG, PNGファイル</div>
            </label>

            <Input
              id="fileUpload"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />

            <div className="max-w-[371px] mx-auto w-full mt-[10px] ">
              {file && (
                <div className="relative flex flex-col sm:flex-row items-center gap-[8px] my-[15px]">
                  <img
                    src={URL.createObjectURL(file)}
                    alt="preview"
                    className="object-cover w-[150px] h-[84px] rounded-[5px]"
                  />
                  <div className="text-[14px] text-[#2C3237] font-medium">
                    {file.name}
                  </div>
                  <button
                    onClick={() => setFile(null)}
                    className="absolute top-0 right-0 sm:static sm:ml-auto"
                  >
                    <img
                      src="/svg/dashboard/delete.svg"
                      alt="delete"
                      className="w-4 h-4"
                    />
                  </button>
                </div>
              )}

              <div className="mb-[8px] ">
                <label className="text-[#2C3237] lg:text-[16px] text-[12px] font-normal block">
                  写真属性を選択
                </label>
                <CategorySelect value={category} onChange={setCategory} />
              </div>

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

        {/* Uploaded Images */}
        <div className="flex flex-wrap gap-[30px] lg:mt-[32px]">
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

        {/* Delete Confirmation Modal */}
        {deleteIndex !== null && (
          <DeleteConfirmModal
            onClose={() => setDeleteIndex(null)}
            onConfirm={handleConfirmDelete}
          />
        )}
      </div>

      {/* Save Button */}
      <div className="flex justify-start my-[30px] ">
        <Button
          type="button"
          onClick={() => console.log("Saving...")}
          className="bg-[#006BA6] hover:bg-[#005a8c] text-white px-6 py-2 rounded w-[150px] h-[50px] font-bold"
        >
          保存
        </Button>
      </div>
    </>
  );
}
