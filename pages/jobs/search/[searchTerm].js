/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/router";
import Filters from "../../../components/common/Filters";
import JobList from "../../../components/jobs/JobList";
import { filters } from "../../../data/jobFilters";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import {
  FiChevronsRight,
  FiChevronsLeft,
  FiChevronDown,
  FiDelete,
} from "react-icons/fi";
import { BiFilterAlt } from "react-icons/bi";
import JobAlert from "../../../components/search/JobAlert";
import SearchFilters from "../../../components/search/SearchFilters";
import { useUiContext } from "../../../contexts/UiContext";
import { actioTypes } from "../../../reducers/uiReducer";
import useFetch from "../../api/useFetch";
import { server } from "../../../config";

const Search = () => {
  const router = useRouter();
  const { searchTerm } = router.query;
  const { data: jobs } = useFetch(`${server}/api/jobs/search/${searchTerm}`);
  const { isFilterMenuOpen, dispatch } = useUiContext();
  const handleCloseFiltermenu = (e) => {
    if (e.target.classList.contains("filter-modal"))
      dispatch({ type: actioTypes.closeFilterMenu });
  };

  const [selectedFilters, setSelectedFilters] = useState({});

  /* Set selected filters i.e => {
  "type_of_employment": ["Full Time", "Part Time"],
  "experience_level": ["Senior Level"]
  ......
}
*/
  const handleFilterChange = (filterName, filterValue, isChecked) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters }; // Let the updated filters hold the previous filters
      if (isChecked) {
        updatedFilters[filterName] = [
          ...(prevFilters[filterName] || []),
          filterValue,
        ];
      } else {
        updatedFilters[filterName] = prevFilters[filterName].filter(
          (value) => value !== filterValue
        );
      }
      return updatedFilters;
    });
  };

  //  Filter through jobs that match the selected filters
  let filteredJobs = jobs.filter((job) => {
    for (const [filterName, selectedValues] of Object.entries(
      selectedFilters
    )) {
      if (
        selectedValues.length > 0 &&
        !selectedValues.includes(job[filterName])
      ) {
        return false;
      }
    }
    return true;
  });

  /* Counting Jobs in each filter i.e
   {
       "Full Time": 2,
       "Part Time": 3,
       "Remote": 1,
       "Directors": 0,
       "$40k -55k": 3,
       "$55k - 85k": 1,
       "Under 1 Year": 1,
       ......
   }
   */
  const counts = {};
  filters.forEach((filter) => {
    filter.filters.forEach((value) => {
      const filtered = jobs.filter((job) => job[filter.name] === value);
      counts[value] = filtered.length;
    });
  });

  // Handle Autocomplete-------------------------------------------------------------------------------------------
  const [searchQueries, setSearchQueries] = useState({
    title: "",
    location: "",
    type: "",
  });
  const [showAutoComplete, setShowAutoComplete] = useState({
    title: false,
    location: false,
    type: false,
  });
  const [autoCompletedResults, setAutoCompletedResults] = useState({
    title: [],
    location: [],
    type: [],
  });

  function filterJobsByField(jobs, field, searchQuery) {
    return jobs.filter((job) =>
      job[field].toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  useEffect(() => {
    setAutoCompletedResults((prevResults) => ({
      ...prevResults,
      title: filterJobsByField(jobs, "title", searchQueries.title),
    }));
  }, [jobs, searchQueries.title]);

  useEffect(() => {
    setAutoCompletedResults((prevResults) => ({
      ...prevResults,
      location: filterJobsByField(
        jobs,
        "company_location",
        searchQueries.location
      ),
    }));
  }, [jobs, searchQueries.location]);

  useEffect(() => {
    setAutoCompletedResults((prevResults) => ({
      ...prevResults,
      type: filterJobsByField(jobs, "type_of_employment", searchQueries.type),
    }));
  }, [jobs, searchQueries.type]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchQueries((prevQueries) => ({ ...prevQueries, [name]: value }));
    setShowAutoComplete((prevAutoComplete) => ({
      ...prevAutoComplete,
      [name]: !!value,
    }));
  };

  const handleItemClick = (name, value) => {
    setSearchQueries((prevQueries) => ({ ...prevQueries, [name]: value }));
    setShowAutoComplete((prevAutoComplete) => ({
      ...prevAutoComplete,
      [name]: false,
    }));
  };

  // Handle Search------------------------------------------------------------------------------------
  const filteredJobsBySearch = jobs.filter((job) => {
    let isTitleMatch = true;
    let isLocationMatch = true;
    let isTypeMatch = true;
    if (searchQueries.title) {
      isTitleMatch = job.title
        .toLowerCase()
        .includes(searchQueries.title.toLowerCase());
    }
    if (searchQueries.location) {
      isLocationMatch = job.company_location
        .toLowerCase()
        .includes(searchQueries.location.toLowerCase());
    }
    if (searchQueries.type) {
      isTypeMatch = job.type_of_employment
        .toLowerCase()
        .includes(searchQueries.type.toLowerCase());
    }
    return isTitleMatch && isLocationMatch && isTypeMatch;
  });

  const reset = () => {
    setSearchQueries({ title: "", location: "", type: "" });
  };

  let jobsToDisplay = jobs;
  if (searchQueries.title || searchQueries.location || searchQueries.type) {
    jobsToDisplay = filteredJobsBySearch;
  } else if (selectedFilters) {
    jobsToDisplay = filteredJobs;
  }

  // Pagination-----------------------------------------------------------------------------------------------------
  const [offset, setOffset] = useState(0);
  const jobsPerPage = 4;

  const endOffset = offset + jobsPerPage;
  const currentJobs = jobsToDisplay.slice(offset, endOffset);
  const pageCount = Math.ceil(jobsToDisplay.length / jobsPerPage);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * jobsPerPage) % jobsToDisplay.length;
    setOffset(newOffset);
  };

  return (
    <div>
      {/*---------------------------------------- Top Banner with Search filters------------------------------------- */}
      <div
        style={{ background: "url('/images/bg.jpg')" }}
        className="bg-no-repeat bg-cover rounded-lg text-slate-300"
      >
        <div className="px-6 pt-4">
          <h1 className="font-bold text-2xl">Let's find your dream Job</h1>
          <p>Tuesday, 24 Jan 2023</p>
        </div>

        <div className="mt-10">
          <SearchFilters
            handleInputChange={handleInputChange}
            handleItemClick={handleItemClick}
            searchQueries={searchQueries}
            showAutoComplete={showAutoComplete}
            autoCompletedResults={autoCompletedResults}
            reset={reset}
          />
        </div>
      </div>
      <div className="mt-8">
        {/*---------------------------------------- Job Filters | Mobile & Desktop------------------------------------- */}
        <div className="grid md:grid-cols-3 gap-x-14">
          <div className="md:col-span-1 row-start-3 md:row-start-auto h-fit md:sticky top-0">
            <JobAlert />
            <div
              className={`filter-modal ${isFilterMenuOpen && "open"}`}
              onClick={handleCloseFiltermenu}
            >
              <div className={`filter-dialog ${isFilterMenuOpen && "open"}`}>
                <div className="flex-center-between border-b dark:border-slate-800 md:hidden">
                  <p className="uppercase">Filters</p>
                  <div
                    className="icon-box md:hidden"
                    onClick={() =>
                      dispatch({ type: actioTypes.closeFilterMenu })
                    }
                  >
                    <FiDelete />
                  </div>
                </div>
                <Filters
                  selectedFilters={selectedFilters}
                  handleFilterChange={handleFilterChange}
                  counts={counts}
                />
              </div>
            </div>
          </div>
          {/*---------------------------------------- Jobs List------------------------------------------------------ */}
          <div className="md:col-span-2 mt-5 md:mt-0 h-fit md:sticky top-0">
            <div className="mt-3">
              <h1 className="text-">
                {jobs.length} jobs matched{" "}
                <span className="text-primary">"{searchTerm}"</span>
              </h1>
            </div>

            <div className="flex-center-between mt-3">
              <div
                className="flex-align-center gap-4"
                onClick={() => dispatch({ type: actioTypes.openFilterMenu })}
              >
                <div className=" md:hidden icon-box bg-white dark:bg-dark-card card-shadow dark:shadow-none card-bordered !rounded-md">
                  <BiFilterAlt />
                </div>
                <h3 className="text-sm">
                  <span className="text-muted">Showing: </span>
                  {jobsToDisplay.length} Jobs
                </h3>
              </div>
              <div className="flex-align-center gap-2">
                <p className="text-sm">Sort by:</p>
                <div className="flex-align-center gap-2">
                  <span className="text-sm text-primary">Posted Recently</span>
                  <FiChevronDown />
                </div>
              </div>
            </div>

            <div className="mt-4">
              <JobList jobs={currentJobs} />
            </div>
            <div className="mt-5">
              <ReactPaginate
                breakLabel="..."
                nextLabel={<FiChevronsRight />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel={<FiChevronsLeft />}
                renderOnZeroPageCount={null}
                containerClassName="wb-pagination"
                pageClassName="pagination-item"
                pageLinkClassName="pagination-link"
                activeClassName="pagination-link-active"
                previousLinkClassName="prev"
                nextLinkClassName="next"
                disabledClassName="disabled"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
