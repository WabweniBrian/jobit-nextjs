import { BiFilterAlt } from "react-icons/bi";
import {
  FiChevronDown,
  FiDelete,
  FiChevronsRight,
  FiChevronsLeft,
} from "react-icons/fi";
import { useUiContext } from "../contexts/UiContext";
import { actioTypes } from "../reducers/uiReducer";
import EventFilters from "../components/Events/EventFilters";
import EventsList from "../components/Events/EventsList";
import ReactPaginate from "react-paginate";
import { useState } from "react";
const Events = ({ events }) => {
  const { dispatch, isEventFiltersOpen } = useUiContext();
  const handleCloseEventFilters = (e) => {
    if (e.target.classList.contains("filter-modal"))
      dispatch({ type: actioTypes.closeEventFilters });
  };

  // Pagination-----------------------------------------------------------------------------------------------------
  const [offset, setOffset] = useState(0);
  const eventsPerPage = 4;

  const endOffset = offset + eventsPerPage;
  const currentEvents = events.slice(offset, endOffset);
  const pageCount = Math.ceil(events.length / eventsPerPage);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * eventsPerPage) % events.length;
    setOffset(newOffset);
  };

  return (
    <div>
      <div className="mt-8">
        <div className="grid md:grid-cols-7 gap-x-14">
          <div className="md:col-span-2  h-fit md:sticky top-0">
            {/*---------------------------------------- Filters Mobile  & Desktop------------------------------------- */}
            <div
              className={`filter-modal ${isEventFiltersOpen && "open"}`}
              onClick={handleCloseEventFilters}
            >
              <div className={`filter-dialog ${isEventFiltersOpen && "open"}`}>
                <div className="flex-center-between border-b dark:border-slate-800 md:hidden">
                  <p className="uppercase">Filters</p>
                  <div
                    className="icon-box md:hidden"
                    onClick={() =>
                      dispatch({ type: actioTypes.closeEventFilters })
                    }
                  >
                    <FiDelete />
                  </div>
                </div>
                <EventFilters />
              </div>
            </div>
          </div>

          {/*---------------------------------------- Events List--------------------------------------------------- */}
          <div className="md:col-span-5 mt-5 md:mt-0 h-fit md:sticky top-0">
            <div className="flex-center-between">
              <div
                className="flex-align-center gap-4"
                onClick={() => dispatch({ type: actioTypes.openEventFilters })}
              >
                <div className=" md:hidden icon-box bg-white dark:bg-dark-card card-shadow dark:shadow-none card-bordered !rounded-md">
                  <BiFilterAlt />
                </div>
                <h3 className="text-sm">
                  <span className="text-muted">Showing:</span>
                  {events.length} Events
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
            <EventsList events={currentEvents} />
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

export default Events;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/meetups");

  const events = await res.json();

  return {
    props: {
      events,
    },
    revalidate: 60,
  };
};
