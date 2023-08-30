import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const progressBar = useRef(null);
  const app = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(progressBar.current, {
        width: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: app.current,
          scrub: 1,
          start: "top 0%",
          end: "bottom bottom",
        },
      });
      ScrollTrigger.refresh();
    }, app.current);

    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <>
      <div id="App" ref={app}>
        <div className="progress" ref={progressBar}></div>
        <Header />
        <Outlet />
        {/* <div style={{ height: "100vh" }}></div> */}
        <Footer />
      </div>
    </>
  );
};

export default App;
