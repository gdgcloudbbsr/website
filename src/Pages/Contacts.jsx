import { useEffect, useRef } from "react";
import gsap from "gsap";

const Contacts = () => {
  const main = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      ease: "power1.out",
    });
    const ctxAbout = gsap.context(() => {
      tl.to(".Pagelodder .box", {
        height: 0,
        stagger: 0.2,
        duration: 0.5,
      })
        .from(
          ".Pagelodder .text h1",
          {
            y: 200,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
          },
          "-=.5"
        )

        .to(".Pagelodder .text h1", {
          y: 200,
          opacity: 0,
          duration: 1,
        })
        .to(
          ".Pagelodder",
          {
            height: 0,
            duration: 1,
          },
          "-=1"
        )
        .to(".Pagelodder", {
          display: "none",
        });
    }, main.current);
    return () => ctxAbout.revert();
  }, []);
  return (
    <div id="Contact" ref={main}>
      <div className="Pagelodder">
        <div className="overlayBlur"></div>

        <div className="text">
          <div className="hide">
            <h1>Contact</h1>
          </div>
          <div className="hide">
            <h1>Contact</h1>
          </div>
          <div className="hide">
            <h1>Contact</h1>
          </div>
        </div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <div
        style={{
          width: "100%",
          height: "100vh",
          textAlign: "center",
          display: "grid",
          placeContent: "center",
        }}
      >
        <h1>Coming Soon!!!</h1>
      </div>
    </div>
  );
};

export default Contacts;
