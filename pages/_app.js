import { Router } from "next/router";
import Layout from "../components/common/Layout";
import "../styles/globals.css";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { UiProvider } from "../contexts/UiContext";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });
  NProgress;

  return (
    <UiProvider>
      <AnimatePresence>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </UiProvider>
  );
}

export default MyApp;
