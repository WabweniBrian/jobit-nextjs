import { useState } from "react";
import { FiChevronsRight, FiChevronsLeft } from "react-icons/fi";
import ReactPaginate from "react-paginate";
import UsersList from "../../components/talent/UsersList";
import { server } from "../../config";
import useFetch from "../api/useFetch";

const Talent = () => {
  const { data: users, loading } = useFetch(`${server}/api/users`);
  // Pagination-----------------------------------------------------------------------------------------------------
  const [offset, setOffset] = useState(0);
  const usersPerPage = 4;

  const endOffset = offset + usersPerPage;
  const currentUsers = users.slice(offset, endOffset);
  const pageCount = Math.ceil(users.length / usersPerPage);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * usersPerPage) % users.length;
    setOffset(newOffset);
  };

  return (
    <div>
      <h1 className="font-bold text-2xl">Explore Talent</h1>
      <p>Tuesday, 24 Jan 2023</p>
      <UsersList users={currentUsers} loading={loading} />
      {!loading && (
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
      )}
    </div>
  );
};

export default Talent;
