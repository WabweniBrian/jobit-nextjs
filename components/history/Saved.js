/* eslint-disable @next/next/no-img-element */
import { FaTimes } from "react-icons/fa";
import Link from "next/link";

const Saved = () => {
  return (
    <div className="card p-2">
      <div className="card py-1 w-full text-center">
        <h1>
          Saved Jobs <span className="text-sm text-muted">28</span>
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
                <img src="/images/whatsapp.png" alt="" className="w-10" />
              </div>
              <div className="icon-box">
                <FaTimes className="text-muted" />
              </div>
            </div>
            <div className="mt-5">
              <Link href="/jobs/123">
                <a className="group-hover:text-primary">
                  <h1 className="text-lg font-bold capitalize">
                    web developer
                  </h1>
                </a>
              </Link>
              <p className="text-sm">
                <span className="text-primary">WhatsApp Inc.</span> California,
                USA<span></span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Saved;
