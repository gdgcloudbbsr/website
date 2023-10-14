import { useRef, useEffect } from "react";
import Wrapper from "../Components/Wrapper";
import HeaderTitle from "../Components/HeaderTitle";
import gsap from "gsap";
import data from "../Data/TeamMember.json";
import TeamMember from "../Components/TeamMember";

const TeamSection = () => {
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

      gsap.from(".TeamSection-container > *", {
        opacity: 0,
        y: 200,
        stagger: 0.5,
        scrollTrigger: {
          trigger: header1.current.childNodes[0].children[2],
          start: "top 90%",
          end: "top 20%",
        },
        ease: "power2.out",
        duration: 1.5,
      });
    }, main.current);

    return () => ctx.revert();
  }, []);

  return (
    <div className="TeamSection" ref={main}>
      <Wrapper>
        <div className="section-header-container">
          <div ref={header1}>
            <HeaderTitle
              h1={"Our Team: Unveiled"}
              p={
                "Meet the brilliant minds driving GDG Bhubaneswar's innovation and community spirit."
              }
            />
          </div>
          <button className="PrimaryButton">
            <span>View All</span>
            <span>View All</span>
          </button>
        </div>
        <div className="TeamSection-container">
          {data.Members.map((elem, index) => (
            <TeamMember key={index} data={elem} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default TeamSection;
