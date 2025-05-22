import React from 'react';
import Image from 'next/image';
export default function StoreInfo() {
  return (
    <div>
      <section className="mb-[64px]">
        <div className="mb-[32px]">
          <span className="block w-[32px] h-[2px] bg-[#B900B3] mb-[16px]"></span>
          <p className='font-bold text-[20px]'> 店舗基本情報</p>
        </div>
        <div className="border-t border-[#B900B3] ">
          <InfoRow label="店名" value="スナック りえ" />
          <InfoRow
            label="住所"
            value={
              <div>
                <p className='text-[14px] font-[500]'>東京都世田谷区北沢1-45-15</p>
                <div className="mt-2 w-full h-48 bg-gray-200 flex items-center justify-center text-sm text-gray-500">
                  GoogleMap
                </div>
              </div>
            }
          />
          <InfoRow label="アクセス" value="下北沢駅 徒歩5分" />
          <InfoRow label="電話番号" value="070-5599-7898" />
          <InfoRow label="営業時間" value="19:00〜LAST" />
          <InfoRow label="定休日" value="日曜日" />
          <InfoRow
            label="支払方法"
            value={
              <div className="space-y-1">
                <p>カード可（VISA、Master、JCB、AMEX、Diners）</p>
                <p>電子マネー不可</p>
                <p>QRコード決済可（PayPay）</p>
              </div>
            }
          />
          <InfoRow
            label="SNS"
            value={
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[#1E1C1C] hover:underline"
              >
                <Image
                  src="/assets/svg/icon_instagram.svg"
                  alt="店内写真"
                  width={20}
                  height={20}
                  className="w-[20px] h-[20px] object-cover"
                />
                Instagram
              </a>
            }
          />
        </div>
      </section>

      <section className="mb-[64px]">
        <div className="mb-[32px]">
          <span className="block w-[32px] h-[2px] bg-[#B900B3] mb-[16px]"></span>
          <p className='font-[700] text-[20px]'>席・設備</p>
        </div>
        <div className="border-t border-[#B900B3]">
          <InfoRow label="席数" value="58席" />
          <InfoRow label="貸切" value="可" />
          <InfoRow label="禁煙・喫煙" value="喫煙可" />
          <InfoRow label="カラオケ" value="有" />
          <InfoRow label="駐車場" value="無" />
        </div>
      </section>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex  border-b border-[#B900B3]">
      <p className="w-[18.4%] font-bold bg-[#AF81AD0D] h-auto py-[15px] px-[16px] text-[14px] text-[#1E1C1C]">
        {label}
      </p>
      <div className="w-[81.6%] py-[15px] px-[15px] text-[14px] font-medium">{value}</div>
    </div>
  );
}
