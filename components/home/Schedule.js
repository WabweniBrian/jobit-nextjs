/* eslint-disable @next/next/no-img-element */
import { FiChevronDown, FiClock } from "react-icons/fi";
import Link from "next/link";
import { schedules } from "../../data/schedules";

const Schedule = () => {
  return (
    <div className="card-shadow dark:shadow-none card p-3 mt-4">
      <div className="flex-center-between">
        <h1 className="text-lg">schedule</h1>
        <div className="flex-align-center gap-2">
          <p className="text-sm">Sort by:</p>
          <div className="flex-align-center gap-2">
            <span className="text-sm text-primary">This Week</span>
            <FiChevronDown />
          </div>
        </div>
      </div>
      {schedules.slice(0, 5).map((schedule) => (
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
      <Link href="/schedule">
        <a className="w-full !opacity-100 block text-center py-2 capitalize bg-slate-100 hover:bg-slate-200 transition-a dark:bg-hover-color rounded-md mt-4">
          sell all schedule
        </a>
      </Link>
    </div>
  );
};

export default Schedule;
