import { Button } from "@/components/ui/button";
import React from "react";

const TopNavBar = ({ activeTab, setActiveTab, tabs }) => (
  <nav className="flex justify-between bg-white  mt-[32px] h-[51px] items-center">
    <div className="flex gap-[40px]">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`py-[15px] cursor-pointer text-[#000000] px-[25px] rounded-full text-[18px] font-medium ${
            activeTab === tab ? "bg-[#006BA6] text-white" : "text-gray-700"
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>

    <Button className="px-[10px] py-[8px] bg-[#006BA6] text-white rounded-[4px] hover:bg-[#006BA6] cursor-pointer w-[150px] font-bold">
      サイトプレビュー{" "}
    </Button>
  </nav>
);

export default TopNavBar;
