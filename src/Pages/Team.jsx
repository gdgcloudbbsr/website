import { useEffect } from "react";
import PageHeading from "../Components/PageHeading";
import gsap from "gsap";
import { useRef } from "react";
import Banner from "../Layouts/Banner";
import HeaderTitle from "../Components/HeaderTitle";
import Wrapper from "../Components/Wrapper";
import data from "../Data/TeamMember.json";
import TeamMember from "../Components/TeamMember";
import Carsoual from "../Components/Carsoual";

const Team = () => {
  const main = useRef(null);
  const headingText = useRef(null);
  const banner = useRef(null);
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
            autoAlpha: 0,
            duration: 1,
            stagger: 0.1,
          },
          "-=.5"
        )

        .to(".Pagelodder .text h1", {
          y: 200,
          autoAlpha: 0,
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
        .to(
          ".Pagelodder",
          {
            display: "none",
          },
          "b"
        )
        .from(
          headingText.current.childNodes[0].children[0].children,
          {
            y: 200,
            ease: "power2.out",
          },
          "b"
        )
        .from(
          headingText.current.childNodes[0].children[1],
          {
            y: 100,
            ease: "power2.out",
            autoAlpha: 0,
            duration: 0.5,
          },
          "a"
        )
        .from(
          headingText.current.childNodes[0].children[2],
          {
            y: 100,
            ease: "power2.out",
            autoAlpha: 0,
            duration: 0.5,
          },
          "a"
        )
        .from(headingText.current.childNodes[0].children[3], {
          ease: "power2.out",
          autoAlpha: 0,
          duration: 0.5,
        })
        .from(banner.current, {
          y: -250,
          autoAlpha: 0,
          duration: 1,
          zIndex: -1,
        });

      gsap.from(".Organizers", {
        y: 200,
        autoAlpha: 0,
        duration: 2,
        scrollTrigger: {
          start: "top 90%",
          end: "top 20%",
          trigger: ".Organizers .TeamSection-text",
        },
      });
      gsap.from(".CoreTeam", {
        y: 200,
        autoAlpha: 0,
        duration: 2,
        scrollTrigger: {
          start: "top 90%",
          end: "top 20%",
          trigger: ".CoreTeam .TeamSection-text",
        },
      });
      gsap.from(".Volunteers", {
        y: 200,
        autoAlpha: 0,
        duration: 2,
        scrollTrigger: {
          start: "top 90%",
          end: "top 20%",
          trigger: ".Volunteers .TeamSection-text",
        },
      });
    }, main.current);
    return () => ctxAbout.revert();
  }, []);
  return (
    <div id="Team" ref={main}>
      <div className="overlayBox">
        <div></div>
        <div></div>
      </div>
      <div className="Pagelodder">
        <div className="overlayBlur"></div>
        <div className="text">
          <div className="hide">
            <h1>Team</h1>
          </div>
          <div className="hide">
            <h1>Team</h1>
          </div>
          <div className="hide">
            <h1>Team</h1>
          </div>
        </div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <div ref={headingText}>
        <PageHeading
          h1={"Our Team: Unveiled"}
          p={
            "Meet the brilliant minds driving GDG Bhubaneswar's innovation and community spirit."
          }
        />
      </div>
      <div ref={banner}>
        <Banner />
      </div>
      <div className="Team-Container">
        <img src="/assets/overlay.png" alt="" className="overlayImage" />
        <img src="/assets/overlay.png" alt="" className="overlayImage" />
        <Wrapper>
          <div className="TeamSection Organizers">
            <div className="TeamSection-text">
              <HeaderTitle h1={"Organizers"} />
            </div>

            <Carsoual>
              {data.Members.map((elem, index) => (
                <div className="TeamSection-container-member" key={index}>
                  <TeamMember data={elem} />
                </div>
              ))}
            </Carsoual>
          </div>

          <div className="TeamSection CoreTeam">
            <div className="TeamSection-text">
              <HeaderTitle h1={"Core Team Member"} />
            </div>

            <Carsoual>
              {data.Members.map((elem, index) => (
                <div className="TeamSection-container-member" key={index}>
                  <TeamMember data={elem} />
                </div>
              ))}
            </Carsoual>
          </div>

          <div className="TeamSection Volunteers">
            <div className="TeamSection-text">
              <HeaderTitle h1={"Volunteers"} />
            </div>

            <Carsoual>
              {data.Members.map((elem, index) => (
                <div className="TeamSection-container-member" key={index}>
                  <TeamMember data={elem} />
                </div>
              ))}
            </Carsoual>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Team;
