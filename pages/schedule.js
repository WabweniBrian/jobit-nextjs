import ScheduleCalendar from "../components/schedules/ScheduleCalendar";
import ScheduleList from "../components/schedules/ScheduleList";

const Schedule = () => {
  return (
    <div>
      <h1 className="text-xl font-bold">My Schedules</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-14">
        <div className="md:col-span-2 mt-5 md:mt-0 h-fit md:sticky top-0">
          <ScheduleCalendar />
        </div>
        <div className="md:col-span-1  h-fit md:sticky top-0">
          <ScheduleList />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
