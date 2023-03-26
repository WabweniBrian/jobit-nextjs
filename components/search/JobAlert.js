import React from "react";

const JobAlert = () => {
  return (
    <div className="mt-8 md:mt-0 p-3 card-shadow dark:shadow-none rounded-lg bg-white dark:bg-dark-card">
      <h1 className="text-xl font-bold">Create Job Alert</h1>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo dolore
        est ratione!
      </p>
      <input
        type="text"
        className="mt-3 p-2 rounded-md border-none outline-none placeholder:text-sm placeholder:text-muted bg-slate-100 dark:bg-hover-color w-full"
        placeholder="Type Your Email here"
      />
      <button className="w-full py-2 text-primary border border-primary rounded-md capitalize my-3 shadow-sm shadow-green-400/50 hover:shadow-green-400">
        create job alert
      </button>
    </div>
  );
};

export default JobAlert;
