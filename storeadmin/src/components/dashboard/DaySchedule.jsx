import React from "react";
import { Checkbox } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const DaySchedule = ({
  day,
  closed,
  timeSlots,
  onToggleClosed,
  onChangeSlot,
  onAddSlot,
  onRemoveSlot,
}) => (
  <div className="  px-[20px]">
    <div className="flex items-center gap-[42px] my-[20px]">
      <h3 className="font-bold  leading-[20px] text-[20px] text-[#000000] ">
        {day}
      </h3>
      <div className="flex items-center space-x-2 ">
        <Checkbox
          id={`closed-${day}`}
          checked={closed}
          onCheckedChange={onToggleClosed}
          className="w-[20px] h-[20px] rounded-[4px] "
        />
        <label
          htmlFor={`closed-${day}`}
          className="font-normal   text-[16px] text-[#070707] !h-[19px]"
        >
          定休日
        </label>
      </div>
    </div>

    {day !== "日曜日" && !closed && (
      <div className="space-y-2  ">
        {timeSlots.map((slot, index) => (
          <div key={index} className="w-full flex items-start justify-between">
            {/* Inputs */}
            <div className="flex items-start gap-[30px] w-[calc(100%-180px)]">
              <div className="flex flex-col w-full">
                <span className="text-[16px] font-normal text-[#070707] mb-[8px] !h-[19px]">
                  開始
                </span>
                <Input
                  type="time"
                  value={slot.start}
                  onChange={(e) => onChangeSlot(index, "start", e.target.value)}
                  className="h-[48px] py-[14px] px-[16px] w-full rounded-[4px] text-center border border-[#E6E6E6] focus-visible:outline-none focus-visible:ring-0"
                />
              </div>
              <div className="flex flex-col w-full">
                <span className="text-[16px] font-normal text-[#070707] mb-[8px] !h-[19px]">
                  終了
                </span>
                <Input
                  type="time"
                  value={slot.end}
                  onChange={(e) => onChangeSlot(index, "end", e.target.value)}
                  className="h-[48px] py-[14px] px-[16px] w-full rounded-[4px] text-center border border-[#E6E6E6]  focus-visible:outline-none focus-visible:ring-0"
                />
              </div>
            </div>

            {/* Button */}
            <div className=" mt-[40px] shrink-0">
              {index > 0 ? (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => onRemoveSlot(index)}
                  className="px-[26px] py-[9px] bg-[#006BA6] text-white rounded-[4px] hover:bg-[#006BA6] hover:text-[white] cursor-pointer w-[150px] font-bold h-[36px]"
                >
                  削除
                </Button>
              ) : timeSlots.length < 2 ? (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={onAddSlot}
                  className="px-[26px] py-[9px] bg-[#006BA6] text-white rounded-[4px] hover:bg-[#006BA6]  hover:text-[white] cursor-pointer w-[150px] font-bold h-[36px]"
                >
                  追加
                </Button>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);
