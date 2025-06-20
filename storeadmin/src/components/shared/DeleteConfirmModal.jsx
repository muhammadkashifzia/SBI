import React from "react";
import BaseModal from "../shared/BaseModal";
import { Button } from "@/components/ui/button";

const DeleteConfirmModal = ({ onClose, onConfirm }) => {
  return (
    <BaseModal onClose={onClose} className="max-w-[400px]">
      <div className="p-[20px] text-center   mx-auto ">
        <img
          src="/svg/dashboard/delete.svg"
          alt="Delete Icon"
          className="w-[78px] h-[78px] mx-auto mb-[16px]"
        />
        <div className="text-start flex flex-col gap-[4px]">
          <h2 className="text-[18px] font-normal text-[#070707]">項目の削除</h2>

          <p className="text-[14px] text-[#475467] font-normal">
            実行してよろしいですか？このアクションは取り消すことができません。
          </p>
        </div>

        <div className="flex justify-center pt-[36px]">
          <Button
            onClick={onConfirm}
            className="bg-[#F94A65] w-[352px] h-[36px] text-white font-bold rounded-[4px] hover:bg-[#005a8c]"
          >
            削除する
          </Button>
        </div>
      </div>
    </BaseModal>
  );
};

export default DeleteConfirmModal;
