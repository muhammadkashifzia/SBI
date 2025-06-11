import React from 'react';
import Image from 'next/image';
import UseInStoresComponent from "@/components/stores/instructionStores"
import CustomerStepsComponent from "@/components/stores/customersSteps"
import RegisterBannerComponent from "@/components/stores/registerBanner"
export default function About() {
  return (
    <div className="container mx-auto px-[16px] mb-[43px] md:mb-[85px] mt-[19.5px]">
    <UseInStoresComponent />
    <CustomerStepsComponent />
      <div className="mt-[20px] md:mt-[100px] ">
        <div className="flex md:space-x-6 md:flex-row flex-col-reverse  md:pb-[50px] mb-[20px]">
          <div className="flex-1 space-y-0 md:space-y-4  mt-[20px] md:mt-0 m-x-0">
            <div className="flex gap-[30px]">
              <div>
                <span className="w-[80px] h-[80px] bg-[#9F8C5B] flex rounded-full text-white justify-center items-center font-bold text-[18px]">
                  Step 1
                </span>
              </div>
              <div>
                <h2 className="text-[20px] md:text-[24px] leading-[32px] font-bold text-[#2C3237] mb-[20px]">
                  無料店舗登録
                </h2>
                <p className="text-[#2C3237] text-[16px] leading-[22px] font-normal">
                  無料で店舗登録が行えます
                  <br />
                  店舗の魅力を伝えて集客を行いましょう。
                  <br />
                  クーポンの登録が必要となります。
                  <br />
                  使用条件とクーポン内容はご自由に設定いただけます。
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full md:max-w-[599.2px]">
            <img
              src="/assets/images/customer-image01.png"
              alt="NFT"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="flex md:space-x-6 md:flex-row flex-col-reverse md:pt-[50px]">
          <div className="flex-1 space-y-0 md:space-y-4  mt-[20px] md:mt-0 m-x-0">
            <div className="flex gap-[30px]">
              <div>
                <span className="w-[80px] h-[80px] bg-[#9F8C5B] flex rounded-full text-white justify-center items-center font-bold text-[18px]">
                  Step 2
                </span>
              </div>
              <div>
                <h2 className="text-[20px] md:text-[24px] leading-[32px] font-bold text-[#2C3237] mb-[20px]">
                  QRコードを印刷・設置
                </h2>
                <p className="text-[#2C3237] text-[16px] leading-[22px] font-normal">
                  店舗登録が完了したらQRコードが印刷可能になります。
                  <br />
                  表面にユーザーが読込むQRコード、
                  <br />
                  裏面には設定したクーポン内容・オペレーション方法が記載されております。
                  <br />
                  名刺サイズ(約6×9cm)のポップスタンド(縦)に印刷物を入れ、
                  <br />
                  レジ横などにポップスタンドを設置してください
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full md:max-w-[599.2px]">
            <img
              src="/assets/images/customer-image02.png"
              alt="NFT"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="py-[20px] md:py-[100px]">
          <p>
            弊社で印刷を行い、ポップスタンド付きで送付させて頂く事も可能です。(有料)
          </p>
          <p>
            「綺麗に印刷したい」「ポップスタンドの用意が面倒」などございましたら、こちらのリンクより注意事項をお読みの上お申込みください。
          </p>
        </div>
        <div className="flex md:space-x-6 md:flex-row flex-col-reverse my-0 md:my-[100px]">
          <div className="flex-1 space-y-0 md:space-y-4  mt-[20px] md:mt-0 m-x-0">
            <div className="flex gap-[30px]">
              <div>
                <span className="w-[80px] h-[80px] bg-[#9F8C5B] flex rounded-full text-white justify-center items-center font-bold text-[18px]">
                  Step 3
                </span>
              </div>
              <div>
                <h2 className="text-[20px] md:text-[24px] leading-[32px] font-bold text-[#2C3237] mb-[20px]">
                  送客されたユーザーに割引の提供
                </h2>
                <p className="text-[#2C3237] text-[16px] leading-[22px] font-normal">
                  Web3割を閲覧し来店されたユーザーはQRコードを読込み、店舗スタッフに認証画面を提示します。
                  <br />
                  認証成功画面が表示されていたら、全店舗共通の条件は満たしている事になります。vvvvvvvvvvvvvv
                  <br />
                  御社で設定した使用条件も満たしていた場合、送客されたユーザーへ設定した割引を提供してください。
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full md:max-w-[599.2px]">
            <img
              src="/assets/images/customer-image03.png"
              alt="NFT"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

       <div className="relative w-full  overflow-hidden py-[97px] rounded-[5px] mt-[40px] md:mt-0">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/register-store-banner02.jpg" // replace with your image path
          alt="Coffee Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#00519ec7] bg-opacity-50" />
      </div>

      {/* Content */}
     <RegisterBannerComponent />
    </div>
      <div className="mt-[40px] md:mt-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[20px] md:gap-y-[34px]">
          <div className="flex flex-col border border-[#C1C1C1] rounded-[5px]">
            <div className="w-full h-[248px] bg-gray-200 flex justify-center items-center mb-[10px]">
              <img
                src="/assets/images/check-image01.jpg"
                alt="NFT"
                className="w-full h-full rounded-t-[5px] object-cover object-center"
              />
            </div>
            <div className="pt-[10px] px-[15px] pb-[15px]">
              <h2 className="font-medium text-[16px] mb-[10px]">Check 1</h2>
              <p className="font-normal text-[16px]">認証マーク</p>
            </div>
          </div>
          <div className="flex flex-col border border-[#C1C1C1] rounded-[5px]">
            <div className="w-full h-[248px] bg-gray-200 flex justify-center items-center mb-[10px]">
              <img
                src="/assets/images/check-image01.jpg"
                alt="Shopping"
                className="w-full h-full rounded-t-[5px] object-cover object-center"
              />
            </div>
            <div className="pt-[10px] px-[15px] pb-[15px]">
              <h2 className="font-medium text-[16px] mb-[10px]">Check 2</h2>
              <p className="font-normal text-[16px]">店舗情報の編集 </p>
            </div>
          </div>
          <div className="flex flex-col border border-[#C1C1C1] rounded-[5px]">
            <div className="w-full h-[248px] bg-gray-200 flex justify-center items-center mb-[10px] rounded-t-[5px]">
              <img
                src="/assets/images/check-image.jpg"
                alt="Purchase"
                className="w-full h-full rounded-t-[5px] object-cover object-top"
              />
            </div>

            <div className="pt-[10px] px-[15px] pb-[15px]">
              <h2 className="font-medium text-[16px] mb-[10px]">Check 3</h2>
              <p className="font-normal text-[16px]">掲載の停止</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[40px] md:mt-[100px]">
        <div className="flex md:space-x-6 md:flex-row flex-col-reverse  md:pb-[50px]">
          <div className="flex-1 space-y-0 md:space-y-4  mt-[20px] md:mt-0 m-x-0">
            <div className="flex gap-[30px]">
              <div>
                <span className="w-[80px] h-[80px] bg-[#9F8C5B] flex rounded-full text-white flex-col justify-center items-center font-bold text-[18px]">
                  CHECK <span>1</span>
                </span>
              </div>
              <div>
                <h2 className="text-[20px] md:text-[24px] leading-[32px] font-bold text-[#2C3237] mb-[20px]">
                  無料店舗登録
                </h2>
                <p className="text-[#2C3237] text-[16px] leading-[22px] font-normal">
                  すぐに掲載が開始されます
                  <br />
                  その後、実在する店舗からの登録であるかを確認させて頂き、
                  <br />
                  確認が取れた店舗につきましては〇の認証マークを付与させて頂きます。
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full md:max-w-[599.2px]">
            <img
              src="/assets/images/check-image01.jpg"
              alt="NFT"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="flex md:space-x-6 md:flex-row flex-col-reverse md:py-[50px] mt-[20px] md:mt-0">
          <div className="flex-1 space-y-0 md:space-y-4  mt-[20px] md:mt-0 m-x-0">
            <div className="flex gap-[30px]">
              <div>
                <span className="flex-col w-[80px] h-[80px] bg-[#9F8C5B] flex rounded-full text-white justify-center items-center font-bold text-[18px]">
                  Check <span>2</span>
                </span>
              </div>
              <div>
                <h2 className="text-[20px] md:text-[24px] leading-[32px] font-bold text-[#2C3237] mb-[20px]">
                  店舗情報の編集
                </h2>
                <p className="text-[#2C3237] text-[16px] leading-[22px] font-normal">
                  ログインを行うと登録済みの店舗情報の編集を行う事が可能です
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full md:max-w-[599.2px]">
            <img
              src="/assets/images/check-image01.jpg"
              alt="NFT"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="flex md:space-x-6 md:flex-row flex-col-reverse my-[20px]  md:my-[100px]">
          <div className="flex-1 space-y-0 md:space-y-4  mt-[20px] md:mt-0 m-x-0">
            <div className="flex gap-[30px]">
              <div>
                <span className="flex-col w-[80px] h-[80px] bg-[#9F8C5B] flex rounded-full text-white justify-center items-center font-bold text-[18px]">
                  Check <span></span>3
                </span>
              </div>
              <div>
                <h2 className="text-[20px] md:text-[24px] leading-[32px] font-bold text-[#2C3237] mb-[20px]">
                  掲載の停止
                </h2>
                <p className="text-[#2C3237] text-[16px] leading-[22px] font-normal">
                  簡単に掲載を非表示に切り替える事が可能です
                  <br />
                  クーポンが有効になっている場合にのみ掲載店舗に表示されます。
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full md:max-w-[599.2px]">
            <img
              src="/assets/images/check-image.jpg"
              alt="NFT"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="relative w-full  overflow-hidden py-[97px] rounded-[5px] mt-[20px] md:mt-0">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/register-store-banner.jpg" // replace with your image path
          alt="Coffee Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#00519ec7] bg-opacity-50" />
      </div>

      <RegisterBannerComponent />
    </div>
    
    </div>
  );
}
