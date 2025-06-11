export default function UseInStoresComponent() {
  return (
    <div>
      <div>
        <h1 className="text-[24px] md:text-[28px] font-semibold mb-[15px] md:mb-[19.5px] text-[#2C3237]">
          店舗向け使用方法
        </h1>
      </div>
      <div className="mt-0 md:mt-[20px]">
        <div className="overflow-hidden">
          <div className="flex md:space-x-6 md:flex-row flex-col-reverse mb-[0px] md:mb-[30px]">
            <div className="flex-1 space-y-0 md:space-y-4  mt-[20px] md:mt-0 m-x-0">
              <div className="flex gap-[30px]">
                <div>
                  <h2 className="text-[20px] font-bold text-[#2C3237] mb-[15px] uppercase">
                    point 1
                  </h2>
                  <h3 className="text-[20px] md:text-[20px] leading-[32px] font-bold text-[#2C3237] mb-[20px]">
                    使用料は無料でリスク無く送客が受けられる
                  </h3>
                  <p className="text-[#2C3237] text-[16px] leading-[22px] font-normal mb-0">
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
            <div className="flex-1 w-full md:max-w-[599px] mt-[0px]">
              <img
                src="/assets/images/store-image.png"
                alt="NFT"
                className="w-full h-full object-cover rounded-[5px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[0px] md:mt-[100px]">
        <div className="overflow-hidden">
          <div className="flex md:space-x-6 md:flex-row flex-col mb-[40px] md:mb-[30px]">
            <div className="flex-1 w-full md:max-w-[599px] mt-[40px] md:mt-0">
              <img
                src="/assets/images/store-image02.jpg"
                alt="NFT"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex-1 space-y-0 md:space-y-4  mt-[15px] md:mt-0 m-x-0">
              <div className="flex gap-[30px]">
                <div>
                  <h2 className="text-[20px] font-bold text-[#2C3237] mb-[15px] uppercase">
                    point 2
                  </h2>
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
      <div className="mt-[0px] md:mt-[100px]">
        <div className="overflow-hidden">
          <div className="flex md:space-x-6 md:flex-row flex-col-reverse">
            <div className="flex-1 space-y-0 md:space-y-4  mt-[15px] md:mt-0 m-x-0">
              <div className="flex gap-[30px]">
                <div>
                  <h2 className="text-[20px] font-bold text-[#2C3237] mb-[15px] uppercase">
                    point 3
                  </h2>
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
            <div className="flex-1 w-full md:max-w-[599px]">
              <img
                src="/assets/images/store-image03.png"
                alt="NFT"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
