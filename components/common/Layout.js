import { useState } from "react";
import { useUiContext } from "../../contexts/UiContext";
import { actioTypes } from "../../reducers/uiReducer";
import Footer from "./Footer";
import Loader from "./Loader";
import Meta from "./Meta";
import Navbar from "./Navbar";
import BackToTopButton from "./BackToTopButton";

const Layout = ({ children }) => {
  const { dispatch } = useUiContext();
  const [showButton, setShowButton] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const handleCloseDropdown = (e) => {
    dispatch({ type: actioTypes.closeDropdown });
    dispatch({ type: actioTypes.closeNotifications });
  };

  // Loader when page is loading
  if (typeof window !== "undefined") {
    window.addEventListener("load", () => {
      setShowLoader(false);
    });

    // Show/Hide scroll to top button
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
    });
  }

  return (
    <>
      <Meta />
      {showLoader && <Loader />}
      <BackToTopButton showButton={showButton} />
      <Navbar />
      <div
        className="px-[2%] md:px-[6%] 2xl:container 2xl:mx-auto 2xl:!px-0 min-h-screen pt-20"
        onClick={handleCloseDropdown}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
