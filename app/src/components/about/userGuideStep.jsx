export default function UserGuideStepComponent() {
  return (
 <div>
      <div className="mt-[54px] md:mt-[100px]">
        <div className="overflow-hidden">
          <div className="flex md:space-x-6 md:flex-row flex-col-reverse mb-[20px] md:mb-[30px]">
            <div className="flex-1 space-y-0 md:space-y-4  mt-[20px] md:mt-0 m-x-0">
              <div className="flex gap-[30px]">
                <div>
                  <span className="w-[80px] h-[80px] bg-[#9F8C5B] flex rounded-full text-white justify-center items-center font-bold text-[18px]">
                    Step 1
                  </span>
                </div>
                <div>
                  <h2 className="text-[20px] md:text-[24px] leading-[32px] font-bold text-[#2C3237] mb-[20px]">
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
            <div className="flex-1 w-full md:max-w-[599.2px]">
              <img
                src="/assets/images/instructor-image-01.png"
                alt="NFT"
                className="w-full h-full object-cover rounded-lg"
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
      <div className="mt-[100px]">
        <div className="flex md:space-x-6 md:flex-row flex-col-reverse  md:pb-[50px]">
          <div className="flex-1 space-y-0 md:space-y-4  mt-[20px] md:mt-0 m-x-0">
            <div className="flex gap-[30px]">
              <div>
                <span className="w-[80px] h-[80px] bg-[#9F8C5B] flex rounded-full text-white justify-center items-center font-bold text-[18px]">
                  Step 2
                </span>
              </div>
              <div>
                <h2 className="text-[20px] md:text-[24px] leading-[32px] font-bold text-[#2C3237] mb-[20px]">
                  割引店舗を検索
                </h2>
                <p className="text-[#2C3237] text-[16px] leading-[22px] font-normal">
                  掲載店舗を探すより「エリア検索」「ジャンル検索」「星検索」にて対象店舗を検索いただけます。
                  <br />
                  クーポン内容より割引内容及び各店舗の利用条件をご確認ください。
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
              src="/assets/images/instructor-image-02.png"
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
                  認証マークのついていない店舗についてはご購入前のご確認を推奨いたします
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full md:max-w-[599.2px]">
            <img
              src="/assets/images/instructor-image-03.png"
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
                  Step 4
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
              src="/assets/images/instructor-image-04.png"
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
                  Step 5
                </span>
              </div>
              <div>
                <h2 className="text-[20px] md:text-[24px] leading-[32px] font-bold text-[#2C3237] mb-[20px]">
                  認証画面を提示
                </h2>
                <p className="text-[#2C3237] text-[16px] leading-[22px] font-normal">
                  ウォレット接続が成功すると、認証成功画面が表示されます。
                  <br />
                  認証成功画面が表示されたら店員さんにご提示ください
                  <br />
                  認証に失敗した場合には、Step1の条件及び接続するウォレットにお間違いがないかご確認のうえ、
                  <br />
                  再度ウォレット接続をお試しください
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full md:max-w-[599.2px]">
            <img
              src="/assets/images/instructor-image-05.png"
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
                  Step 6
                </span>
              </div>
              <div>
                <h2 className="text-[20px] md:text-[24px] leading-[32px] font-bold text-[#2C3237] mb-[20px]">
                  割引を受ける
                </h2>
                <p className="text-[#2C3237] text-[16px] leading-[22px] font-normal">
                  認証成功画面を提示するとクーポン内容の割引を受ける事が可能です
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full md:max-w-[599.2px]">
            <img
              src="/assets/images/instructor-image-06.png"
              alt="NFT"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
 </div>
  );
}
