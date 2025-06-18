// src/pages/Reviews.jsx
import React from "react";
import Sidebar from "../../components/shared/Sidebar";

const Reviews = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-50">レビュー管理ページ</main>
    </div>
  );
};

export default Reviews;
