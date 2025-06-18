import ImageUploadSection from "../../components/ImageUploadSection";
import FormField from "../../components/shared/StoreForm";
import { Button } from "@/components/ui/button";

const DashboardHome = () => {
  const formFields = [
    {
      label: "店舗名",
      placeholder: "こちらに入力してください",
      type: "input",
    },
    {
      label: "店舗名ふりがな",
      placeholder: "こちらに入力してください",
      type: "input",
    },
    {
      label: "店舗ジャンル",
      placeholder: "選択してください",
      type: "select",
      options: ["レストラン", "カフェ", "居酒屋", "バー"],
    },
    {
      label: "店舗サブカテゴリー",
      placeholder: "こちらに入力してください",
      type: "input",
    },
    {
      label: "キャッチコピー",
      placeholder: "こちらに入力してください",
      note: "最大400文字まで",
      type: "textarea",
    },
    {
      label: "店舗紹介文",
      placeholder: "こちらに入力してください",
      note: "最大400文字まで",
      type: "textarea",
    },
    {
      label: "都道府県",
      placeholder: "選択してください",
      type: "select",
      options: ["東京", "大阪", "名古屋"],
    },
    {
      label: "場所/ エリア",
      placeholder: "選択してください",
      type: "select",
      options: ["渋谷", "新宿", "池袋"],
    },
    {
      label: "最寄駅",
      placeholder: "こちらに入力してください",
      type: "input",
    },
    {
      label: "電話番号",
      placeholder: "こちらに入力してください",
      type: "input",
    },
    {
      placeholder: "こちらに入力してください",
      type: "priceRangeGroup",
    },
    {
      label: "電話番号",
      placeholder: "こちらに入力してください",
      type: "input",
    },
    {
      label: "郵便番号",
      placeholder: "こちらに入力してください",
      type: "input",
    },
    {
      label: "住所",
      placeholder: "こちらに入力してください",
      type: "input",
    },
    {
      label: "担当者名",
      placeholder: "こちらに入力してください",
      type: "input",
    },
    {
      label: "メールアドレス",
      placeholder: "こちらに入力してください",
      type: "input",
    },
  ];
  const infolimit = [
    {
      label: "座席・テーブル数",
      placeholder: "こちらに入力してください",
      type: "input",
    },

    {
      label: "個室の有無",
      placeholder: "選択してください",
      type: "select",
      options: ["レストラン", "カフェ", "居酒屋", "バー"],
    },
    {
      label: "喫煙室の有無",
      placeholder: "選択してください",
      type: "select",
      options: ["レストラン", "カフェ", "居酒屋", "バー"],
    },

    {
      label: "駐車場の有無",
      placeholder: "選択してください",
      type: "select",
      options: ["東京", "大阪", "名古屋"],
    },
    {
      label: "子供連れOKかどうか",
      placeholder: "選択してください",
      type: "select",
      options: ["渋谷", "新宿", "池袋"],
    },
    {
      label: "ペット同伴OKかどうか",
      placeholder: "選択してください",
      type: "select",
      options: ["レストラン", "カフェ", "居酒屋", "バー"],
    },

    {
      label: "Free Wifiあるかどうか",
      placeholder: "選択してください",
      type: "select",
      options: ["東京", "大阪", "名古屋"],
    },
    {
      label: "場所/ エリア",
      placeholder: "選択してください",
      type: "select",
      options: ["渋谷", "新宿", "池袋"],
    },
  ];
  const urlFeilds = [
    {
      label: "公式Website",
      placeholder: "URLを入力してください",
      type: "inputWithIcon",
      iconUrl: "/svg/dashboard/webside.svg",
    },
    {
      label: "Facebook",
      placeholder: "/svg/dashboard/facebook.svg",
      type: "inputWithIcon",
      iconUrl: "/svg/dashboard/facebook.svg",
    },
    {
      label: "Instagram",
      placeholder: "URLを入力してください",
      type: "inputWithIcon",
      iconUrl: "/svg/dashboard/instgram.svg",
    },
    {
      label: "TikTok",
      placeholder: "URLを入力してください",
      type: "inputWithIcon",
      iconUrl: "/svg/dashboard/tiktok.svg",
    },
    {
      label: "X",
      placeholder: "URLを入力してください",
      type: "inputWithIcon",
      iconUrl: "/svg/dashboard/x.svg",
    },
    {
      label: "YouTube",
      placeholder: "URLを入力してください",
      type: "inputWithIcon",
      iconUrl: "/svg/dashboard/youtube.svg",
    },
  ];
  return (
    <div>
      <div className="px-[20px] py-[20px]"> 

     
      <div className="bg-white mt-[32px]">
        <div className="flex items-center gap-[10px] ">
          <img src="/svg/shared/check.svg" alt="" className="w-[24px]" />
          <h1 className="text-[22px] text-[#2C3237] font-black  leading-[26.4px]">
            インペリアルタウンエー・帝国ホテルレストラン・
          </h1>
        </div>

        <div className="flex items-center text-[16px] font-bold gap-[10px] mt-[15px] text-[#2C3237] h-[17px]">
          <span className="text-[#006BA6] font-medium">
            グルメ / サブカテゴリー
          </span>
          <span className="flex items-center gap-1">
            <img src="/svg/shared/location.svg" alt="" className="w-[12px]" />
            豊田駅前 / エリア名
          </span>
        </div>
      </div>
      <div className="w-full ">
        <h1 className="text-[16px] font-normal text-[#2C3237] pb-[8px] mt-[29px] ">
          バナー写真
        </h1>
        <ImageUploadSection />
      </div>

      <div className="mt-[29px] pb-[20px]">
        <FormField fields={formFields} />
      </div>

      <div className="mt-[20px]">
        <h1 className="text-[#2C3237] font-bold text-[22px] leading-[26px] pt-[20px] pb-[30px]">
          グルメカテゴリー限定情報
        </h1>
        <FormField fields={infolimit} />
      </div>

      <div className="mt-[20px]  py-[20px] ">
        <FormField fields={urlFeilds} />
      </div>
      <div>
      </div>
 </div>
      <Button className="px-[26px]  py-[14px] mt-[10px] text-[16px ] bg-[#006BA6] text-white rounded-[4px] hover:bg-[#006BA6] cursor-pointer w-[150px] font-bold">
        保存
      </Button>
    </div>
  );
};

export default DashboardHome;
