import HeaderTitle from "../Components/HeaderTitle";
import Wrapper from "../Components/Wrapper";
import EventsCard from "../Components/EventsCard";
import data from "../Data/EventsSection.json";
import { Link } from "react-router-dom";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const EventsSection = () => {
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

      gsap.from(".EventsSection-container > *", {
        y: 150,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".EventsSection-container",
          start: "top 80%",
          end: "top 30%",
        },
        ease: "power2.out",
        duration: 1.5,
      });
    }, main.current);

    return () => ctx.revert();
  }, []);
  return (
    <div className="EventsSection" ref={main}>
      <img src="/assets/overlay.png" alt="" className="overlayImage" />
      <Wrapper>
        <div ref={header1}>
          <HeaderTitle
            h1={"Our Community Events"}
            p={
              "Unlock the world of Google technologies at our events, welcoming newcomers, developers, managers, and organizations embracing these tools in their projects."
            }
          />
        </div>
        <div className="EventsSection-container">
          {data.upComingEvents.map((elem, index) => (
            <EventsCard
              img={elem.img}
              title={elem.text}
              link={elem.link}
              key={index}
            />
          ))}
          <div className="PastEvents">
            <HeaderTitle h3={"Past Events"} />
            <div className="PastEvents-container">
              {data.pastEvents.map((elem, index) => (
                <Link to={"/events"} className="item" key={index}>
                  <h4>{elem.text}</h4>
                  <span>{elem.tag}</span>
                </Link>
              ))}
            </div>
            <Link
              to="https://gdg.community.dev/gdg-bhubaneswar/"
              className="PrimaryButton"
            >
              <span>See Other Events</span>
              <span>See Other Events</span>
            </Link>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default EventsSection;
