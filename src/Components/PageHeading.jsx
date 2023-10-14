import gsap from "gsap";
import { useEffect, useRef } from "react";

const PageHeading = ({ h1, p }) => {
  const main = useRef(null);
  const scroll = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      let elementAnimationDelay = 0;
      gsap.to(scroll.current, {
        delay: elementAnimationDelay,
        y: "-=10px",
        yoyo: true,
        repeat: -1,
        ease: "Power2.easeInOut",
      });
    }, main.current);

    return () => ctx.revert();
  }, []);
  return (
    <div className="HeaderTitle PageHeading" ref={main}>
      <div className="hide">
        <h1>{h1}</h1>
      </div>
      <div className="lines">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>{p}</p>
      <div className="scroll" ref={scroll}>
        <svg
          width="21"
          height="49"
          viewBox="0 0 21 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <path
              d="M1.41956 10.3628C1.41956 5.42359 5.42359 1.41956 10.3628 1.41956C15.302 1.41956 19.3061 5.42359 19.3061 10.3628V23.9906C19.3061 28.9298 15.302 32.9339 10.3628 32.9339C5.42359 32.9339 1.41956 28.9298 1.41956 23.9906V10.3628Z"
              stroke="#E8EAED"
              strokeWidth="2.83913"
            />
            <rect
              x="9.5111"
              y="6.95583"
              width="1.98739"
              height="5.67825"
              rx="0.993694"
              fill="#E8EAED"
              stroke="#E8EAED"
              strokeWidth="0.283913"
            />
            <path
              d="M5.9624 38.3282L10.4574 42.1422C10.5659 42.2342 10.7258 42.2317 10.8314 42.1364L15.0476 38.3282"
              stroke="#E8EAED"
              strokeWidth="2.2713"
              strokeLinecap="round"
            />
            <path
              d="M5.9624 43.4386L10.4574 47.2526C10.5659 47.3446 10.7258 47.3422 10.8314 47.2468L15.0476 43.4386"
              stroke="#E8EAED"
              strokeWidth="2.2713"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default PageHeading;
