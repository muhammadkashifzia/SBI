import React from "react";
import Image from "next/image";
export default function ShopInfo({
  name,
  furigana,
  phone,
  postalCode,
  address,
  station,
  businessHours,
  parking,
  website,
  socialLinks,
}) {
  return (
    <div className="mt-[100px]">
      <h2 className="text-[28px] font-bold mb-[20px]">店舗情報</h2>
      <div className="bg-gray-50 px-[15px] py-[30px] rounded-md">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-[15px] md:gap-y-[44px] text-sm">
          <div className="font-medium text-[20px] text-[#2C3237]">店舗名</div>
          <div className="sm:col-span-3 text-[20px] font-normal">{name}</div>

          <div className="font-medium  text-[20px]">店舗ふりがな</div>
          <div className="sm:col-span-3 text-[20px] font-normal">{furigana}</div>

          <div className="font-medium  text-[20px]">電話番号</div>
          <div className="sm:col-span-3 text-[20px] font-normal">{phone}</div>

          <div className="font-medium  text-[20px]">郵便番号</div>
          <div className="sm:col-span-3 text-[20px] font-normal">{postalCode}</div>

          <div className="font-medium  text-[20px]">住所</div>
          <div className="sm:col-span-3 text-[20px] font-normal">{address}</div>

          <div className="font-medium  text-[20px]">最寄駅</div>
          <div className="sm:col-span-3 text-[20px] font-normal">{station}</div>

          <div className="font-medium  text-[20px]">営業時間</div>
          <div className="sm:col-span-3 text-[20px] font-normal space-y-1">
            {businessHours.map((item, index) => (
              <div key={index}>
                {item.day}　{item.time}
              </div>
            ))}
          </div>

          <div className="font-medium">駐車場</div>
          <div className="sm:col-span-3 text-[20px] font-normal">{parking}</div>

          <div className="font-medium">公式サイト</div>
          <div className="sm:col-span-3 text-[#2C3237] text-[20px] font-normal">
            <a href={website} target="_blank" rel="noopener noreferrer">
              {website}
            </a>
          </div>

          <div className="font-medium">ソーシャルメディア</div>
          <div className="sm:col-span-3 flex gap-4 text-xl">
            {socialLinks.facebook && (
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                <Image src="/assets/svg/fb-icon.svg" width={25} height={25} alt="fbIcon"/>
              </a>
            )}
            {socialLinks.instagram && (
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
             <Image src="/assets/svg/instagram-icon.svg" width={25} height={25} alt="instagramIcon"/>
              </a>
            )}
            {socialLinks.tiktok && (
              <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer">
               <Image src="/assets/svg/ticktok-icon.svg" width={25} height={25} alt="tiktokIcon"/>
              </a>
            )}
            {socialLinks.twitter && (
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
           <Image src="/assets/svg/x-fill-icon.svg" width={25} height={2} alt="xIcon"/>
              </a>
            )}
            {socialLinks.youtube && (
              <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer">
              <Image src="/assets/svg/youtube-icon.svg" width={25} height={25} alt="youtubeIcon"/>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
