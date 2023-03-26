/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react";
import { BiFile, BiLink } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FiChevronLeft } from "react-icons/fi";
import Link from "next/link";

const Appy = () => {
  const fileInput = useRef(null);
  const [file, setFile] = useState("");
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
          <img
            src="/images/photo-3.jpg"
            alt=""
            className="h-[200px] object-cover w-full rounded-tl-xl rounded-tr-xl"
          />
          <img
            src="/images/whatsapp.png"
            alt=""
            className="w-16 left-10 -bottom-8 absolute"
          />
        </div>

        <div className="mt-10">
          <h1 className="text-xl font-semibold">UI/UX Designer</h1>
          <p className="text-sm">
            <span className="text-primary">WhatsApp Inc.</span>
            <span>California, USA</span>
            <span>3 days ago</span>
          </p>
        </div>
        <div className="py-4 mt-3 border-y dark:border-hover-color">
          <h1 className="font-bold capitalize">submit your application</h1>
        </div>
        <div className="py-4 border-b dark:border-hover-color">
          <div className="flex-align-center gap-5">
            <div>
              <p>LinkedIn Profile</p>
              <button className="btn bg-[#1275B1] hover:bg-[#0f6397] text-white">
                <a href="www/linkedin.com" className="flex-align-center gap-2">
                  <FaLinkedin />
                  <span>Apply with LinkedIn</span>
                </a>
              </button>
            </div>

            {/*---------------------------------------- File upload------------------------------------- */}
            <div>
              <input
                type="file"
                hidden
                ref={fileInput}
                onChange={(e) => setFile(e.target.files[0])}
              />
              <p>Resume/CV*</p>
              <button
                className="btn flex-align-center text-slate-300 gap-2 bg-dark-card hover:bg-hover-color"
                onClick={() => fileInput.current.click()}
              >
                <BiLink />
                <span>Attach Resume/CV</span>
              </button>
            </div>
          </div>
          {file && (
            <div className="flex-align-center gap-2 mt-3 text-primary">
              <BiFile />{" "}
              <p>
                {file.name.length > 20
                  ? file.name.split(".")[0].slice(0, 20) +
                    "..." +
                    file.name.split(".")[1]
                  : file.name}
              </p>
            </div>
          )}
        </div>

        {/*---------------------------------------- Form------------------------------------- */}
        <form className="mt-8">
          <div className="flex-align-center flex-col sm:flex-row gap-4">
            <div className="form-input w-full sm:flex-1 relative">
              <input
                type="text"
                name="name"
                className="input"
                value="Brian"
                onChange={() => {}}
                required
              />
              <label htmlFor="name">First Name</label>
            </div>
            <div className="form-input w-full sm:flex-1 relative">
              <input
                type="text"
                name="name"
                className="input"
                value="Wabweni"
                onChange={() => {}}
                required
              />
              <label htmlFor="name">Last Name</label>
            </div>
          </div>
          <div className="flex-align-center flex-col sm:flex-row gap-4 mt-5">
            <div className="form-input w-full sm:flex-1 relative">
              <input type="number" name="phone" className="input" required />
              <label htmlFor="phone">Phone number</label>
            </div>
            <div className="form-input w-full sm:flex-1 relative">
              <select className="input" required>
                <option value="uganda">Uganda</option>
                <option value="uganda">Kenya</option>
                <option value="uganda">Tanzania</option>
                <option value="uganda">Burundi</option>
                <option value="uganda">Nigeria</option>
              </select>
              <label htmlFor="name">Country</label>
            </div>
          </div>
          <div className="form-input w-full sm:flex-1 relative mt-5">
            <input
              type="text"
              name="email"
              className="input"
              value="wabwenib66@gmail.com"
              onChange={() => {}}
              required
            />
            <label htmlFor="email">Email Address</label>
          </div>
          <div className="form-input w-full sm:flex-1 relative mt-5">
            <textarea
              name="name"
              className="input !h-20 pt-2"
              required
            ></textarea>
            <label htmlFor="name">Short Bio</label>
          </div>
          <div className="input-check">
            <input type="checkbox" name="" id="terms" />
            <label htmlFor="terms">I agree to the terms & conditions</label>
          </div>
          <button className="btn btn-primary w-full mt-4">
            submit application
          </button>
        </form>
      </div>
    </>
  );
};

export default Appy;
