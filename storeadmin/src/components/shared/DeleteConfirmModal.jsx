import React from "react";
import BaseModal from "../shared/BaseModal";
import { Button } from "@/components/ui/button";

const DeleteConfirmModal = ({ onClose, onConfirm }) => {
  return (
    <BaseModal onClose={onClose}>
      <div className="p-6 text-center space-y-6 max-w-[400px] mx-auto">
        <img
          src="/svg/dashboard/delete.svg"
          alt="Delete Icon"
          className="w-[48px] h-[48px] mx-auto"
        />

        <h2 className="text-[20px] font-bold text-[#2C3237]">項目の削除</h2>

        <p className="text-[14px] text-[#2C3237]">
          実行してよろしいですか？このアクションは取り消すことができません。
        </p>

        <div className="flex justify-center">
          <Button
            onClick={onConfirm}
            className="bg-[#006BA6] w-[150px] h-[36px] text-white font-bold rounded-[4px] hover:bg-[#005a8c]"
          >
            削除する
          </Button>
        </div>
      </div>
    </BaseModal>
  );
};

export default DeleteConfirmModal;
