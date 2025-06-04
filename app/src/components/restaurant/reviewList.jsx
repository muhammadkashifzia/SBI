'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';
import Link from 'next/link';
export default function ReviewList({ reviews }) {
  const [showAll, setShowAll] = useState(false);
  const visibleReviews = showAll ? reviews : reviews.slice(0, 6);

  return (
    <section className="container mx-auto">
      <h2 className="text-[28px] font-bold text-[#2C3237] mb-[20px]">
        レビュー / コメント（{reviews.length}件）
      </h2>
      <Link href="#" className="text-[16px] font-bold text-[#006BA6] hover:underline mb-[20px] inline-block">
        レビュー / コメントを新規投稿する
      </Link>

      <div className="space-y-6">
        {visibleReviews.map((review, index) => (
          <div key={index} className="bg-[#EFF2FC] p-4 rounded-md border border-blue-100">
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-500 mr-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} size={18} fill={i < review.rating ? '#facc15' : 'none'} stroke="currentColor" />
                ))}
              </div>
              <span className="font-medium text-gray-800">{review.rating.toFixed(1)}</span>
            </div>
            <p className="text-sm text-gray-700 whitespace-pre-line">{review.comment}</p>
            <div className="text-sm text-right mt-2 text-gray-500">{review.username}</div>
          </div>
        ))}
      </div>

      {reviews.length > 2 && (
        <div className="mt-4 text-center">
          <button
            className="text-[#006BA6] hover:underline text-sm"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? '一部だけ表示する' : 'もっとレビュー/コメントを読む'}
          </button>
        </div>
      )}
    </section>
  );
}
