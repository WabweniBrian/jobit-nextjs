/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import JobSkillTags from "../common/JobSkillTags";
import { FaBookmark } from "react-icons/fa";
import Skeleton from "../loading-skeleton/Skeleton";

const UsersList = ({ users, loading }) => {
  return !loading ? (
    <div className="mt-6 flex flex-wrap gap-4">
      {users.map((user) => (
        <div className="card p-4 group flex-1 basis-[25rem]" key={user.id}>
          <div className="flex flex-col sm:flex-row gap-3 justify-between">
            <div className="flex gap-3">
              <div>
                <img
                  src={user?.avatar || "/images/avatar.png"}
                  alt="logo"
                  className="w-14 rounded-full"
                />
              </div>
              <div>
                <Link href="/talent/[id]" as={`/talent/${user?.id}`}>
                  <a className="group-hover:text-primary transition-a">
                    <h1 className="text-xl font-semibold">
                      {user?.name} (${user?.hourly_rate}/hr)
                    </h1>
                  </a>
                </Link>
                <div className="mt-2">
                  <p className="text-primary capitalize">{user?.role}</p>
                  <div className="flex-align-center gap-2">
                    <span className="text-sm text-muted">{user?.location}</span>
                    <span className="text-xl text-muted">.</span>
                    <span className="text-sm text-muted">
                      {user?.num_of_connections} Conections
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button className="bg-slate-100 px-3 py-1 rounded-md flex-align-center gap-x-2 flex-shrink-0 text-muted hover:bg-slate-200 dark:bg-hover-color dark:hover:bg-[#252532]">
                <span>Save</span>
                <FaBookmark />
              </button>
            </div>
          </div>
          <div className="mt-3">
            <JobSkillTags
              skills={["Web Development", "JavaScript", "React", "Node.js"]}
            />
          </div>
          <p className="text-sm mt-3">{user?.overview}</p>
          <div className="flex-align-center gap-x-2 mt-3">
            <button className="btn flex-shrink-0 bg-slate-100 hover:bg-slate-200 text-muted dark:bg-hover-color dark:hover:bg-[#252532]">
              message
            </button>
            <button className="btn btn-primary flex-shrink-0">Hire</button>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      {Array.apply(null, { length: 4 }).map((_, i) => (
        <div key={i}>
          <Skeleton />
        </div>
      ))}
    </div>
  );
};

export default UsersList;
