/* eslint-disable @next/next/no-img-element */
import { BiBriefcase, BiMap } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { companies } from "../../data/companies";

const FeaturedCompanies = () => {
  return (
    <div className="mt-8">
      <h1 className="text-xl font-bold">Feauted Companies</h1>
      <div className="flex gap-3 flex-wrap mt-4">
        {companies.map((company) => (
          <div className="flex-1 basis-[12rem] card p-3" key={company.id}>
            <div className="flex-align-center gap-3">
              <img
                src={company?.logo_url || "/images/twitter.png"}
                alt=""
                className="w-10 rounded-lg"
              />
              <div>
                <h1>{company?.name}</h1>
                <div className="flex-align-center gap-2">
                  <FaStar className="text-yellow-500 text-sm" />
                  <span className="text-muted text-sm">4.8k</span>
                </div>
              </div>
            </div>
            <div className="flex-align-center gap-2 mt-2">
              <BiMap className="text-muted" />
              <span className="text-muted">{company?.location}</span>
            </div>
            <div className="flex-align-center gap-2 mt-2">
              <BiBriefcase className="text-muted" />
              <span className="text-muted">
                {company?.number_of_vacancies} Job Vacancies
              </span>
            </div>
            <button className="w-full py-2 bg-slate-100 hover:bg-slate-200 transition-a dark:bg-hover-color rounded-md capitalize mt-3">
              more details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCompanies;
