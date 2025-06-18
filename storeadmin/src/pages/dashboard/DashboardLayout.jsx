import React from "react";
import Sidebar from "../../components/shared/Sidebar";
import DashboardHome from "../../views/Dashboard/DashboardHome";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 px-[20px]">
        <DashboardHome />
      </main>
    </div>
  );
};

export default Dashboard;
