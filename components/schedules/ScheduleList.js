/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FiChevronDown, FiClock } from "react-icons/fi";
import { schedules } from "../../data/schedules";

const ScheduleList = () => {
  return (
    <div className="card-shadow dark:shadow-none card p-3 mt-4">
      <div className="flex-center-between">
        <h1 className="text-lg">Schedules</h1>
        <div className="flex-align-center gap-2">
          <p className="text-sm">Sort by:</p>
          <div className="flex-align-center gap-2">
            <span className="text-sm text-primary">This Week</span>
            <FiChevronDown />
          </div>
        </div>
      </div>
      {schedules.map((schedule) => (
        <div
          className=" bg-slate-100 rounded-lg dark:bg-hover-color p-2 mt-2"
          key={schedule.id}
        >
          <div className="flex-align-center gap-3">
            <div className="w-14 h-14 bg-white rounded-lg flex-shrink-0 dark:bg-dark-card grid place-items-center text-center">
              <h1 className="text-lg">{schedule.date}</h1>
              <span className="text-muted text-sm">{schedule.day}</span>
            </div>

            <div>
              <h1>{schedule.title}</h1>
              <div className="flex-align-center gap-x-4">
                <div className="flex-align-center gap-x-2">
                  <FiClock />
                  <span className="text-sm text-muted">{schedule.title}</span>
                </div>
                <div className="flex-align-center gap-x-2">
                  <img src="/images/gmail.ico" alt="" className="w-4" />
                  <span className="text-sm text-muted">Google Meet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScheduleList;
