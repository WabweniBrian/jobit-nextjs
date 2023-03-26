import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import Stats from "../components/home/Stats";
import BarChart from "../components/home/BarChart";
import LatestJobs from "../components/home/LatestJobs";
import FeaturedCompanies from "../components/home/FeaturedCompanies";
import Recommended from "../components/home/Recommended";
import Schedule from "../components/home/Schedule";

const Home = ({ jobs }) => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Welcome, Brian</h1>
      <p>Tuesday, 24 Jan 2023</p>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <Stats />
        <BarChart />
      </div>
      <div className="mt-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {/*---------------------------------------- Featured & Latest Jobs------------------------------------- */}
          <div className="md:col-span-2 h-fit sm:sticky top-0">
            <div className="flex-center-between mb-4">
              <h1 className="text-xl font-bold">Latest Job Posts</h1>
              <Link href="/search">
                <a className="flex-align-center gap-x-2 text-primary">
                  <span>See All</span>
                  <FiArrowRight />
                </a>
              </Link>
            </div>
            <LatestJobs jobs={jobs} />
            <FeaturedCompanies />
          </div>
          {/*---------------------------------------- Recommended & Schedule------------------------------------- */}
          <div className="md:col-span-1 h-fit sm:sticky top-0">
            <div>
              <div className="flex-center-between mb-4">
                <h1 className="text-xl font-bold">Recommended for you</h1>
                <Link href="/search">
                  <a className="flex-align-center gap-x-2 text-primary">
                    <span>See All</span>
                    <FiArrowRight />
                  </a>
                </Link>
              </div>
              <Recommended jobs={jobs} />
              <Schedule />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/jobs`);

  const jobs = await res.json();

  return {
    props: {
      jobs,
    },
  };
};
