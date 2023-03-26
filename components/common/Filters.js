import { filters } from "../../data/jobFilters";

const Filters = ({ selectedFilters, handleFilterChange, counts }) => {
  return (
    <>
      {filters.map((filter) => (
        <div className="mt-6" key={filter.name}>
          <h1 className="text-lg font-semibold capitalize">{filter.label}</h1>
          {filter.filters.map((filterValue) => (
            <div className="mt-3" key={filterValue}>
              <div className="flex-center-between">
                <div className="input-check">
                  <input
                    type="checkbox"
                    id={filterValue}
                    value={filterValue}
                    checked={(selectedFilters[filter.name] || []).includes(
                      filterValue
                    )}
                    onChange={(e) =>
                      handleFilterChange(
                        filter.name,
                        filterValue,
                        e.target.checked
                      )
                    }
                  />
                  <label htmlFor={filterValue} className="capitalize">
                    {filterValue}
                  </label>
                </div>
                <span className="px-1 py-[1px] bg-slate-200 rounded-sm dark:bg-dark-card">
                  {counts[filterValue]}
                </span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default Filters;
