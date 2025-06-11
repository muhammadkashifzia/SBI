import React from "react";

const steps = [
  {
    id: 1,
    image: "/assets/images/instructor-image-01.png",
    alt: "NFT",
    title: "Step 1",
    description: "取引所でNFTを購入",
  },
  {
    id: 2,
    image: "/assets/images/instructor-image-02.png",
    alt: "Shopping",
    title: "Step 2",
    description: "前列の商品を選択",
  },
  {
    id: 3,
    image: "/assets/images/instructor-image-03.png",
    alt: "Purchase",
    title: "Step 3",
    description: "対象の商品/サービスを購入",
  },
  {
    id: 4,
    image: "/assets/images/instructor-image-04.png",
    alt: "QR Code",
    title: "Step 4",
    description: "QRコードからウォレット連携",
  },
  {
    id: 5,
    image: "/assets/images/instructor-image-05.png",
    alt: "Verification",
    title: "Step 5",
    description: "認証画面を提示",
  },
  {
    id: 6,
    image: "/assets/images/instructor-image-06.png",
    alt: "Receipt",
    title: "Step 6",
    description: "割引を受ける",
  },
];

const UserGuideSteps = () => {
  return (
    <div>
      <h1 className="text-[24px] md:text-[28px] font-semibold mb-[15px] md:mb-[20px]">
        ユーザー向け使用方法
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[34px]">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex flex-col border border-[#C1C1C1] rounded-[5px]"
          >
            <div className="w-full h-[243px] bg-gray-200 flex justify-center items-center mb-[10px]">
              <img
                src={step.image}
                alt={step.alt}
                className="w-full h-full rounded-t-[5px] object-cover object-top"
              />
            </div>
            <div className="pt-[10px] px-[15px] pb-[15px]">
              <h2 className="font-medium text-[16px] mb-[10px]">
                {step.title}
              </h2>
              <p className="font-normal text-[16px]">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserGuideSteps;
