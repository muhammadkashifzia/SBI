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
  <div className="mx-[16px] lg:mx-[20px]">
    <div className="flex flex-col sm:flex-row sm:items-center gap-[12px] sm:gap-[24px] pt-[24px] lg:pt-[32px]">
      <h3 className="font-bold text-[18px] sm:text-[20px] text-[#000000]">{day}</h3>
      <div className="flex items-center space-x-2">
        <Checkbox
          id={`closed-${day}`}
          checked={closed}
          onCheckedChange={onToggleClosed}
          className="w-[18px] h-[18px] lg:w-[20px] lg:h-[20px] rounded-[4px] data-[state=checked]:bg-[#006BA6] data-[state=checked]:text-white border"
        />
        <label
          htmlFor={`closed-${day}`}
          className="font-normal text-[14px] sm:text-[16px] text-[#070707]"
        >
          定休日
        </label>
      </div>
    </div>

    {day !== "日曜日" && !closed && (
      <div className="space-y-4 mt-[12px]">
        {timeSlots.map((slot, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row justify-between gap-4"
          >
            <div className="flex flex-col sm:flex-row gap-[20px] lg:gap-[30px] w-full">
              <div className="flex flex-col w-full">
                <span className="text-[14px] sm:text-[16px] font-normal text-[#070707] mb-[6px]">
                  開始
                </span>
                <Input
                  type="text"
                  value={slot.start}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9:]/g, "");
                    if (
                      /^([0-9]?[0-9]?[:]?[0-9]?[0-9]?)$/.test(value) ||
                      value === ""
                    ) {
                      onChangeSlot(index, "start", value);
                    }
                  }}
                  onBlur={(e) => {
                    let value = e.target.value;
                    if (/^\d{3,}$/.test(value)) {
                      value = `${value.slice(0, 2)}:${value.slice(2)}`;
                    }
                    if (
                      /^([0-1]?[0-9]|2[0-3]):?([0-5]?[0-9])?$/.test(value)
                    ) {
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
                  className="h-[44px] sm:h-[48px] py-[12px] px-[14px] w-full rounded-[4px] text-center border border-[#E6E6E6] focus-visible:outline-none focus-visible:ring-0"
                  placeholder="09:00"
                  maxLength={5}
                />
              </div>

              <div className="flex flex-col w-full">
                <span className="text-[14px] sm:text-[16px] font-normal text-[#070707] mb-[6px]">
                  終了
                </span>
                <Input
                  type="text"
                  value={slot.end}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9:]/g, "");
                    if (
                      /^([0-9]?[0-9]?[:]?[0-9]?[0-9]?)$/.test(value) ||
                      value === ""
                    ) {
                      onChangeSlot(index, "end", value);
                    }
                  }}
                  onBlur={(e) => {
                    let value = e.target.value;
                    if (/^\d{3,}$/.test(value)) {
                      value = `${value.slice(0, 2)}:${value.slice(2)}`;
                    }
                    if (
                      /^([0-1]?[0-9]|2[0-3]):?([0-5]?[0-9])?$/.test(value)
                    ) {
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
                  className="h-[44px] sm:h-[48px] py-[12px] px-[14px] w-full rounded-[4px] text-center border border-[#E6E6E6] focus-visible:outline-none focus-visible:ring-0"
                  placeholder="18:00"
                  maxLength={5}
                />
              </div>
            </div>

            <div className="shrink-0 w-full sm:w-auto justify-start mt-[35px]">
              {index > 0 ? (
                <Button
                  type="button"
                  onClick={() => onRemoveSlot(index)}
                  className="w-full sm:w-[177px] h-[40px] text-[14px] sm:text-[15px] font-bold bg-[#006BA6] text-white rounded-[4px] hover:bg-[#006BA6]"
                >
                  削除
                </Button>
              ) : timeSlots.length < 2 ? (
                <Button
                  type="button"
                  onClick={onAddSlot}
                  className="w-full sm:w-[177px] h-[40px] text-[14px] sm:text-[15px] font-bold bg-[#006BA6] text-white rounded-[4px] hover:bg-[#006BA6]"
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
