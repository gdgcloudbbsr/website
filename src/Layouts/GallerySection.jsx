import { useRef } from "react";
import Wrapper from "../Components/Wrapper";
import HeaderTitle from "../Components/HeaderTitle";
import gsap from "gsap";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const data = [
  "/assets/img12.webp",
  "/assets/img13.webp",
  "/assets/img14.webp",
  "/assets/img15.webp",
  "/assets/img16.webp",
];

const GallerySection = () => {
  const main = useRef(null);
  const header1 = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(header1.current.childNodes[0].children[0].children, {
        y: 200,
        opacity: 0,
        scrollTrigger: {
          trigger: header1.current,
          start: "top 70%",
          end: "top 20%",
        },
        ease: "power2.out",
        duration: 1.5,
      });
      gsap.from(header1.current.childNodes[0].children[1], {
        y: 200,
        opacity: 0,
        scrollTrigger: {
          trigger: header1.current,
          start: "top 70%",
          end: "top 20%",
        },
        ease: "power2.out",
        duration: 1.5,
      });
      gsap.from(header1.current.childNodes[0].children[2], {
        y: 200,
        opacity: 0,
        scrollTrigger: {
          trigger: header1.current,
          start: "top 70%",
          end: "top 20%",
        },
        ease: "power2.out",
        duration: 1.5,
      });
      gsap.from(".PrimaryButton", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
          trigger: header1.current.childNodes[0].children[0],
          start: "top 65%",
          end: "top 50%",
        },
        ease: "power2.out",
        duration: 1.5,
      });
      gsap.from(".GallerySection-container > *", {
        opacity: 0,
        y: 200,
        stagger: 0.5,
        scrollTrigger: {
          trigger: header1.current.childNodes[0].children[0],
          start: "top 50%",
          end: "top 00%",
        },
        ease: "power2.out",
        duration: 1.5,
      });
    }, main.current);

    return () => ctx.revert();
  }, []);
  return (
    <div className="GallerySection" ref={main}>
      <Wrapper>
        <div className="section-header-container">
          <div ref={header1}>
            <HeaderTitle
              h1={"Gallery"}
              p={
                "Here are some Pics of the events, seminars and workshops hosted by GDG Bhubaneswar"
              }
            />
          </div>
          <button className="PrimaryButton">
            <span>View All</span>
            <span>View All</span>
          </button>
        </div>
        <div className="GallerySection-container">
          {data.map((elem, index) => (
            <Link to={"/gallery"} className="GalleryImg" key={index}>
              <img src={elem} alt="GDG BHubaneswar Images" />
            </Link>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default GallerySection;
