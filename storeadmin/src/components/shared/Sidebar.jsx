// src/components/Sidebar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <aside className="w-full max-w-[319px] h-[802px] bg-[#FFFFFF]  p-[24px] flex flex-col justify-between">
      <div>
        <div className="pb-[22px]">
          <img
            src="/svg/shared/MainLogo.svg"
            className="w-[132px] h-[56px]"
            alt="Main Logo"
          />
        </div>

        <nav className="space-y-[20px]">
          <Link
            to="/dashboard"
            className={`flex items-center gap-[10px] px-[15px] py-[8px] rounded-full text-[16px] font-medium ${
              isActive("/dashboard")
                ? "bg-[#006BA6] text-white"
                : "text-[#006BA6] "
            }`}
          >
            <img
              src={
                isActive("/dashboard")
                  ? "/svg/sidebar/activehome.svg"
                  : "/svg/sidebar/inactivehome.svg"
              }
              alt="Dashboard"
            />
            店舗管理
          </Link>

          <Link
            to="/reviews"
            className={`flex items-center gap-[10px] px-[15px] py-[8px] rounded-full text-[16px] font-medium ${
              isActive("/reviews")
                ? "bg-[#006BA6] text-white"
                : "text-[#006BA6] "
            }`}
          >
            <img
              src={
                isActive("/reviews")
                  ? "/svg/sidebar/activereview.svg"
                  : "/svg/sidebar/inactivereview.svg"
              }
              alt="Reviews"
            />
            レビュー管理
          </Link>
        </nav>
      </div>

      <div className="space-y-[20px]">
        <div>
          <Link
            to="/settings"
            className={`flex items-center gap-[10px] px-[15px] py-[8px] rounded-full text-[16px] font-medium ${
              isActive("/settings")
                ? "bg-[#006BA6] text-white"
                : "text-[#006BA6] "
            }`}
          >
            <img
              src={
                isActive("/settings")
                  ? "/svg/sidebar/activesetting.svg"
                  : "/svg/sidebar/inactivesetting.svg"
              }
              alt="Settings"
            />
            設定
          </Link>
        </div>
        <div>
          <button className="flex items-center gap-2 text-[#006BA6] hover:text-red-800">
            <img src="/svg/sidebar/logout.svg" alt="Logout" />
            ログアウト
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
