import React from 'react';
import Image from 'next/image';
export default function About() {
  return (
    <div className="container mx-auto">
      <div className="p-8">
        {/* Title */}
        <h1 className="text-3xl font-semibold mb-6">ユーザー向け使用方法</h1>

        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[34px]">
          {/* Step 1 */}
          <div className="flex flex-col border border-[#C1C1C1] rounded-[5px]">
            <div className="w-full h-48 bg-gray-200 flex justify-center items-center mb-[10px]">
              <img
                src="/assets/images/instructor-image-01.png"
                alt="NFT"
                className="w-full h-full rounded-t-[5px] object-cover object-top"
              />
            </div>
            <div className="pt-[10px] px-[15px] pb-[15px]">
              <h2 className="font-medium text-[16px] mb-[10px]">Step 1</h2>
              <p className="font-normal text-[16px]">取引所でNFTを購入</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col border border-[#C1C1C1] rounded-[5px]">
            <div className="w-full h-48 bg-gray-200 flex justify-center items-center mb-[10px]">
              <img
                src="/assets/images/instructor-image-02.png"
                alt="Shopping"
                className="w-full h-full rounded-t-[5px] object-cover object-top"
              />
            </div>
            <div className="pt-[10px] px-[15px] pb-[15px]">
              <h2 className="font-medium text-[16px] mb-[10px]">Step 2</h2>
              <p className="font-normal text-[16px]">前列の商品を選択</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col border border-[#C1C1C1] rounded-[5px]">
            <div className="w-full h-48 bg-gray-200 flex justify-center items-center mb-[10px] rounded-t-[5px]">
              <img
                src="/assets/images/instructor-image-03.png"
                alt="Purchase"
                className="w-full h-full rounded-t-[5px] object-cover object-top"
              />
            </div>

            <div className="pt-[10px] px-[15px] pb-[15px]">
              <h2 className="font-medium text-[16px] mb-[10px]">Step 3</h2>
              <p className="font-normal text-[16px]">
                対象の商品/サービスを購入
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col border border-[#C1C1C1] rounded-[5px]">
            <div className="w-full h-48 bg-gray-200 flex justify-center items-center mb-[10px]">
              <img
                src="/assets/images/instructor-image-04.png"
                alt="QR Code"
                className="w-full h-full rounded-t-[5px] object-cover object-top"
              />
            </div>

            <div className="pt-[10px] px-[15px] pb-[15px]">
              <h2 className="font-medium text-[16px] mb-[10px]">Step 4</h2>
              <p className="font-normal text-[16px]">
                QRコードからウォレット連携
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col border border-[#C1C1C1] rounded-[5px]">
            <div className="w-full h-48 bg-gray-200 flex justify-center items-center mb-[10px]">
              <img
                src="/assets/images/instructor-image-05.png"
                alt="Verification"
                className="w-full h-full rounded-t-[5px] object-cover object-top"
              />
            </div>

            <div className="pt-[10px] px-[15px] pb-[15px]">
              <h2 className="font-medium text-[16px] mb-[10px]">Step 5</h2>
              <p className="font-normal text-[16px]">認証画面を提示</p>
            </div>
          </div>

          {/* Step 6 */}
          <div className="flex flex-col border border-[#C1C1C1] rounded-[5px]">
            <div className="w-full h-48 bg-gray-200 flex justify-center items-center mb-[10px]">
              <img
                src="/assets/images/instructor-image-06.png"
                alt="Receipt"
                className="w-full h-full rounded-t-[5px] object-cover object-top"
              />
            </div>
            <div className="pt-[10px] px-[15px] pb-[15px]">
              <h2 className="font-medium text-[16px] mb-[10px]">Step 6</h2>
              <p className="font-normal text-[16px]">割引を受ける</p>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen px-[16px]">
        <div className="overflow-hidden">
          <div className="flex items-center space-x-6 md:flex-row flex-col-reverse mb-[30px]">
            {/* Text Section */}
            <div className="flex-1 space-y-4  mt-[20px] md:mt-0">
            <div className='flex gap-[30px]'>
               <div>
               <span className='w-[80px] h-[80px] bg-[#9F8C5B] flex rounded-full text-white justify-center items-center font-bold text-[18px]'> Step 1</span>
             </div>
              <div>
                <h2 className="text-[24px] leading-[32px] font-bold text-[#2C3237] mb-[20px]">
                対象のトークン/NFTを保有
              </h2>
              <p className="text-[#2C3237] text-[16px] leading-[22px] font-normal">
                対象のトークン/NFTを保有することで様々な特典を受け取ることができます。
                <br />
                ・トークン/NFTコレクションを集め購入リンク
                <br />
                ・コントラクトアドレス＆購入リンク
                <br />
                ・必要条件
              </p>
              </div>
            </div>
            </div>
            <div className="flex-1  max-w-[100%] md:max-w-[599.2px]">
              <img
                src="/assets/images/instructor-image-01.png" // You can update this to a relevant image or keep as placeholder
                alt="NFT"
                className="w-full max-w-[100%] md:max-w-[599.2px] h-full object-cover rounded-lg"
              />
            </div>
          </div>
          <div>
            <h2 className="font-bold text-[20px] mb-[20px] ">
              対象のトークン/NFT
            </h2>
            <div className="flex space-x-[20px] flex-wrap gap-y-[20px]">
              <button className="btn text-white bg-[#006BA6] w-full max-w-[220px] h-[52px] p-[16px] rounded-[4px] flex justify-center items-center text-[16px] font-bold">
                Link A
              </button>
              <button className="btn text-white bg-[#006BA6] w-full max-w-[220px] h-[52px] p-[16px] rounded-[4px] flex justify-center items-center text-[16px] font-bold">
                Link B
              </button>
              <button className="btn text-white bg-[#006BA6] w-full max-w-[220px] h-[52px] p-[16px] rounded-[4px] flex justify-center items-center text-[16px] font-bold">
                Link C
              </button>
              <button className="btn text-white bg-[#006BA6] w-full max-w-[220px] h-[52px] p-[16px] rounded-[4px] flex justify-center items-center text-[16px] font-bold">
                Link D
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
