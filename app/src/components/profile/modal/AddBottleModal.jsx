"use client"

import React from "react"

import { useState } from "react"
import { X, Calendar, ChevronRight } from "lucide-react"
import Image from "next/image"

export function AddBottleModal({ isOpen, onClose, onAdd, defaultDate = "2025/07/20" }) {
  const [purchaseDate, setPurchaseDate] = useState(defaultDate)
  const [bottleName, setBottleName] = useState("山崎12年")
  const [memo, setMemo] = useState("ここにはメモが入力されています。")

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    onAdd({
      purchaseDate,
      name: bottleName,
      memo,
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-[#00000099] flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-lg overflow-hidden">
        {/* Header */}
        <div className="relative p-5 text-center ">
          <h2 className="text-xl font-medium text-[#B900B3]">ボトルキープを追加</h2>
          <button
            onClick={onClose}
            className="absolute right-5 top-5 text-[#B900B3] "
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          {/* Purchase Date */}
          <div className="mb-6">
            <label htmlFor="purchase-date" className="block text-sm text-gray-600 mb-2">
              購入日
            </label>
            <div className="relative">
              <input
                type="text"
                id="purchase-date"
                value={purchaseDate}
                onChange={(e) => setPurchaseDate(e.target.value)}
                className="w-full p-4 border border-3 border-[#EEEEEE] rounded-lg text-lg"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                                  <Image
                    src="/assets/svg/calendar.svg"
                    alt="Calendar"
                    width={24}
                    height={24}
                  />
              </div>
            </div>
          </div>

          {/* Bottle Name */}
          <div className="mb-6">
            <label htmlFor="bottle-name" className="block text-sm text-gray-600 mb-2">
              銘柄
            </label>
            <input
              type="text"
              id="bottle-name"
              value={bottleName}
              onChange={(e) => setBottleName(e.target.value)}
              className="w-full p-4  rounded-lg text-lg border border-3 border-[#EEEEEE]"
            />
          </div>

          {/* Memo */}
          <div className="mb-6">
            <label htmlFor="bottle-memo" className="block text-sm text-gray-600 mb-2">
              メモ
            </label>
            <textarea
              id="bottle-memo"
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
              className="w-full p-4 border border-3 border-[#EEEEEE] rounded-lg h-40 text-base"
              placeholder="メモを入力してください"
            />
          </div>
        </form>

        {/* Add Button */}
        <button
            type="submit"
            form="edit-form"
            className="w-full bg-[#B900B3] text-white py-4 flex items-center justify-center text-lg relative">
            <span>更新する</span>
            <ChevronRight size={24} className="absolute right-6" />
          </button>
      </div>
    </div>
  )
}
