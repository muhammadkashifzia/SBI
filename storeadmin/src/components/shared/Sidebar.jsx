import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <aside
      className={`bg-white h-full max-w-[319px] w-full p-[24px] flex flex-col justify-between transition-transform duration-300
        fixed top-0 right-0 z-50
        lg:static lg:right-auto lg:translate-x-0
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
    >
      {/* Top: Logo + Close */}
      <div className="h-[411px]">
        <div className="flex items-center justify-between pb-[22px]">
          <img
            src="/svg/shared/MainLogo.svg"
            className="w-[132px] h-[69px]"
            alt="Main Logo"
          />
          {/* Close Button (only visible on small screens) */}
          <button onClick={() => setIsOpen(false)} className="lg:hidden">
            <AiOutlineClose size={24} className="text-[#006BA6]" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-[20px]">
          <Link
            to="/dashboard"
            className={`flex items-center gap-[10px] px-[15px] py-[8px] rounded-full text-[16px] font-medium ${
              isActive("/dashboard")
                ? "bg-[#006BA6] text-white"
                : "text-[#006BA6]"
            }`}
            onClick={() => setIsOpen(false)}
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
                : "text-[#006BA6]"
            }`}
            onClick={() => setIsOpen(false)}
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

      {/* Bottom: Settings + Logout */}
      <div className="space-y-[20px] mt-[226px]">
        <Link
          to="/settings"
          className={`flex items-center gap-[10px] px-[15px] py-[8px] rounded-full text-[16px] font-medium ${
            isActive("/settings")
              ? "bg-[#006BA6] text-white"
              : "text-[#006BA6]"
          }`}
          onClick={() => setIsOpen(false)}
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

        <button className="flex items-center gap-[10px] px-[15px] py-[8px] rounded-full text-[16px] font-medium text-[#006BA6]">
          <img src="/svg/sidebar/logout.svg" alt="Logout" />
          ログアウト
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
