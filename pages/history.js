import Applied from "../components/history/Applied";
import Interviewing from "../components/history/Interviewing";
import Offers from "../components/history/Offers";
import Saved from "../components/history/Saved";

const History = () => {
  return (
    <div>
      <div className="flex-center-between">
        <h1 className="text-xl font-bold">Job History</h1>
        <button className="btn btn-primary">manage job post</button>
      </div>
      <div className="mt-5 flex flex-wrap gap-8">
        <div className="flex-1 basis-[16rem]">
          <Applied />
        </div>
        <div className="flex-1 basis-[16rem]">
          <Saved />
        </div>
        <div className="flex-1 basis-[16rem]">
          <Offers />
        </div>
        <div className="flex-1 basis-[16rem]">
          <Interviewing />
        </div>
      </div>
    </div>
  );
};

export default History;
