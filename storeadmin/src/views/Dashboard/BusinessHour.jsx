import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { DaySchedule } from "../../components/dashboard/DaySchedule";

const WeeklySchedule = () => {
  const days = [
    "月曜日",
    "火曜日",
    "水曜日",
    "木曜日",
    "金曜日",
    "土曜日",
    "日曜日",
  ];
  const [schedule, setSchedule] = useState(
    days.map(() => ({
      closed: false,
      timeSlots: [{ start: "09:30", end: "13:30" }],
    }))
  );

  const handleToggleClosed = (dayIndex) => {
    const updated = [...schedule];
    updated[dayIndex].closed = !updated[dayIndex].closed;
    setSchedule(updated);
  };

  const handleSlotChange = (dayIndex, slotIndex, field, value) => {
    const updated = [...schedule];
    updated[dayIndex].timeSlots[slotIndex][field] = value;
    setSchedule(updated);
  };

  const handleAddSlot = (dayIndex) => {
    const updated = [...schedule];
    if (updated[dayIndex].timeSlots.length < 2) {
      updated[dayIndex].timeSlots.push({ start: "16:30", end: "20:30" });
      setSchedule(updated);
    }
  };

  const handleRemoveSlot = (dayIndex, slotIndex) => {
    const updated = [...schedule];
    updated[dayIndex].timeSlots.splice(slotIndex, 1);
    setSchedule(updated);
  };

  return (
    <>
      <div className="w-full  bg-white">
        {days.map((day, i) => (
          <DaySchedule
            key={i}
            day={day}
            closed={schedule[i].closed}
            timeSlots={schedule[i].timeSlots}
            onToggleClosed={() => handleToggleClosed(i)}
            onChangeSlot={(index, field, value) =>
              handleSlotChange(i, index, field, value)
            }
            onAddSlot={() => handleAddSlot(i)}
            onRemoveSlot={(index) => handleRemoveSlot(i, index)}
          />
        ))}

        <div className="[&:nth-child(2)]:border-t border-[#E6E6E6]  pb-[20px] mx-[20px] pt-[40px]">
          <Label className="text-[16px] h-[23px] font-normal text-[#2C3237] mb-[8px] block">
            ラストオーダー時間を入力
          </Label>
          <Input
            type="input"
            placeholder="時間を入力"
            className="h-[48px] py-[14px] px-[16px] w-full w-full max-w-[429px] h-[48px] rounded-[4px]  border border-[#E6E6E6] focus-visible:outline-none focus-visible:ring-0"
          />
        </div>
      </div>
      <div className="flex justify-start  my-[30px]">
        <Button
          type="button"
          onClick={() => console.log(schedule)}
          className="bg-[#006BA6] cursor-pointer hover:bg-[#005a8c] text-white px-6 py-2 rounded w-[150px] !h-[50px]"
        >
          保存
        </Button>
      </div>
    </>
  );
};

export default WeeklySchedule;
