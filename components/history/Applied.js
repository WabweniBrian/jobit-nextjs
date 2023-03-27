/* eslint-disable @next/next/no-img-element */
import { FaEllipsisV } from "react-icons/fa";
import { BiLinkAlt } from "react-icons/bi";
import Link from "next/link";

const Applied = () => {
  return (
    <div className="card p-2">
      <div className="card py-1 w-full text-center">
        <h1>
          Applied <span className="text-sm text-muted">6</span>
        </h1>
      </div>
      <div className="mt-3">
        {Array.apply(null, { length: 6 }).map((_, i) => (
          <div
            className="shadow-light group dark:bg-[#21212B] rounded-lg p-3 mt-3"
            key={i}
          >
            <div className="flex justify-between">
              <div>
                <img src="/images/netflix.png" alt="" className="w-10" />
              </div>
              <div className="icon-box">
                <FaEllipsisV className="text-muted" />
              </div>
            </div>
            <div className="mt-5">
              <Link href="/jobs/123">
                <a className="group-hover:text-primary">
                  <h1 className="text-lg font-bold capitalize">
                    user experience designer
                  </h1>
                </a>
              </Link>
              <p className="text-sm">
                <span className="text-primary">Netfix Inc.</span> California,
                USA<span></span>
              </p>
            </div>
            <div className="mt-4 flex-center-between">
              <div className="flex-align-center gap-2">
                <span className="px-2 py-1 rounded-md text-slate-600 bg-secondaryLightGreen">
                  Full Time
                </span>
                <p className="text-sm">8 hours ago</p>
              </div>
              <div className="flex-align-center gap-1">
                <BiLinkAlt />
                <span className="text-muted">3</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applied;
