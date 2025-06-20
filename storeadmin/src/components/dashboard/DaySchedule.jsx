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
  <div className="mx-[20px]">
    <div className="flex items-center gap-[42px] mt-[30px] mb-[20px]">
      <h3 className="font-bold leading-[20px] text-[20px] text-[#000000]">
        {day}
      </h3>
      <div className="flex items-center space-x-2">
        <Checkbox
          id={`closed-${day}`}
          checked={closed}
          onCheckedChange={onToggleClosed}
          className="w-[20px] h-[20px] rounded-[4px] data-[state=checked]:bg-[#006BA6] data-[state=checked]:text-white data-[state=checked]:border-none border"
        />
        <label
          htmlFor={`closed-${day}`}

          className="font-normal text-[16px] text-[#070707] !h-[23px]"
        >
          定休日
        </label>
      </div>
    </div>

    {day !== "日曜日" && !closed && (
      <div className="space-y-2">
        {timeSlots.map((slot, index) => (
          <div key={index} className="w-full flex items-start justify-between">
            <div className="flex items-start gap-[30px] w-[80%]">
              <div className="flex flex-col w-full">
                <span className="text-[16px] font-normal text-[#070707] mb-[8px] !h-[19px]">
                  開始
                </span>
                <Input
                  type="text"
                  value={slot.start}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9:]/g, '');
                    if (/^([0-9]?[0-9]?[:]?[0-9]?[0-9]?)$/.test(value) || value === "") {
                      onChangeSlot(index, "start", value);
                    }
                  }}
                  onBlur={(e) => {
                    let value = e.target.value;
                    // Auto-insert colon if missing
                    if (/^\d{3,}$/.test(value)) {
                      value = `${value.slice(0, 2)}:${value.slice(2)}`;
                    }
                    if (/^([0-1]?[0-9]|2[0-3]):?([0-5]?[0-9])?$/.test(value)) {
                      const [hours = "00", minutes = "00"] = value.split(":");
                      onChangeSlot(
                        index,
                        "start",
                        `${hours.padStart(2, "0")}:${minutes.padEnd(2, "0")}`
                      );
                    } else {
                      onChangeSlot(index, "start", slot.start);
                    }
                  }}
                  className="time-center h-[48px] py-[14px] px-[16px] w-full rounded-[4px] text-center border border-[#E6E6E6] focus-visible:outline-none focus-visible:ring-0"
                  placeholder="09:00"
                  maxLength={5}
                />
              </div>

              <div className="flex flex-col w-full">
                <span className="text-[16px] font-normal text-[#070707] mb-[8px] !h-[19px]">
                  終了
                </span>
                <Input
                  type="text"
                  value={slot.end}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9:]/g, '');
                    if (/^([0-9]?[0-9]?[:]?[0-9]?[0-9]?)$/.test(value) || value === "") {
                      onChangeSlot(index, "end", value);
                    }
                  }}
                  onBlur={(e) => {
                    let value = e.target.value;
                    // Auto-insert colon if missing
                    if (/^\d{3,}$/.test(value)) {
                      value = `${value.slice(0, 2)}:${value.slice(2)}`;
                    }
                    if (/^([0-1]?[0-9]|2[0-3]):?([0-5]?[0-9])?$/.test(value)) {
                      const [hours = "00", minutes = "00"] = value.split(":");
                      onChangeSlot(
                        index,
                        "end",
                        `${hours.padStart(2, "0")}:${minutes.padEnd(2, "0")}`
                      );
                    } else {
                      onChangeSlot(index, "end", slot.end);
                    }
                  }}
                  className="time-center h-[48px] py-[14px] px-[16px] w-full rounded-[4px] text-center border border-[#E6E6E6] focus-visible:outline-none focus-visible:ring-0"
                  placeholder="18:00"
                  maxLength={5}
                />
              </div>
            </div>

            <div className="mt-[40px] shrink-0">
              {index > 0 ? (
                <Button
                  type="button"
                  onClick={() => onRemoveSlot(index)}
                  className="px-[26px] py-[9px] bg-[#006BA6] text-white rounded-[4px] hover:bg-[#006BA6] hover:text-white cursor-pointer w-[177px] cursor-pointer font-bold h-[36px]"
                >
                  削除
                </Button>
              ) : timeSlots.length < 2 ? (
                <Button
                  type="button"
                  onClick={onAddSlot}
                  className="px-[26px] py-[9px] bg-[#006BA6] text-white rounded-[4px] hover:bg-[#006BA6] hover:text-white cursor-pointer w-[177px] cursor-pointer font-bold h-[36px]"
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