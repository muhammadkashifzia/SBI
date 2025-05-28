// components/ListingList.jsx
import React from "react";
import ListingItem from "@/components/searchrestaurant/ListingItemCard";

export default function ListingList() {
  return (
    <main className="flex-1">
      <h2 className="text-xl font-semibold mb-4">検索結果 XX件</h2>
      {[...Array(3)].map((_, i) => (
        <ListingItem key={i} />
      ))}
    </main>
  );
}
