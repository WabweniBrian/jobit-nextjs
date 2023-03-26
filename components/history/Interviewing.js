/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BiCalendar } from "react-icons/bi";
import Link from "next/link";

const Interviewing = () => {
  return (
    <div className="card p-2">
      <div className="card py-1 w-full text-center">
        <h1>
          Interviewing <span className="text-sm text-muted">5</span>
        </h1>
      </div>
      <div className="mt-3">
        {Array.apply(null, { length: 6 }).map((_, i) => (
          <div
            className="shadow-light group dark:bg-[#21212B] rounded-lg p-3 mt-3"
            key={i}
          >
            <div className="flex-align-center gap-2">
              <img
                src="/images/avatar.png"
                alt=""
                className="w-8 rounded-full"
              />
              <div>
                <Link href="/history">
                  <a className="group-hover:text-primary">
                    <h1 className="text-lg font-bold capitalize">
                      Wabweni Brian
                    </h1>
                  </a>
                </Link>
                <p className="text-sm">California, USA</p>
              </div>
            </div>

            <div className="mt-5 flex-align-center gap-3">
              <div className="flex-align-center gap-2">
                <BiCalendar />
                <span>Sat, 28 Jan</span>
              </div>
              <span className="text-xl font-bold">.</span>
              <div>
                <p className="text-sm">10am - 12pm</p>
              </div>
            </div>

            <div className="flex-align-center gap-x-2 mt-3">
              <img src="/images/gmail.ico" alt="" className="w-4" />
              <span className="text-sm text-muted">Google Meet</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interviewing;
