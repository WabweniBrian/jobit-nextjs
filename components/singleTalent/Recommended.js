/* eslint-disable @next/next/no-img-element */
import { BiBookmark } from "react-icons/bi";
import Link from "next/link";

const Recommended = ({ users }) => {
  return users.length > 0 ? (
    <div className="mt-6 md:mt-0">
      <h1 className="text-xl font-bold">Recommended Talents</h1>
      {users.map((user) => (
        <div className="card p-3 mt-3 group" key={user.id}>
          <div className="flex justify-between">
            <div className="flex-align-center gap-3">
              <img
                src={user?.avatar || "/images/avatar.png"}
                alt={user?.name}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <Link href="/talent/[id]" as={`/talent/${user?.id}`}>
                  <a className="group-hover:text-primary">
                    <h1 className="text-lg font-bold">{user?.name}</h1>
                  </a>
                </Link>
                <span className="text-sm text-muted">{user?.role}</span>
              </div>
            </div>
            <div className="icon-box card-shadow dark:shadow-none card-bordered !rounded-md">
              <BiBookmark />
            </div>
          </div>
          <div className="flex-center-between mt-3 rounded-lg p-2 bg-slate-100 dark:bg-hover-color">
            <div>
              <p className="text-sm text-muted">Exp</p>
              <h5>{user?.experience} Yrs</h5>
            </div>
            <div>
              <p className="text-sm text-muted">Level</p>
              <h5>{user?.level}</h5>
            </div>
            <div>
              <p className="text-sm text-muted">Type</p>
              <h5>{user?.availability}</h5>
            </div>
            <div>
              <p className="text-sm text-muted">Hourly Rate</p>
              <h5>
                ${user?.hourly_rate}/{" "}
                <span className="text-sm text-muted">hr</span>
              </h5>
            </div>
          </div>
          <button className="btn btn-primary-light w-full mt-3">connect</button>
        </div>
      ))}
    </div>
  ) : (
    <div>
      <h1 className="text-2xl font-semibold mt-4">No Recommended talent</h1>
    </div>
  );
};

export default Recommended;
