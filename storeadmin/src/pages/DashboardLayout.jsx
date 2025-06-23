import React, { useState } from "react";
import Sidebar from "../components/shared/Sidebar";
import { FiMenu } from "react-icons/fi";

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen lg:flex bg-[#F3F3F3]">
      {/* Hamburger icon (for small/medium only) */}
      <button
        className="lg:hidden fixed top-5 right-10 z-50 text-[#006BA6]"
        onClick={() => setIsSidebarOpen(true)}
      >
        <FiMenu size={28} />
      </button>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content */}

      
      <main className="flex-1 px-[20px] ">{children}</main>
    </div>
  );
};

export default DashboardLayout;
