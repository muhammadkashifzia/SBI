import React from "react";

export default function CouponCard() {
  return (
    <div className="container mx-auto my-[100px]">
      <h2 className="text-[28px] font-bold mb-[20px]">提示で利用できるクーポン</h2>
      <div className="border border-[#CDCDCD] rounded-md bg-white">
        <div className="flex flex-col sm:flex-row">
          {/* Left Section */}
          <div className="bg-[#006BA6] text-white flex items-center justify-center sm:w-[160px] py-6 rounded-[5px]">
            <div className="text-center">
              <div className="text-3xl"><img
                src="/assets/svg/percentage-icon.svg"
                alt="percentageIcon"
                className="w-[60px] h-[60px] rounded-t-[5px] object-cover object-top"
              /></div>
              <div className="text-lg font-bold">クーポン</div>
            </div>
          </div>

          {/* Right Section */}
          <div className="px-[14px] py-[20px] flex-1">
            {/* Title */}
            <p className="font-bold text-[24px]  mb-[30px] text-[#2C3237]">
              【4/1 〜4/15限定】クーポン名の参考タイトルです。こちらは自由に変更することができます。クーポン名の参考タイトルです。こちらは自由に変更することができます。
            </p>

            {/* 利用条件 */}
            <div className="flex items-start md:items-center mb-[30px] flex-col md:flex-row">
              <div className="bg-[#9F8C5B] text-white text-xs font-semibold px-2 py-0.5 rounded mr-2 whitespace-nowrap w-[112px] h-[31px] flex justify-center items-center mb-[15px] md:mb-0">
                ご利用条件
              </div>
              <p className="text-[16px] font-medium leading-relaxed w-[80%]">
                店頭での提示にてご利用できます。全体金額が5000円以上の場合にのみ利用することができます。こちらはクーポン利用条件の例文になります。店頭での提示にてご利用できます。全体金額が5000円以上の場合にのみ利用することができます。こちらはクーポン利用条件の例文になります。
              </p>
            </div>

            {/* 備考 */}
            <div className="flex items-start md:items-center mb-[30px] flex-col md:flex-row">
              <span className="mb-[15px] md:mb-0 bg-[#9F8C5B] text-white text-xs font-semibold px-2 py-0.5 rounded mr-2 whitespace-nowrap w-[112px] h-[31px] flex justify-center items-center">
                備考
              </span>
              <p className="text-[16px] font-medium">サービス料10%別途</p>
            </div>

            {/* Note */}
            <p className="text-[16px] font-medium text-[#2C3237]">
              ※対象のトークン/NFTも所有されている必要がございます。詳細はこちらをご確認ください。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
