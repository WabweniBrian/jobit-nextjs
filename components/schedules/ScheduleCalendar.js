import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const ScheduleCalendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="card-shadow dark:shadow-none card p-3 mt-10  w-full sm:h-[70vh]">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default ScheduleCalendar;
