const Skeleton = () => {
  return (
    <div className="bg-slate-200 card p-3 my-2 h-full">
      <div className="flex-align-center gap-3">
        <div className="w-14 h-14 bg-slate-300 dark:bg-hover-color animate-pulse rounded-lg shrink-0" />
        <div className="w-full">
          <div className="h-2 bg-slate-300 dark:bg-hover-color animate-pulse rounded-md" />
          <div className="flex-align-center gap-x-4 mt-3">
            {Array.apply(null, { length: 4 }).map((_, i) => (
              <div
                className="h-4 w-full  bg-slate-300 dark:bg-hover-color animate-pulse rounded-md"
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4">
        {Array.apply(null, { length: 6 }).map((_, i) => (
          <div
            className={`h-1 w-full bg-slate-300 dark:bg-hover-color animate-pulse rounded-md my-2 ${
              i === 5 && "!w-1/2"
            }`}
            key={i}
          />
        ))}
        <div className="flex-center-between mt-4">
          <div className="h-6 w-[100px] bg-slate-300 dark:bg-hover-color animate-pulse rounded-md" />
          <div className="h-6 w-[100px] bg-slate-300 dark:bg-hover-color animate-pulse rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
