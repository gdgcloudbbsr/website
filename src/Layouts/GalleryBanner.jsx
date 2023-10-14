import gsap from "gsap";
import { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const src1 = [
  "/assets/img3.webp",
  "/assets/img4.webp",
  "/assets/img5.webp",
  "/assets/img6.webp",
  "/assets/img11.webp",
];

const src2 = [
  "/assets/img7.webp",
  "/assets/img8.webp",
  "/assets/img9.webp",
  "/assets/img10.webp",
];

const GalleryBanner = () => {
  const main = useRef(null);
  const banner1 = useRef(null);
  const banner2 = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(banner1.current, {
        scrollTrigger: {
          trigger: banner1.current,
          start: "top 90%",
          end: "top 00%",
          scrub: 4,
        },
        left: "-40%",
        ease: "power2.out",
      });
      gsap.to(banner2.current, {
        scrollTrigger: {
          trigger: banner2.current,
          start: "top 100%",
          end: "top 00%",
          scrub: 4,
        },
        right: "-50%",
        ease: "power2.out",
      });
    }, main.current);
    return () => ctx.revert();
  }, []);
  return (
    <div className="GalleryBanner" ref={main}>
      <div className="Namebanner Namebanner-1">
        <div
          className="Namebanner-container Namebanner-container-1"
          ref={banner1}
        >
          <h5>GDG Bhubaneswar</h5>
          <img src="/assets/ico/1.png" alt="chrome" className="ico" />
          <h5>GDG Bhubaneswar</h5>
          <img src="/assets/ico/2.png" alt="android" className="ico" />
          <h5>GDG Bhubaneswar</h5>
          <img src="/assets/ico/3.png" alt="firebase" className="ico" />
          <h5>GDG Bhubaneswar</h5>
          <img src="/assets/ico/4.png" alt="fluter" className="ico" />
          <h5>GDG Bhubaneswar</h5>
          <img src="/assets/ico/5.png" alt="assistant" className="ico" />
          <h5>GDG Bhubaneswar</h5>
          <img src="/assets/ico/6.png" alt="cloud" className="ico" />
          <h5>GDG Bhubaneswar</h5>
          <img src="/assets/ico/7.png" alt="map" className="ico" />
          <h5>GDG Bhubaneswar</h5>
        </div>
      </div>
      <div className="GalleryBanner-container">
        <Marquee
          // pauseOnHover={true}
          className="imgItems imgItems-1"
          direction={"right"}
          speed={50}
        >
          {src1.map((elem, index) => (
            <Link to={"/gallery"} key={index} className="item">
              <img src={elem} alt="GDG Bhubaneswar" />
            </Link>
          ))}
        </Marquee>
        <Marquee
          // pauseOnHover={true}
          className="imgItems imgItems-2"
          direction={"left"}
          speed={50}
        >
          {src2.map((elem, index) => (
            <Link to={"/gallery"} key={index} className="item">
              <img src={elem} alt="GDG Bhubaneswar" />
            </Link>
          ))}
        </Marquee>
      </div>
      <div className="Namebanner Namebanner-2">
        <div
          className="Namebanner-container Namebanner-container-2"
          ref={banner2}
        >
          <h5>GDG Cloud Bhubaneswar</h5>
          <img src="/assets/ico/1.png" alt="chrome" className="ico" />
          <h5>GDG Cloud Bhubaneswar</h5>
          <img src="/assets/ico/2.png" alt="android" className="ico" />
          <h5>GDG Cloud Bhubaneswar</h5>
          <img src="/assets/ico/3.png" alt="firebase" className="ico" />
          <h5>GDG Cloud Bhubaneswar</h5>
          <img src="/assets/ico/4.png" alt="fluter" className="ico" />
          <h5>GDG Cloud Bhubaneswar</h5>
          <img src="/assets/ico/5.png" alt="assistant" className="ico" />
          <h5>GDG Cloud Bhubaneswar</h5>
          <img src="/assets/ico/6.png" alt="cloud" className="ico" />
          <h5>GDG Cloud Bhubaneswar</h5>
          <img src="/assets/ico/7.png" alt="map" className="ico" />
          <h5>GDG Cloud Bhubaneswar</h5>
        </div>
      </div>
    </div>
  );
};

export default GalleryBanner;
