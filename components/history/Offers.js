/* eslint-disable @next/next/no-img-element */
import { FaEllipsisV } from "react-icons/fa";
import Link from "next/link";

const Offers = () => {
  return (
    <div className="card p-2">
      <div className="card py-1 w-full text-center">
        <h1>
          Offers received <span className="text-sm text-muted">6</span>
        </h1>
      </div>
      <div className="mt-3">
        {Array.apply(null, { length: 5 }).map((_, i) => (
          <div
            className="shadow-light group dark:bg-[#21212B] rounded-lg p-3 mt-3"
            key={i}
          >
            <div className="flex justify-between">
              <div className="flex-align-center gap-2">
                <img src="/images/twitter.png" alt="" className="w-10" />
                <div>
                  <Link href="/history">
                    <a className="group-hover:text-primary">
                      <h1 className="text-lg font-bold capitalize">Twitter</h1>
                    </a>
                  </Link>
                  <p className="text-sm">California, USA</p>
                </div>
              </div>
              <div className="icon-box">
                <FaEllipsisV className="text-muted" />
              </div>
            </div>
            <div className="mt-5 flex-center-between">
              <div>
                <p className="text-sm">Contract duration</p>
                <span>3 Months</span>
              </div>
              <div>
                <p className="text-sm">Offer Salary</p>
                <span>
                  $4,598.0/ <span className="text-muted text-sm">month</span>
                </span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm">Jobe Role</p>
              <h1 className="text-lg font-bold">Junior Frontend developer</h1>
            </div>
            <div className="mt-4 flex-center-between">
              <button className="btn btn-primary">accept</button>
              <button className="btn border dark:border-hover-color">
                reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
