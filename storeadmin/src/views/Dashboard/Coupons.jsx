import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Percent, Edit, Trash2, Plus } from "lucide-react";
import BaseModal from "../../components/shared/BaseModal";
import CouponModal from "../../components/dashboard/CouponModal";
import DeleteConfirmModal from "../../components/shared/DeleteConfirmModal";

function Coupons() {
  const [deleteIndex, setDeleteIndex] = useState(null);

  const [coupons, setCoupons] = useState([
    {
      id: 1,
      title:
        "【4/1 〜4/15限定】クーポン名の参考タイトルです。こちらは自由に変更することができます。クーポン名の参考タイトルです。こちらは自由に変更することができます。",
      conditions:
        "店頭での提示にてご利用できます。全体金額が5000円以上の場合にのみ利用することができます。こちらはクーポン利用条件の例文になります。店頭での提示にてご利用できます。全体金額が5000円以上の場合にのみ利用することができます。こちらはクーポン利用条件の例文になります。",
      fileId:
        "※対象のトークン/NFTも所有されている必要がございます。詳細はこちらをご確認ください。",
      isActive: true,
      discount: "サービス料10％別途",
    },
  ]);

  const handleConfirmDelete = () => {
    setCoupons(coupons.filter((c) => c.id !== deleteIndex));
    setDeleteIndex(null);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCoupon, setEditingCoupon] = useState(null);
  const [profileChecks, setProfileChecks] = useState({
    basicInfo: false,
    businessHours: false,
    services: false,
    pricing: false,
    photos: false,
  });

  const handleAddCoupon = () => {
    setEditingCoupon(null);
    setIsModalOpen(true);
  };

  const handleEditCoupon = (coupon) => {
    setEditingCoupon(coupon);
    setIsModalOpen(true);
  };

  const handleSaveCoupon = (couponData) => {
    if (editingCoupon) {
      setCoupons(
        coupons.map((c) =>
          c.id === editingCoupon.id ? { ...c, ...couponData } : c
        )
      );
    } else {
      const newCoupon = {
        ...couponData,
        id: Date.now(),
        isActive: true,
      };
      setCoupons([...coupons, newCoupon]);
    }
    setIsModalOpen(false);
  };

  const handleProfileCheckChange = (key) => {
    setProfileChecks({
      ...profileChecks,
      [key]: !profileChecks[key],
    });
  };

  const isProfileComplete = Object.values(profileChecks).every(Boolean);

  return (
    <div>
      <div className="p-[20px] bg-white">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-[10px] sm:gap-0 mt-[12px] mb-[20px]">
          <h2 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold sm:font-bold text-[#000000]">
            クーポン
          </h2>
          <Button
            onClick={handleAddCoupon}
            className="bg-[#006BA6] hover:bg-[#006BA6] h-[40px] w-full sm:w-[150px] text-white cursor-pointer font-bold px-[26px] py-[9px] rounded-[4px]"
          >
            新規追加
          </Button>
        </div>
        {coupons.map((coupon) => (
          <div
            key={coupon.id}
            className="bg-white rounded-[5px] border border-[#CDCDCD] mb-[20px]"
          >
            <div className="flex flex-col sm:flex-row gap-[16px] sm:gap-[20px]">
              <div className="relative w-full sm:w-[212px] h-[220px] sm:h-[358px] bg-[#006BA6] rounded-[5px] flex flex-col items-center justify-center text-white">
                <img
                  src="/svg/dashboard/delete.svg"
                  className="w-[20px] cursor-pointer h-[20px] absolute top-[10px] left-[10px]"
                  onClick={() => setDeleteIndex(coupon.id)}
                  alt="Delete"
                />

                <img
                  src="/svg/shared/coupns.svg"
                  alt="クーポンアイコン"
                />
                <span className="text-[22px] sm:text-[24px] text-[#FFFFFF] font-bold mt-2">
                  クーポン
                </span>
              </div>

              <div className="flex-1  flex flex-col gap-[20px] sm:gap-[30px]  px-[10px]">
                <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-bold text-[#2C3237]">
                  {coupon.title}
                </h3>

                <div className="flex flex-col sm:flex-row sm:items-start gap-[10px] sm:gap-[30px]">
                  <Button className="bg-[#9F8C5B] hover:bg-[#9F8C5B] h-[31px] w-[112px] text-[14px] sm:text-[16px] font-medium cursor-pointer px-[16px] py-[4px] rounded-[3px]">
                    ご利用条件
                  </Button>
                  <p className="text-[14px] sm:text-[16px] text-[#2C3237] font-medium">
                    {coupon.conditions}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start gap-[10px] sm:gap-[30px]">
                  <Button className="bg-[#9F8C5B] hover:bg-[#9F8C5B] h-[31px] w-[112px] text-[14px] sm:text-[16px] font-medium cursor-pointer px-[16px] py-[4px] rounded-[3px]">
                    備考
                  </Button>
                  <p className="text-[14px] sm:text-[16px] text-[#2C3237] font-medium">
                    {coupon.discount}
                  </p>
                </div>

                <p className="text-[14px] sm:text-[16px] text-[#2C3237] font-medium">
                  {coupon.fileId}
                </p>
              </div>
            </div>
          </div>
        ))}
        {deleteIndex !== null && (
          <DeleteConfirmModal
            onClose={() => setDeleteIndex(null)}
            onConfirm={handleConfirmDelete}
          />
        )}

        {isModalOpen && (
          <CouponModal
            coupon={editingCoupon}
            onClose={() => setIsModalOpen(false)}
            onSave={handleSaveCoupon}
            profileChecks={profileChecks}
            handleProfileCheckChange={handleProfileCheckChange}
            isProfileComplete={isProfileComplete}
          />
        )}
      </div>
      <div className="my-[30px] flex justify-start">
        <Button
          className="px-[26px] py-[14px] bg-[#006BA6] text-white rounded-[4px] hover:bg-[#006BA6] cursor-pointer w-[150px] h-[50px] font-bold"
          onClick={() => console.log("Save coupons", coupons)}
        >
          保存
        </Button>
      </div>
    </div>
  );
}

export default Coupons;
