import JobList from "../../components/jobs/JobList";

const Jobs = ({ jobs }) => {
  return (
    <div className="max-w-[800px] w-[96%] my-5 mx-auto">
      <h1 className="text-center text-4xl text-green-500 font-bold">Jobs</h1>
      <div className="mt-5">
        <JobList jobs={jobs} />
      </div>
    </div>
  );
};

export default Jobs;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/jobs");

  const jobs = await res.json();

  return {
    props: {
      jobs,
    },
    revalidate: 60,
  };
};
