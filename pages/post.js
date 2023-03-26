/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react";
import { BiTag } from "react-icons/bi";
import { FaCamera, FaTimes } from "react-icons/fa";
import { FiChevronLeft } from "react-icons/fi";
import Link from "next/link";

const PostJob = () => {
  const logoInput = useRef(null);
  const bannerInput = useRef(null);
  const [logo, setLogo] = useState("");
  const [banner, setBanner] = useState("");

  const [tag, setTag] = useState("react");
  const [tags, setTags] = useState([
    { id: 18179290, tag: "html" },
    { id: 18938347, tag: "css" },
    { id: 43617839, tag: "javascript" },
    { id: 32523642, tag: "react" },
    { id: 13532646, tag: "firebase" },
    { id: 36323526, tag: "graphql" },
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
    <>
      <div className="rounded max-w-3xl w-full mx-auto">
        {/*---------------------------------------- Back to home button------------------------------------- */}
        <button className="btn bg-slate-200 hover:bg-slate-300 dark:bg-dark-card dark:hover:bg-hover-color">
          <Link href="/">
            <a className="flex-align-center gap-2">
              <FiChevronLeft />
              <span>back</span>
            </a>
          </Link>
        </button>

        <div className="relative mt-5">
          <input
            type="file"
            hidden
            ref={logoInput}
            onChange={(e) => setLogo(e.target.files[0])}
          />
          <img
            src={`${
              banner ? URL.createObjectURL(banner) : "/images/placeholder.png"
            }`}
            alt=""
            className="h-[200px] sm:cursor-pointer object-cover w-full rounded-tl-xl rounded-tr-xl"
            onClick={() => bannerInput.current.click()}
          />
          <input
            type="file"
            hidden
            ref={bannerInput}
            onChange={(e) => setBanner(e.target.files[0])}
          />
          <div
            className="sm:cursor-pointer"
            onClick={() => logoInput.current.click()}
          >
            {logo ? (
              <img
                src={URL.createObjectURL(logo)}
                alt=""
                className="w-16 left-10 -bottom-8 absolute rounded-lg"
              />
            ) : (
              <div className="w-20 h-16 rounded-lg grid place-items-center left-10 -bottom-8 absolute border-2 border-dotted border-slate-400 dark:border-hover-color">
                <FaCamera className="text-3xl opacity-60 dark:text-slate-500" />
                <span className="opacity-50">Logo</span>
              </div>
            )}
          </div>
        </div>
        <h1 className="text-2xl font-bold mt-10">Fill the form</h1>
        {/*---------------------------------------- Form------------------------------------- */}

        <div className="flex-align-center flex-col sm:flex-row gap-4 mt-8">
          <div className="form-input w-full sm:flex-1 relative">
            <input
              type="text"
              name="name"
              className="input"
              value="FrontEnd Engineer"
              onChange={() => {}}
              required
            />
            <label htmlFor="name">Job Title</label>
          </div>
          <div className="form-input w-full sm:flex-1 relative">
            <input
              type="text"
              name="name"
              className="input"
              value="Whatsapp Inc."
              onChange={() => {}}
              required
            />
            <label htmlFor="name">Company name</label>
          </div>
        </div>
        <div className="mt-5">
          <form onSubmit={handleSubmit}>
            <div className="form-input w-full sm:flex-1 relative">
              <span className="absolute top-2 left-2">
                <BiTag className="opacity-50" />
              </span>
              <input
                type="text"
                className="input !pl-8"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
              />
              <label htmlFor="name">Add skills</label>
            </div>

            <div className="flex-align-center gap-2 flex-wrap">
              {tags?.map(({ id, tag }) => (
                <div
                  className="flex-center-between gap-2 px-1 py-[1px] bg-slate-200 dark:bg-hover-color"
                  key={id}
                >
                  <span className="text-sm capitalize">{tag}</span>
                  <div
                    className="sm:cursor-pointer"
                    onClick={() => removeTag(id)}
                  >
                    <FaTimes className="text-sm" />
                  </div>
                </div>
              ))}
            </div>
          </form>
        </div>
        <div className="flex-align-center flex-col sm:flex-row gap-4 mt-8">
          <div className="flex-align-center gap-3 w-full sm:w-fit">
            <div className="form-input flex-1 relative">
              <select className="input" required>
                <option value="uganda">USD</option>
                <option value="uganda">UGX</option>
                <option value="uganda">KSH</option>
                <option value="uganda">Naira</option>
              </select>
              <label htmlFor="email">Currency</label>
            </div>
            <div className="form-input flex-2 relative">
              <input
                type="number"
                name="name"
                className="input"
                value="1092"
                onChange={() => {}}
                required
              />
              <label htmlFor="name">Salary</label>
            </div>
          </div>
          <div className="form-input w-full sm:flex-1 relative">
            <input
              type="text"
              name="name"
              className="input"
              value="Whatsapp Inc."
              onChange={() => {}}
              required
            />
            <label htmlFor="name">Company name</label>
          </div>
        </div>
        <div className="flex-align-center flex-col sm:flex-row gap-4 mt-5">
          <div className="form-input w-full sm:flex-1 relative">
            <input type="text" name="address" className="input" required />
            <label htmlFor="address">Address</label>
          </div>

          <div className="form-input w-full sm:flex-1 relative">
            <input type="text" name="phone" className="input" required />
            <label htmlFor="phone">Phone 1</label>
          </div>

          <div className="form-input w-full sm:flex-1 relative">
            <input type="text" name="phone" className="input" required />
            <label htmlFor="phone">Phone 2</label>
          </div>
        </div>
        <div className="form-input w-full sm:flex-1 relative mt-5">
          <input
            type="text"
            name="email"
            className="input"
            value="whatsapp@inc.com"
            onChange={() => {}}
            required
          />
          <label htmlFor="email">Email Address</label>
        </div>
        <div className="form-input w-full sm:flex-1 relative mt-5">
          <textarea
            name="name"
            className="input !h-28 pt-2"
            required
          ></textarea>
          <label htmlFor="name">Job Description</label>
        </div>
        <div className="input-check">
          <input type="checkbox" name="" id="terms" />
          <label htmlFor="terms">I agree to the terms & conditions</label>
        </div>
        <button className="btn btn-primary w-full mt-4">post job</button>
      </div>
    </>
  );
};

export default PostJob;
//
