/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="px-[2%] md:px-[6%] mt-20 z-0">
      <footer>
        <div className="flex flex-wrap gap-2">
          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">Home</h2>
            <ul>
              <li className="my-3 text-muted">
                <a href="#"> Home</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#"> Community</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Events</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[10rem] text-sm">
            <h2 className="text-xl font-semibold">Resources</h2>
            <ul>
              <li className="my-3 text-muted">
                <a href="#"> Blog</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Jobs</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Guides</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Help center</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[10rem] text-sm">
            <h2 className="text-xl font-semibold">Main Links</h2>
            <ul>
              <li className="my-3 text-muted">
                <a href="#"> Talent</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Events</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">History</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Schedule</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[10rem] text-sm text-center">
            <h2 className="text-xl font-semibold">
              Subscribe to our Newsletter
            </h2>
            <p className="text-muted text-13">
              Subscribe to be the first one to know about updates. Enter your
              email
            </p>
            <div className="flex-align-center justify-center my-3">
              <input
                name=""
                id=""
                type="text"
                className="px-4 py-[0.35rem] card dark:shadow-none outline-none"
                placeholder="Email Address.."
              />
              <button className="btn btn-primary -ml-2">subscribe</button>
            </div>
            <div className="flex-center-center gap-5 my-6">
              <a href="#">
                <FiFacebook />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <section className="attribution pt-2 border-top-light">
        <a href="#" className="logo flex-center-center gap-1 my-3">
          <img src="/logo.png" alt="" className="w-20" />
        </a>
        <p className="text-center  text-muted pb-2">
          Created By <span className="text-primary">Wabweni Brian</span> | All
          Rights Reserved
        </p>
      </section>
    </div>
  );
};

export default Footer;
