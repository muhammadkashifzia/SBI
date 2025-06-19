import React, { useState } from "react";
import TopNavBar from "../../components/shared/TopNavBar";
import FormField from "../../components/shared/StoreForm";

import BasicInfo from "./BasicInfo";
import BusinessHours from "./BusinessHour";
import Gallery from "./Gallery";
import Recommendations from "./Recommended";
import Coupons from "./Coupons";
import { Button } from "@/components/ui/button";

const tabComponents = {
  基本情報: BasicInfo,
  営業時間: BusinessHours,
  ギャラリー: Gallery,
  おすすめ: Recommendations,
  クーポン: Coupons,
};

const tabs = ["基本情報", "営業時間", "ギャラリー", "おすすめ", "クーポン"];

const DashboardHome = () => {
  const [activeTab, setActiveTab] = useState("おすすめ");
  const ActiveComponent = tabComponents[activeTab];

  return (
    <div>
      <h2 className="text-[20px] font-medium p-[20px] text-[#212121] ">
        店舗管理
      </h2>
      <div className="py-[20px] px-[20px]">
        <div className=" pb-[10px] border-b mb-[32px]">
          <div className="flex justify-between items-center">
            <span className="text-[#000000] text-[18px]">
              ステータス：公開.
            </span>
            <Button className="px-[26px] py-[9px] bg-[#006BA6] text-white rounded-[4px] hover:bg-[#006BA6] cursor-pointer w-[150px] font-bold">
              非公開にする{" "}
            </Button>
          </div>
        </div>

        <TopNavBar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={tabs}
        />
      </div>
      <div className="bg-white  rounded ">
        <ActiveComponent />
      </div>
    </div>
  );
};

export default DashboardHome;
