import { BiBriefcase, BiLogOut, BiUser, BiUserCircle } from "react-icons/bi";
import { motion } from "framer-motion";
import { useUiContext } from "../../contexts/UiContext";

const Dropdown = () => {
  const { isDropdownOpen } = useUiContext();
  return (
    <>
      {isDropdownOpen && (
        <motion.div
          className="dropdown absolute right-0 top-full mt-1 p-2 !rounded-xl w-48 card card-shadow dark:shadow-none"
          initial={{ scale: 0.6, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
        >
          <div className="flex-align-center space-x-3 p-2  sm:cursor-pointer hover:bg-slate-100 dark:hover:bg-hover-color rounded-lg">
            <BiUserCircle className="text-muted" />
            <span className="text-muted">My Profile</span>
          </div>
          <div className="flex-align-center space-x-3 p-2 sm:cursor-pointer hover:bg-slate-100 dark:hover:bg-hover-color rounded-lg">
            <BiUser className="text-muted" />
            <span className="text-muted">Manage Account</span>
          </div>
          <div className="flex-align-center space-x-3 p-2 sm:cursor-pointer hover:bg-slate-100 dark:hover:bg-hover-color rounded-lg">
            <BiBriefcase className="text-muted" />
            <span className="text-muted">My Jobs</span>
          </div>
          <div className="flex-align-center space-x-3 p-2 sm:cursor-pointer hover:bg-slate-100 dark:hover:bg-hover-color rounded-lg">
            <BiLogOut className="text-muted" />
            <span className="text-muted">Sign out</span>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Dropdown;
