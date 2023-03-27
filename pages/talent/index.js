import { useState } from "react";
import { FiChevronsRight, FiChevronsLeft } from "react-icons/fi";
import ReactPaginate from "react-paginate";
import UsersList from "../../components/talent/UsersList";
import { server } from "../../config";

const Talent = ({ users }) => {
  // Pagination-----------------------------------------------------------------------------------------------------
  const [offset, setOffset] = useState(0);
  const jobsPerPage = 4;

  const endOffset = offset + jobsPerPage;
  const currentUsers = users.slice(offset, endOffset);
  const pageCount = Math.ceil(users.length / jobsPerPage);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * jobsPerPage) % users.length;
    setOffset(newOffset);
  };

  return (
    <div>
      <h1 className="font-bold text-2xl">Explore Talent</h1>
      <p>Tuesday, 24 Jan 2023</p>
      <UsersList users={currentUsers} />
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
  );
};

export default Talent;

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/users`);

  const users = await res.json();

  return {
    props: {
      users,
    },
  };
};
