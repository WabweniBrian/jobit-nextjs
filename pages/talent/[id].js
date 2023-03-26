/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useRouter } from "next/router";
import useFetch from "../api/useFetch";
import Recommended from "../../components/singleTalent/Recommended";
import Skills from "../../components/singleTalent/Skills";

const SingleTalent = ({ user }) => {
  const router = useRouter();
  const { id } = router.query;
  const { data: users } = useFetch("http://localhost:3000/api/users");
  const recommendedUsers = users.filter((user) => user.id !== id);
  return (
    <div className="grid md:grid-cols-3 gap-x-14">
      <div className="md:col-span-2 h-fit md:sticky top-0">
        <div className="card overflow-hidden">
          <div className="relative">
            <img
              src="/images/talent.jpg"
              alt=""
              className="h-full sm:h-[200px] object-cover w-full"
            />
            <img
              src={user?.avatar || "/images/talent.jpg"}
              alt=""
              className="w-16 left-10 -bottom-8 absolute rounded-lg"
            />
          </div>
          <div className="pt-14 px-6 pb-6">
            <div className="flex-center-between">
              <h1 className="text-xl font-semibold">
                {user?.name} (${user?.hourly_rate}/hr)
              </h1>
              <div className="flex-align-center gap-x-2">
                <button className="btn flex-shrink-0 bg-slate-100 hover:bg-slate-200 text-muted dark:bg-hover-color dark:hover:bg-[#252532]">
                  message
                </button>
                <button className="btn btn-primary flex-shrink-0">
                  connect
                </button>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-primary">{user?.role}</p>
              <div className="flex-align-center gap-2">
                <span className="text-sm text-muted">{user?.location}</span>
                <span className="text-xl text-muted">.</span>
                <span className="text-sm text-muted">
                  {user?.num_of_connections} Conections
                </span>
              </div>
            </div>
            <div className="mt-5">
              <div className="card">
                <div className="flex flex-col sm:flex-row sm:flex-center-between">
                  <div className="p-2">
                    <span className="text-sm capitalize text-muted">
                      Email Address
                    </span>
                    <h1 className="capitalize">{user?.email}</h1>
                  </div>
                  <div className="w-full h-[1px] sm:h-16 sm:w-[1px] bg-slate-200 dark:bg-hover-color"></div>
                  <div className="p-2">
                    <span className="text-sm capitalize text-muted">Phone</span>
                    <h1 className="capitalize">{user?.phone}</h1>
                  </div>
                  <div className="w-full h-[1px] sm:h-16 sm:w-[1px] bg-slate-200 dark:bg-hover-color"></div>
                  <div className="p-2">
                    <p className="text-sm capitalize">Portifolio</p>
                    <a href="#" className="text-primary">
                      {user?.portfolio}
                    </a>
                  </div>
                  <div className="w-full h-[1px] sm:h-16 sm:w-[1px] bg-slate-200 dark:bg-hover-color"></div>
                </div>
              </div>
            </div>
            {/*----------------------------------------------- Biogarphy------------------------------ */}
            <div className="py-4">
              <h1 className="text-lg font-semibold">Biography</h1>
              <p className="text-sm mt-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
                non, itaque corporis sed recusandae, est voluptas asperiores
                impedit quidem ad molestias voluptate laudantium esse tempora,
                autem alias. Pariatur laudantium corrupti nam sapiente, earum
                reiciendis placeat ab modi similique voluptate eaque facere odio
                vitae ratione velit sequi perferendis ex, molestiae libero.
              </p>
              <p className="text-sm mt-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
                non, itaque corporis sed recusandae, est voluptas asperiores
                impedit quidem ad molestias voluptate laudantium esse tempora,
                autem alias. Pariatur laudantium corrupti nam sapiente, earum
                reiciendis placeat ab modi similique voluptate eaque facere odio
                vitae ratione velit sequi perferendis ex, molestiae libero.
              </p>
            </div>
            {/*---------------------------------------- Skills------------------------------------- */}
            <div className="py-4 border-y dark:border-hover-color">
              <h1 className="text-lg font-semibold mb-3">Skills</h1>
              <Skills />
            </div>
            {/*------------------------------------- Job Experience---------------------------------- */}
            <div className="py-4 border-b dark:border-hover-color">
              <h1 className="text-lg font-semibold mb-3">Job Experience</h1>
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="flex gap-3">
                  <div>
                    <img src="/images/whatsapp.png" alt="" className="w-10" />
                  </div>
                  <div>
                    <h1 className="text-lg font-bold capitalize">
                      Frontend Engineer
                    </h1>
                    <p className="text-sm">
                      <span className="text-primary">WhatsApp Inc.</span>{" "}
                      <span> California, USA</span>
                    </p>
                  </div>
                </div>
                <p className="text-sm">
                  May 2022 - Jan 2023{" "}
                  <span className="!opacity-100">. 1/2 yrs</span>
                </p>
              </div>
              <div className="my-3">
                <p className="text-sm mt-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
                  non, itaque corporis sed recusandae, est voluptas asperiores
                  impedit quidem ad molestias voluptate laudantium esse tempora,
                  autem alias. Pariatur laudantium corrupti nam sapiente, earum
                  reiciendis placeat ab modi similique voluptate eaque facere
                  odio vitae ratione velit sequi perferendis ex, molestiae
                  libero.
                </p>
              </div>
            </div>
            {/*------------------------------------------------ Education-------------------------------------- */}
            <div className="py-4 border-b dark:border-hover-color">
              <h1 className="text-lg font-semibold">Education</h1>
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="flex gap-3">
                  <img
                    src="/images/Mak-Logo.png"
                    alt=""
                    className="flex-shrink-0 w-10 h-10 object-contain"
                  />
                  <div>
                    <h1 className="text-lg font-bold capitalize">
                      Bachelors of Software Engineering
                    </h1>
                    <p className="text-sm">
                      <span className="text-primary">Makerere University</span>{" "}
                      <span>Kampala, Uganda . 2020 - 2026</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="my-3">
                <p className="text-sm mt-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
                  non, itaque corporis sed recusandae, est voluptas asperiores
                  impedit quidem ad molestias voluptate laudantium esse tempora,
                  autem alias. Pariatur laudantium corrupti nam sapiente, earum
                  reiciendis placeat ab modi similique voluptate eaque facere
                  odio vitae ratione velit sequi perferendis ex, molestiae
                  libero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*---------------------------------------- Recommended----------------------------------------------- */}
      <div className="md:col-span-1 h-fit md:sticky top-0">
        <Recommended users={recommendedUsers} />
      </div>
    </div>
  );
};

export default SingleTalent;

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/users");

  const users = await res.json();

  const paths = users.map((user) => ({ params: { id: user.id.toString() } }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/api/users/${params.id}`);

  const user = await res.json();

  if (!user) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user,
    },
  };
};
