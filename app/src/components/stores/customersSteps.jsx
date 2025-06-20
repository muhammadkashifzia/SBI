export default function CustomerStepsComponent() {
  return (
   <div>
  <div className="mt-[78px] md:mt-[67px]">
        <h1 className="text-[24px] md:text-[28px] font-bold mb-[20px] md:mb-[31px] text-center">
          ３ステップで集客開始
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-[30px] gap-y-[20px] md:gap-y-[34px]">
          <div className="flex flex-col border border-[#C1C1C1] rounded-[5px]">
            <div className="w-full h-[243px] bg-gray-200 flex justify-center items-center mb-[10px]">
              <img
                src="/assets/images/customer-image01.png"
                alt="NFT"
                className="w-full h-full rounded-t-[5px] object-cover object-top"
              />
            </div>
            <div className="px-[15px] pb-[15px]">
              <h2 className="font-medium text-[16px] mb-[10px]">Step 1</h2>
              <p className="font-normal text-[16px]">無料店舗登録</p>
            </div>
          </div>
          <div className="flex flex-col border border-[#C1C1C1] rounded-[5px]">
            <div className="w-full h-[243px] bg-gray-200 flex justify-center items-center mb-[10px]">
              <img
                src="/assets/images/customer-image02.png"
                alt="Shopping"
                className="w-full h-full rounded-t-[5px] object-cover object-top"
              />
            </div>
            <div className="px-[15px] pb-[15px]">
              <h2 className="font-medium text-[16px] mb-[10px]">Step 2</h2>
              <p className="font-normal text-[16px]">QRコードを印刷・設置 </p>
            </div>
          </div>
          <div className="flex flex-col border border-[#C1C1C1] rounded-[5px]">
            <div className="w-full h-[243px] bg-gray-200 flex justify-center items-center mb-[10px] rounded-t-[5px]">
              <img
                src="/assets/images/customer-image03.png"
                alt="Purchase"
                className="w-full h-full rounded-t-[5px] object-cover object-top"
              />
            </div>

            <div className="px-[15px] pb-[15px]">
              <h2 className="font-medium text-[16px] mb-[10px]">Step 3</h2>
              <p className="font-normal text-[16px]">
                送客されたユーザーに割引の提供
              </p>
            </div>
          </div>
        </div>
      </div>
   </div>
  );
}
