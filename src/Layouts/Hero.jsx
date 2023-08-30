import { useEffect, useRef } from "react";
import Wrapper from "../Components/Wrapper";
import gsap from "gsap";

import data from "../Data/HeroSection.json";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const image = useRef(null);
  const hero = useRef(null);
  const text = useRef(null);
  const img1 = useRef(null);
  const img2 = useRef(null);
  const banner1 = useRef(null);
  const banner2 = useRef(null);
  const scroll = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(image.current, {
        y: -180,
        scale: 1.19,
        ease: "power3.out",
        scrollTrigger: {
          scrub: 2,
          start: "top 40%",
          end: "top 00%",
          trigger: image.current,
        },
      });

      gsap.to(text.current, {
        opacity: 0,
        y: -180,
        ease: "power3.out",
        scrollTrigger: {
          scrub: 4,
          start: "top 40%",
          end: "top 00%",
          trigger: image.current,
        },
      });
      gsap.to(
        img1.current,
        {
          opacity: 0,
          x: -300,
          ease: "power3.out",
          scrollTrigger: {
            scrub: 4,
            start: "top 40%",
            end: "top 00%",
            trigger: image.current,
          },
        },
        "a"
      );
      gsap.to(
        img2.current,
        {
          opacity: 0,
          x: 300,
          ease: "power3.out",
          scrollTrigger: {
            scrub: 4,
            start: "top 40%",
            end: "top 00%",
            trigger: image.current,
          },
        },
        "a"
      );

      gsap.to(image.current, {
        opacity: 0,
        ease: "power3.out",
        delay: 2,
        scrollTrigger: {
          scrub: 2,
          start: "top 40%",
          end: "top 00%",
          trigger: banner1.current,
        },
      });

      gsap.to(
        banner1.current,
        {
          ease: "power2.out",
          right: "-35%",
          scrollTrigger: {
            scrub: 4,
            start: "top 80%",
            end: "top 20%",
            trigger: banner1.current,
          },
        },
        "banner"
      );

      gsap.to(
        banner2.current,
        {
          ease: "power2.out",
          left: "-35%",
          scrollTrigger: {
            scrub: 4,
            start: "top 80%",
            end: "top 20%",
            trigger: banner1.current,
          },
        },
        "banner"
      );

      let elementAnimationDelay = 0;
      gsap.to(scroll.current, {
        delay: elementAnimationDelay,
        y: "-=10px",
        yoyo: true,
        repeat: -1,
        ease: "Power2.easeInOut",
      });
    }, hero.current);

    return () => ctx.revert();
  }, []);
  return (
    <>
      <div className="hero" id="hero" ref={hero}>
        <Wrapper>
          <div className="container">
            <div className="text" ref={text}>
              <h3>{data.h3}</h3>
              <h1>{data.h1}</h1>
              <p>{data.p}</p>
              <button
                className="button1 links"
                onClick={() => navigate(data.link)}
              >
                <span>{data.btnText}</span>
              </button>
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
          </div>
        </Wrapper>
        <div className="image" ref={image}></div>
        <div className="overlay">
          <img src="/assets/overlay.png" alt="GDG Bhubaneswar" ref={img1} />
          <img src="/assets/overlay.png" alt="GDG Bhubaneswar" ref={img2} />
        </div>
      </div>
      <div className="banner">
        <div className="banner-1" ref={banner1}>
          <h1>Connect</h1>
          <h1>Grow</h1>
          <h1>learn</h1>
          <h1>Connect</h1>
          <h1>Grow</h1>
          <h1>learn</h1>
          <h1>Connect</h1>
          <h1>Grow</h1>
          <h1>learn</h1>
        </div>
        <div className="banner-2" ref={banner2}>
          <h1>Connect</h1>
          <h1>Grow</h1>
          <h1>learn</h1>
          <h1>Connect</h1>
          <h1>Grow</h1>
          <h1>learn</h1>
          <h1>Connect</h1>
          <h1>Grow</h1>
          <h1>learn</h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
