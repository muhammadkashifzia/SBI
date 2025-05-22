import React from 'react';
import Image from 'next/image';
export default function About() {
  return (
    <div className="container mx-auto px-[16px] mb-[47px] md:mb-[85px] mt-[20px]">
      <div>
        <h1 className="text-[24px] md:text-[28px] font-semibold mb-[15px] md:mb-[20px]">
         店舗向け使用方法 
        </h1>
      </div>
      <div className="mt-[20px]">
        <div className="overflow-hidden">
          <div className="flex md:space-x-6 md:flex-row flex-col-reverse mb-[20px] md:mb-[30px]">
            <div className="flex-1 space-y-0 md:space-y-4  mt-[20px] md:mt-0 m-x-0">
              <div className="flex gap-[30px]">
                <div>
                  <h2 className='text-[20px] font-bold text-[#2C3237] mb-[15px]'>point 1</h2>
                  <h3 className="text-[20px] md:text-[20px] leading-[32px] font-bold text-[#2C3237] mb-[20px]">
                  使用料は無料でリスク無く送客が受けられる
                  </h3>
                  <p className="text-[#2C3237] text-[16px] leading-[22px] font-normal">
                   使用料は無料でリスクなく送客を受ける事が可能です。
                    <br />
                 実際に送客があり御社で設定した使用条件を満たした場合にのみ、
                    <br />
                    顧客に対し予め御社で設定する割引をユーザーに対して行って頂きます。
                    <br />
                    例：2000円以上購入でドリンク１杯無料等
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full md:max-w-[484px]">
              <img
                src="/assets/images/store-image.png"
                alt="NFT"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
      
        </div>
      </div>
        <div className="mt-[100px]">
        <div className="overflow-hidden">
          <div className="flex md:space-x-6 md:flex-row flex-col-reverse mb-[20px] md:mb-[30px]">
             <div className="flex-1 w-full md:max-w-[484px]">
              <img
                src="/assets/images/store-image02.jpg"
                alt="NFT"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex-1 space-y-0 md:space-y-4  mt-[20px] md:mt-0 m-x-0">
              <div className="flex gap-[30px]">
                <div>
                  <h2 className='text-[20px] font-bold text-[#2C3237] mb-[15px]'>point 2</h2>
                  <h3 className="text-[20px] md:text-[20px] leading-[32px] font-bold text-[#2C3237] mb-[20px]">
                  専用端末の設置は不要でQRコードを設置するだけ
                  </h3>
                  <p className="text-[#2C3237] text-[16px] leading-[22px] font-normal">
                  専用端末の設置等は不要です
                    <br />
              店舗の管理画面から印刷したQRコードをレジ横などに設置するだけで済みます。
                  </p>
                </div>
              </div>
            </div>
           
          </div>
      
        </div>
      </div>
       <div className="mt-[100px]">
        <div className="overflow-hidden">
          <div className="flex md:space-x-6 md:flex-row flex-col-reverse mb-[20px] md:mb-[30px]">
            <div className="flex-1 space-y-0 md:space-y-4  mt-[20px] md:mt-0 m-x-0">
              <div className="flex gap-[30px]">
                <div>
                  <h2 className='text-[20px] font-bold text-[#2C3237] mb-[15px]'>point 3</h2>
                  <h3 className="text-[20px] md:text-[20px] leading-[32px] font-bold text-[#2C3237] mb-[20px]">
                 Web３の知識は一切不要
                  </h3>
                  <p className="text-[#2C3237] text-[16px] leading-[22px] font-normal">
                   店舗スタッフは、Web3に関する知識は必要ありません。
                    <br />
                認証成功の画面を確認して、御社で設定したサービスを提供するだけです。
                    <br />
                   サービス内容はQRコード裏面に記載されるため、オペレーションもすぐに覚えられます。
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full md:max-w-[484px]">
              <img
                src="/assets/images/store-image03.jpg"
                alt="NFT"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
      
        </div>
      </div>
      <div className='mt-[131px]'>
        <h1 className="text-[24px] md:text-[28px] font-semibold mb-[15px] md:mb-[31px] text-center">
         ３ステップで集客開始
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[34px]">
          <div className="flex flex-col border border-[#C1C1C1] rounded-[5px]">
            <div className="w-full h-48 bg-gray-200 flex justify-center items-center mb-[10px]">
              <img
                src="/assets/images/customer-image01.png"
                alt="NFT"
                className="w-full h-full rounded-t-[5px] object-cover object-top"
              />
            </div>
            <div className="pt-[10px] px-[15px] pb-[15px]">
              <h2 className="font-medium text-[16px] mb-[10px]">Step 1</h2>
              <p className="font-normal text-[16px]">無料店舗登録</p>
            </div>
          </div>
          <div className="flex flex-col border border-[#C1C1C1] rounded-[5px]">
            <div className="w-full h-48 bg-gray-200 flex justify-center items-center mb-[10px]">
              <img
                src="/assets/images/customer-image02.png"
                alt="Shopping"
                className="w-full h-full rounded-t-[5px] object-cover object-top"
              />
            </div>
            <div className="pt-[10px] px-[15px] pb-[15px]">
              <h2 className="font-medium text-[16px] mb-[10px]">Step 2</h2>
              <p className="font-normal text-[16px]">QRコードを印刷・設置   </p>
            </div>
          </div>
          <div className="flex flex-col border border-[#C1C1C1] rounded-[5px]">
            <div className="w-full h-48 bg-gray-200 flex justify-center items-center mb-[10px] rounded-t-[5px]">
              <img
                src="/assets/images/customer-image03.png"
               alt="Purchase"
                className="w-full h-full rounded-t-[5px] object-cover object-top"
              />
            </div>

            <div className="pt-[10px] px-[15px] pb-[15px]">
              <h2 className="font-medium text-[16px] mb-[10px]">Step 3</h2>
              <p className="font-normal text-[16px]">
                送客されたユーザーに割引の提供
              </p>
            </div>
          </div>
          
        </div>
      </div>
      <div className="mt-[100px]">
        <div className="flex md:space-x-6 md:flex-row flex-col-reverse  md:pb-[50px]">
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
                  Step1による共通の利用条件に加え、店舗ごとの利用条件がございます。
                  <br />
                  ログイン不要でご使用いただけます。
                  <br />
                  口コミを記載する場合にのみXでのログインが必要になります。
                  <br />
                  〇は認証マークとなります。
                  <br />
                  認証マークがついていない店舗はWeb3
                  割運営からの確認が済んでいない店舗となりますのでご使用にはご注意ください。
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
        <div className="flex md:space-x-6 md:flex-row flex-col-reverse md:py-[50px]">
          <div className="flex-1 space-y-0 md:space-y-4  mt-[20px] md:mt-0 m-x-0">
            <div className="flex gap-[30px]">
              <div>
                <span className="w-[80px] h-[80px] bg-[#9F8C5B] flex rounded-full text-white justify-center items-center font-bold text-[18px]">
                  Step 2
                </span>
              </div>
              <div>
                <h2 className="text-[20px] md:text-[24px] leading-[32px] font-bold text-[#2C3237] mb-[20px]">
                  対象の商品/サービスを購入
                </h2>
                <p className="text-[#2C3237] text-[16px] leading-[22px] font-normal">
                  店舗でクーポン内容に記載のある対象の商品/サービスを利用条件にご注意頂いたうえでご購入ください。
                  <br />
                  認証マークのついていない店舗についてはご購入前のご確認を推奨いたします
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
        <div className="flex md:space-x-6 md:flex-row flex-col-reverse md:py-[50px]">
          <div className="flex-1 space-y-0 md:space-y-4  mt-[20px] md:mt-0 m-x-0">
            <div className="flex gap-[30px]">
              <div>
                <span className="w-[80px] h-[80px] bg-[#9F8C5B] flex rounded-full text-white justify-center items-center font-bold text-[18px]">
                  Step 3
                </span>
              </div>
              <div>
                <h2 className="text-[20px] md:text-[24px] leading-[32px] font-bold text-[#2C3237] mb-[20px]">
                  対象の商品/サービスを購入
                </h2>
                <p className="text-[#2C3237] text-[16px] leading-[22px] font-normal">
                  店舗でクーポン内容に記載のある対象の商品/サービスを利用条件にご注意頂いたうえでご購入ください。
                  <br />
                  認証マークのついていない店舗についてはご購入前のご確認を推奨いたします。
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
      
      <div
        className="h-full mt-[4px] rounded-[5px] bg-cover bg-no-repeat bg-center relative  overflow-hidden  flex flex-col justify-center py-[103px] md:py-[100px] w-full max-w-[1359px] mx-auto px-[16px]"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 81, 158, 0.8), rgba(0, 81, 158, 0.8)), url('/assets/images/instructor-image-02.png')`,
          backgroundColor: 'lightgray',
        }}
      >
        <div>
          <div className="py-[40px] text-center absolute top-1/2 left-[50%] transform -translate-y-1/2 -translate-x-1/2 text-white font-bold text-sm space-y-1">
            <h3 className="font-bold text-[16px] md:text-[30px] leading-[38px] mb-[27px]">
              ※使用方法につきまして質問等がございましたらBto3
              ディスコードの「🎟support」チャンネルよりご連絡ください。
            </h3>
            <p>
              <a
                className="font-normal text-[16px leading-[24px]"
                href="http://discord.gg/bto3"
                target="_blank"
              >
                http://discord.gg/bto3
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
