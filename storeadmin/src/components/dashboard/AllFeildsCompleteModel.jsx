import React from "react";
import BaseModal from "../../components/shared/BaseModal";
import { CheckCircle2 } from "lucide-react";

const checklist = [
  { key: "basicInfo", label: "基本情報" },
  { key: "businessHours", label: "営業時間" },
  { key: "services", label: "サービス" },
  { key: "pricing", label: "料金設定" },
  { key: "photos", label: "写真" },
];

const ProfileCompletionModal = ({ open, onClose, profileChecks }) => {
  return (
    <BaseModal open={open} onClose={onClose} className=" max-w-[800px]">
      <div className=" w-full bg-white rounded-md">
        {/* Exclamation Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-[52px] h-[52px] bg-[#E6EFF5] rounded-full flex items-center justify-center">
            <span className="text-[#006BA6] text-[32px] font-bold">!</span>
          </div>
        </div>

        {/* Message */}
        <p className="text-center text-[16px] font-medium text-[#2C3237] mb-6">
          店舗情報を公開する前にプロフィールの必要項目の入力を完成させてください。
        </p>

        {/* Checklist */}
        <div className="space-y-4 mb-6">
          {checklist.map(({ key, label }) => (
            <div key={key} className="flex items-center gap-3">
              {profileChecks[key] ? (
                <CheckCircle2 className="text-green-500 w-5 h-5" />
              ) : (
                <div className="w-5 h-5 rounded-full border-2 border-red-500" />
              )}
              <span className="text-[14px] text-[#2C3237]">{label}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="w-full flex justify-center ">
          <button
            onClick={onClose}
            className="w-full max-w-[266px] bg-[#006BA6] hover:bg-[#005A8C] text-white text-sm font-bold py-3 rounded"
          >
            プロフィール情報入力へ戻る
          </button>
        </div>
      </div>
    </BaseModal>
  );
};

export default ProfileCompletionModal;
