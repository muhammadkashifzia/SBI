import React, { useState } from "react";
import TopNavBar from "../../components/shared/TopNavBar";
import BasicInfo from "./BasicInfo";
import BusinessHours from "./BusinessHour";
import Gallery from "./Gallery";
import Recommendations from "./Recommended";
import Coupons from "./Coupons";
import ProfileCompletionModal from "../../components/dashboard/AllFeildsCompleteModel"; // your modal
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
  const [activeTab, setActiveTab] = useState("基本情報");
  const [showProfileModal, setShowProfileModal] = useState(false);

  // completion status for each tab
  const [profileChecks, setProfileChecks] = useState({
    basicInfo: false,
    businessHours: false,
    gallery: false,
    recommendations: false,
    coupons: false,
  });

  const ActiveComponent = tabComponents[activeTab];

  // helper to get current tab key for profileChecks
  const getCheckKey = (tabName) => {
    switch (tabName) {
      case "基本情報":
        return "basicInfo";
      case "営業時間":
        return "businessHours";
      case "ギャラリー":
        return "gallery";
      case "おすすめ":
        return "recommendations";
      case "クーポン":
        return "coupons";
      default:
        return "";
    }
  };

  const handleTabChange = (nextTab) => {
    if (nextTab === activeTab) return;

    const currentKey = getCheckKey(activeTab);

    // Only block navigation if the current tab is NOT completed
    const isCurrentTabComplete = profileChecks[currentKey];

    if (!isCurrentTabComplete) {
      setShowProfileModal(true);
    } else {
      setActiveTab(nextTab);
    }
  };

  const isProfileComplete = Object.values(profileChecks).every(Boolean);

  return (
    <>
      <h2 className="text-[20px] bg-white font-medium p-[20px] text-[#212121]">
        店舗管理
      </h2>
      <div className="py-[20px]">
        <div className="px-[20px] pt-[20px] bg-white">
          <div className="pb-[10px] border-b flex justify-between items-center">
            <span className="text-[#000000] text-[18px]">
              ステータス：{isProfileComplete ? "公開" : "非公開"}
            </span>
            <Button
              className="px-[26px] py-[9px] bg-[#006BA6] text-white rounded-[4px] hover:bg-[#006BA6] cursor-pointer w-[150px] font-bold"
              onClick={() => {
                if (!isProfileComplete) {
                  setShowProfileModal(true);
                } else {
                  alert("Store Published!");
                }
              }}
            >
              {isProfileComplete ? "公開する" : "非公開にする"}
            </Button>
          </div>

          <TopNavBar
            activeTab={activeTab}
            setActiveTab={handleTabChange}
            tabs={tabs}
          />
        </div>

        <div className="px-[20px]">
          <ActiveComponent
            profileChecks={profileChecks}
            setProfileChecks={setProfileChecks}
          />
        </div>

        {showProfileModal && (
          <ProfileCompletionModal
            open={showProfileModal}
            onClose={() => setShowProfileModal(false)}
            profileChecks={profileChecks}
          />
        )}
      </div>
    </>
  );
};

export default DashboardHome;
