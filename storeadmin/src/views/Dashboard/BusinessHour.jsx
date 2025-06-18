import React, { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {DaySchedule} from '../../components/dashboard/DaySchedule'


const WeeklySchedule = () => {
  const days = ['月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日', '日曜日'];
  const [schedule, setSchedule] = useState(
    days.map(() => ({ 
      closed: false, 
      timeSlots: [{ start: '09:30', end: '13:30' }]
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
      updated[dayIndex].timeSlots.push({ start: '16:30', end: '20:30' });
      setSchedule(updated);
    }
  };

  const handleRemoveSlot = (dayIndex, slotIndex) => {
    const updated = [...schedule];
    updated[dayIndex].timeSlots.splice(slotIndex, 1);
    setSchedule(updated);
  };

  return (
    <div className="py-[12px]  w-full ">
      {days.map((day, i) => (
        <DaySchedule
          key={i}
          day={day}
          closed={schedule[i].closed}
          timeSlots={schedule[i].timeSlots}
          onToggleClosed={() => handleToggleClosed(i)}
          onChangeSlot={(index, field, value) => handleSlotChange(i, index, field, value)}
          onAddSlot={() => handleAddSlot(i)}
          onRemoveSlot={(index) => handleRemoveSlot(i, index)}
        />
      ))}
      <div className="flex justify-start mx-[20px] my-[30px]">
        <Button
          type="button"
          onClick={() => console.log(schedule)}
          className="bg-[#006BA6] hover:bg-[#005a8c] text-white px-6 py-2 rounded w-[150px]"
        >
          保存
        </Button>
      </div>
    </div>
  );
};

export default WeeklySchedule;