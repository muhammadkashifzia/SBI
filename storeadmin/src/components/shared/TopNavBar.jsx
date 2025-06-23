import { Button } from "@/components/ui/button";
import React from "react";

const TopNavBar = ({ activeTab, setActiveTab, tabs }) => (
  <nav className="flex flex-col lg:flex-row lg:justify-between gap-4 bg-white mt-[32px] items-start lg:items-center">
    {/* Tabs with background */}

    <div className="bg-[#F3F3F3] rounded-[50px] overflow-x-auto w-full flex items-center p-[4px] pr-[14px] justify-between ">
      <div className="flex gap-[16px] lg:gap-[40px]">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-[10px] px-[20px] whitespace-nowrap text-[16px] rounded-full font-medium ${
              activeTab === tab ? "bg-[#006BA6] text-white" : "text-gray-700"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Button outside tab container */}
        <Button className="w-auto px-[10px] py-[8px] bg-[#006BA6] text-white rounded-[4px] hover:bg-[#006BA6] font-bold">
          サイトプレビュー
        </Button>
    </div>
  </nav>
);

export default TopNavBar;
