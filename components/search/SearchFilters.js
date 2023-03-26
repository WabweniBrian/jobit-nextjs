import React from "react";
import { BiBriefcase, BiMap, BiSearch } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";

const SearchFilters = ({
  handleInputChange,
  handleItemClick,
  searchQueries,
  showAutoComplete,
  autoCompletedResults,
  // handleSearch,
  reset,
}) => {
  const titles = [
    ...new Set(autoCompletedResults.title.map((job) => job.title)),
  ];
  const locations = [
    ...new Set(
      autoCompletedResults.location.map((job) => job.company_location)
    ),
  ];
  const types = [
    ...new Set(autoCompletedResults.type.map((job) => job.type_of_employment)),
  ];
  return (
    <div>
      <div className="flex-center-between relative flex-col md:flex-row gap-y-4 md:gap-y-0 md:gap-x-4 md:bg-white shadow-none md:dark:shadow-none md:dark:bg-dark-card rounded-lg px-4 py-2">
        <div className="filter relative">
          <BiSearch />
          <input
            type="text"
            placeholder="Job Title.."
            className="border-none outline-none placeholder:text-sm bg-inherit w-full text-slate-500 dark:text-slate-300"
            name="title"
            value={searchQueries.title}
            onChange={handleInputChange}
          />
          {showAutoComplete.title && (
            <div className="absolute top-full z-50 p-2 bg-white card dark:bg-dark-card text-slate-600 dark:text-slate-300 card-shadow dark:shadow-none rounded-lg w-full">
              {autoCompletedResults.title.length > 0 ? (
                <ul>
                  {titles.map((title) => (
                    <li
                      className="p-3 cursor-default sm:cursor-pointer hover:bg-slate-100 dark:hover:bg-hover-color rounded-lg"
                      key={title}
                      onClick={() => handleItemClick("title", title)}
                    >
                      {title}
                    </li>
                  ))}
                </ul>
              ) : (
                <h1>No such Term</h1>
              )}
            </div>
          )}
        </div>
        <div className="filter !justify-between relative">
          <BiMap />
          <input
            type="text"
            placeholder="Enter Location"
            className="border-none outline-none placeholder:text-sm bg-inherit w-full text-slate-500 dark:text-slate-300"
            name="location"
            value={searchQueries.location}
            onChange={handleInputChange}
          />
          <FiChevronDown />
          {showAutoComplete.location && (
            <div className="absolute top-full z-50 p-2 bg-white card dark:bg-dark-card text-slate-600 dark:text-slate-300 card-shadow dark:shadow-none rounded-lg w-full">
              {autoCompletedResults.location.length > 0 ? (
                <ul>
                  {locations.map((location) => (
                    <li
                      className="p-3 cursor-default sm:cursor-pointer hover:bg-slate-100 dark:hover:bg-hover-color rounded-lg"
                      key={location}
                      onClick={() => handleItemClick("location", location)}
                    >
                      {location}
                    </li>
                  ))}
                </ul>
              ) : (
                <h1>No such Term</h1>
              )}
            </div>
          )}
        </div>
        <div className="filter relative">
          <BiBriefcase />
          <input
            type="text"
            placeholder="Job Type"
            className="border-none outline-none placeholder:text-sm bg-inherit w-full text-slate-500 dark:text-slate-300"
            name="type"
            value={searchQueries.type}
            onChange={handleInputChange}
          />
          {showAutoComplete.type && (
            <div className="absolute top-full z-50 p-2 bg-white card dark:bg-dark-card text-slate-600 dark:text-slate-300 card-shadow dark:shadow-none rounded-lg w-full">
              {autoCompletedResults.type.length > 0 ? (
                <ul>
                  {types.map((type) => (
                    <li
                      className="p-3 cursor-default sm:cursor-pointer hover:bg-slate-100 dark:hover:bg-hover-color rounded-lg"
                      key={type}
                      onClick={() => handleItemClick("type", type)}
                    >
                      {type}
                    </li>
                  ))}
                </ul>
              ) : (
                <h1>No such Term</h1>
              )}
            </div>
          )}
        </div>
        <div className="self-center">
          <button className="btn btn-primary" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
