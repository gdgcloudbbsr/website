import { useEffect, useRef } from "react";
import gsap from "gsap";

const Banner = () => {
  const main = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".Banner-container", {
        scale: 3,
        opacity: 0.3,
        scrollTrigger: {
          trigger: main.current,
          start: "center 90%",
          end: "center 40%",
          scrub: 1,
        },
      });
    }, main.current);
    return () => ctx.revert();
  }, []);
  return (
    <div className="Banner" ref={main}>
      <img
        src="/assets/Vector2.svg"
        alt="Vector image"
        className="vector vector-1"
      />
      <img
        src="/assets/Vector3.svg"
        alt="Vector image"
        className="vector vector-2"
      />
      <div className="Banner-container">
        <img src="/assets/banner1.webp" alt="GDG Bhubaneswar Banner" />
      </div>
    </div>
  );
};

export default Banner;
