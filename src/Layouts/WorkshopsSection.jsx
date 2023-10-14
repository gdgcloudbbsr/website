import { useEffect, useRef } from "react";
import HeaderTitle from "../Components/HeaderTitle";
import Wrapper from "../Components/Wrapper";
import gsap from "gsap";
import data from "../Data/Workshops.json";
import { BiSolidMap } from "react-icons/bi";
import { Link } from "react-router-dom";

const WorkshopsSection = () => {
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

      gsap.from(".WorkshopsSection-container", {
        y: 200,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
          start: "top 100%",
          end: "top 90%",
          trigger: ".WorkshopsSection-container",
        },
        duration: 1.5,
      });
    }, main.current);

    return () => ctx.revert();
  }, []);

  return (
    <div className="WorkshopsSection" ref={main}>
      <Wrapper>
        <div ref={header1}>
          <HeaderTitle h1={"Workshops & Seminars"} />
        </div>
        <div className="WorkshopsSection-container">
          {data.Workshops.map((elem, index) => (
            <div key={index} className="workshop-item">
              <div className="workshop-item-container">
                <div className="text">
                  <div className="date">
                    <span>{elem.date}</span>
                  </div>
                  <Link to={elem.link}>
                    <h3>{elem.text}</h3>
                  </Link>
                  <div className="location">
                    {elem.online ? (
                      ""
                    ) : (
                      <Link to={elem.mapLink} className="map">
                        <div className="ico">
                          <BiSolidMap />
                        </div>
                        <span>{elem.placeName}</span>
                      </Link>
                    )}
                  </div>
                </div>
                <div className="tag">
                  <span className="tag-item">
                    {elem.past ? "Past" : "Upcoming"}
                  </span>
                  <span className="tag-item">
                    {elem.online ? "Online" : "Offline"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default WorkshopsSection;
