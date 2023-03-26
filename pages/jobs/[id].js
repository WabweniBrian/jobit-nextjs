import Image from "next/image";
import Link from "next/link";
import JobSkillTags from "../../components/common/JobSkillTags";
import { BiBookmark, BiCircle, BiShareAlt } from "react-icons/bi";
import RelatedJobs from "../../components/singleJob/RelatedJobs";
import { useRouter } from "next/router";
import useFetch from "../api/useFetch";

const SingleJob = ({ job }) => {
  const router = useRouter();
  const { id } = router.query;
  const {
    title,
    company_name,
    company_location,
    skills,
    experience_level,
    type_of_employment,
    salary_range,
    experience,
    description,
    requirements_and_responsibilities,
    logo_url,
  } = job;

  const { data: jobs } = useFetch("http://localhost:3000/api/jobs");
  const relatedJobs = jobs.filter(
    (job) =>
      Number(job.id) !== Number(id) &&
      (job.title === title || job.company_name === company_name)
  );

  return (
    <div className="grid md:grid-cols-3 gap-x-14">
      <div className="md:col-span-2 h-fit md:sticky top-0">
        <div className="card overflow-hidden">
          <div className="relative">
            <div className="image-wrapper">
              <Image
                src="/photo-3.jpg"
                alt="Banner"
                layout="fill"
                className="rounded-lg !relative  !w-full !h-[200px] !object-cover"
              />
            </div>
            <div className="-mt-28">
              <Image
                src={"/whatsapp.png"}
                alt="Logo"
                height={80}
                width={80}
                className="!relative !h-20  rounded-lg"
              />
            </div>
          </div>
          <div className="pt-5 px-6 pb-6">
            <div className="flex-center-between">
              <h1 className="text-xl font-semibold">{title}</h1>
              <div className="flex-align-center gap-x-2">
                <div className="icon-box card-shadow dark:shadow-none card-bordered !rounded-md">
                  <BiBookmark />
                </div>
                <div className="icon-box card-shadow dark:shadow-none card-bordered !rounded-md">
                  <BiShareAlt />
                </div>
              </div>
            </div>
            <div className="flex-center-between gap-x-2 mt-4">
              <p className="text-sm">
                <span className="text-primary">{company_name}</span>{" "}
                <span>{company_location}</span>
              </p>

              <span className="text-sm">
                <span className="text-muted">Posted 8 days ago</span> 98
                Applicants
              </span>
            </div>

            {/*---------------------------------------- Skills------------------------------------- */}
            <div className="mt-4">
              <JobSkillTags skills={skills} />
            </div>

            {/*---------------------------------------- About ------------------------------------ */}
            <div className="mt-5">
              <div className="card">
                <div className="flex flex-col sm:flex-row sm:flex-center-between">
                  <div className="p-2">
                    <span className="text-sm capitalize text-muted">
                      Experience
                    </span>
                    <h1 className="capitalize">{experience}</h1>
                  </div>
                  <div className="w-full h-[1px] sm:h-16 sm:w-[1px] bg-slate-200 dark:bg-hover-color"></div>
                  <div className="p-2">
                    <span className="text-sm capitalize text-muted">
                      work level
                    </span>
                    <h1 className="capitalize">{experience_level}</h1>
                  </div>
                  <div className="w-full h-[1px] sm:h-16 sm:w-[1px] bg-slate-200 dark:bg-hover-color"></div>
                  <div className="p-2">
                    <span className="text-sm capitalize text-muted">
                      employee type
                    </span>
                    <h1 className="capitalize">{type_of_employment}</h1>
                  </div>
                  <div className="w-full h-[1px] sm:h-16 sm:w-[1px] bg-slate-200 dark:bg-hover-color"></div>
                  <div className="p-2">
                    <span className="text-sm capitalize text-muted">
                      offer salary
                    </span>
                    <h1 className="capitalize">
                      {salary_range}/
                      <span className="text-sm text-muted"></span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            {/*---------------------------------------- Job Overview--------------------------------------------- */}
            <div className="mt-4">
              <h1 className="text-lg font-semibold">Overview</h1>
              <p className="leading-7">{description}</p>
            </div>

            {/*---------------------------------------- Job Description------------------------------------- */}
            <div className="mt-4">
              <h1 className="text-lg font-semibold">
                Responsibilities & Requirements
              </h1>
              <div className="mt-3">
                {requirements_and_responsibilities?.map((res, i) => (
                  <div className="flex-align-center gap-x-2 mt-3" key={i}>
                    <BiCircle className="text-xs text-primary flex-shrink-0" />
                    <p className="text-sm">{res}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-end mt-3">
                <Link
                  href="/jobs/apply"
                  className="btn btn-primary flex-shrink-0"
                >
                  apply now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-span-1 h-fit md:sticky top-0">
        <RelatedJobs jobs={relatedJobs} />
      </div>
    </div>
  );
};

export default SingleJob;

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/jobs");

  const jobs = await res.json();

  const paths = jobs.map((job) => ({ params: { id: job.id.toString() } }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/api/jobs/${params.id}`);

  const job = await res.json();

  if (!job) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      job,
    },
  };
};