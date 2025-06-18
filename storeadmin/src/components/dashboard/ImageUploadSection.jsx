import React, { useState } from "react";

const ImageUploadSection = () => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);

  const handleImageChange = (e, setImage) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="grid grid-cols-2 gap-[10px] mb-[29px]">
      {[image1, image2].map((image, index) => (
        <label
          key={index}
          className="relative cursor-pointer  overflow-hidden w-full h-[282px]"
        >
          <input
            type="file"   
              className="hidden"

            onChange={(e) => 
              index === 0
                ? handleImageChange(e, setImage1)
                : handleImageChange(e, setImage2)
            }
          />
          <div
            className={`w-full h-full flex flex-col items-center justify-center transition-all ${
              image ? "" : "bg-[#006BA6] text-white"
            }`}
            style={{
              backgroundImage: image ? `url(${image})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {!image && (
              <>
                <img
                  src="/svg/shared/imageupload.svg"
                  alt=""
                  className="w-[6 0px] pb-[10px]"
                />
                <span className="text-[#000000] text-center bg-white font-normal px-[20px] py-[5px] rounded-[50px] max-w-[232px] text-[16px] max-h-[33px]">
                  クリックしてアップロード
                </span>
              </>
            )}
          </div>
        </label>
      ))}
    </div>
  );
};

export default ImageUploadSection;
