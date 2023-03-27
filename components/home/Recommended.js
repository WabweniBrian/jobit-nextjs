/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import RecommendedSkeleton from "../loading-skeleton/RecommendedSkeleton";

const Recommended = ({ jobs, loading }) => {
  return (
    <div className="card-shadow dark:shadow-none card p-3">
      {loading ? (
        Array.apply(null, { length: 5 }).map((_, i) => (
          <RecommendedSkeleton key={i} />
        ))
      ) : (
        <>
          {jobs.slice(0, 5).map((job) => (
            <Link href={`/jobs/${job?.id}`} key={job?.id}>
              <a className="flex-center-between bg-slate-100 rounded-lg dark:bg-hover-color p-2 mt-2 !opacity-100 group">
                <div className="flex-align-center gap-2">
                  <img
                    src={job?.logo_url || "/images/netflix.png"}
                    alt="logo"
                    className="w-10 rounded-lg"
                  />
                  <div>
                    <h1 className="group-hover:text-primary">{job?.title}</h1>
                    <p>
                      <span className="text-sm">{job?.company_name}</span>
                      <span className="text-xl mx-2">.</span>
                      <span className="text-sm">{job?.company_location}</span>
                    </p>
                  </div>
                </div>
                <div>
                  <h1>
                    {job?.salary_range}/{" "}
                    <span className="text-sm text-muted">yr</span>
                  </h1>
                  <span className="text-sm text-muted">
                    {job?.type_of_employment}
                  </span>
                </div>
              </a>
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default Recommended;
