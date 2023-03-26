/* eslint-disable @next/next/no-img-element */
import { BiBriefcase } from "react-icons/bi";
import { FiClock, FiUsers } from "react-icons/fi";
import Link from "next/link";
import JobSkillTags from "../common/JobSkillTags";

const LatestJobs = ({ jobs }) => {
  return (
    <div className="md:col-span-2 flex flex-wrap gap-3">
      {jobs?.slice(0, 4).map((job) => (
        <div
          className="card p-3 flex-1 basis-[16rem] group sm:cursor-pointer"
          key={job.id}
        >
          <div className="flex-align-center gap-3">
            <img
              src={job?.logo_url || "/images/whatsapp.png"}
              alt="logo"
              className="w-14 rounded-lg"
            />
            <div>
              <Link href={`jobs/${job?.id}`}>
                <a className="!opacity-100 group-hover:text-primary">
                  <h1 className="text-xl font-semibold">{job?.title}</h1>
                </a>
              </Link>
              <JobSkillTags skills={job?.skills} />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm">{job?.description.slice(0, 200)}...</p>
            <div className="flex-align-center gap-x-2 mb-2 mt-4">
              <div className=" bg-slate-200 rounded-sm flex-align-center flex-col sm:flex-row gap-2 px-2 py-1 dark:bg-hover-color">
                <BiBriefcase />
                <span className="text-muted sm:text-sm flex-shrink-0">
                  {job?.type_of_employment}
                </span>
              </div>
              <div className=" bg-slate-200 rounded-sm flex-align-center flex-col sm:flex-row gap-2 px-2 py-1 dark:bg-hover-color">
                <FiUsers />
                <span className="text-muted sm:text-sm flex-shrink-0">
                  45 Applied
                </span>
              </div>
              <div className=" bg-slate-200 rounded-sm flex-align-center flex-col sm:flex-row gap-2 px-2 py-1 dark:bg-hover-color">
                <FiClock />
                <span className="text-muted  sm:text-sm flex-shrink-0">
                  3 days left
                </span>
              </div>
            </div>
            <div className="flex-center-between mt-4">
              <h1>
                {job?.salary_range}/
                <span className="text-sm text-muted">month</span>
              </h1>
              <Link href="/apply">
                <a className="btn btn-primary">apply now</a>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestJobs;
