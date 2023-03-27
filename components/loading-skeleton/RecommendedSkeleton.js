const RecommendedSkeleton = () => {
  return (
    <div>
      <div className="flex-center-between bg-slate-100 rounded-lg dark:bg-hover-color p-2 mt-2 !opacity-100 group">
        <div className="flex-align-center gap-2">
          <div className="w-14 h-14 rounded-lg bg-slate-300 dark:bg-dark-light animate-pulse shrink-0" />
          <div className="w-full">
            {Array.apply(null, { length: 5 }).map((_, i) => (
              <div
                className={`h-1 w-[200px] bg-slate-300 dark:bg-dark-light animate-pulse rounded-md my-2 ${
                  i === 4 && "!w-[100px]"
                }`}
                key={i}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="w-full h-5 bg-slate-300 mt-2 dark:bg-dark-light rounded-lg animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default RecommendedSkeleton;
