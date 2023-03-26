import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { filters } from "../../data/eventsFilters";

const EventFilters = () => {
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([
    { id: 18179290, tag: "apple" },
    { id: 18938347, tag: "arbnb" },
    { id: 43617839, tag: "google" },
    { id: 32523642, tag: "whatsApp" },
    { id: 13532646, tag: "Facebook" },
    { id: 36323526, tag: "LinkedIn" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tag) {
      setTags([...tags, { id: new Date().getTime().toString(), tag }]);
    }
    setTag("");
  };

  const removeTag = (id) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };

  return (
    <div>
      <h1 className="text-lg font-semibold capitalize">Company</h1>
      <form onSubmit={handleSubmit}>
        <div className="mt-3 relative">
          <span className="absolute top-1/2 -translate-y-1/2 left-2">
            <BiSearch className="text-muted" />
          </span>
          <input
            type="text"
            className="pl-8 pr-4 py-[0.35rem] card outline-none w-full"
            placeholder="Search by company.."
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
        </div>
      </form>
      <div className="flex-align-center gap-2 flex-wrap mt-5">
        {tags?.map(({ id, tag }) => (
          <div
            className="flex-center-between gap-2 px-1 py-[1px] bg-slate-200 dark:bg-hover-color"
            key={id}
          >
            <span className="text-xs capitalize">{tag}</span>
            <div className="sm:cursor-pointer" onClick={() => removeTag(id)}>
              <FaTimes className="text-xs" />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <h1 className="text-lg font-semibold capitalize">Country</h1>
        <div className="mt-2 relative">
          <span className="absolute top-1/2 -translate-y-1/2 left-2">
            <BiSearch className="text-muted" />
          </span>
          <input
            type="text"
            className="pl-8 pr-4 py-[0.35rem] card outline-none w-full"
            placeholder="Search Country, state, city.."
          />
        </div>
      </div>
      {filters.map(({ title, filters }) => (
        <div className="mt-6" key={title}>
          <h1 className="text-lg font-semibold capitalize">{title}</h1>
          {filters.map(({ name, number }) => (
            <div className="mt-3" key={name}>
              <div className="flex-center-between">
                <div className="input-check">
                  <input type="checkbox" name="" id={name} />
                  <label htmlFor={name} className="capitalize">
                    {name}
                  </label>
                </div>
                <span className="px-1 py-[1px] bg-slate-200 rounded-sm dark:bg-dark-card">
                  {number}
                </span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default EventFilters;
