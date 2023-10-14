import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import Wrapper from "../Components/Wrapper";
import BadgeGDG from "../Components/BadgeGDG";

import data from "../Data/AboutUs.json";

const AboutUs = () => {
  const container = useRef(null);
  const aboutContainer = useRef(null);
  const cursor = useRef(null);
  const p = useRef(null);
  const image = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      let diffRotate = 0;
      let rotate = 0;

      container.current.addEventListener("mousemove", (e) => {
        diffRotate = rotate - e.clientX;
        rotate = e.clientX;
        gsap.to(cursor.current, {
          opacity: 1,
          scale: 1,
          top: e.clientY - container.current.getBoundingClientRect().top,
          left: e.clientX,
          rotate: gsap.utils.clamp(-30, 30, diffRotate),
          ease: "power2.out",
        });
      });
      container.current.addEventListener("mouseleave", () => {
        gsap.to(cursor.current, {
          opacity: 0,
          scale: 0,
          ease: "power2.out",
        });
      });

      gsap.from(container.current, {
        // y: 100,
        scale: 0.5,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
          start: "top 100%",
          end: "top 40%",
          scrub: 1,
          trigger: container.current,
        },
      });

      gsap.to(".ring", {
        scale: 1.75,
        opacity: 0,
        duration: 2,
        stagger: {
          each: 0.5,
          repeat: -1,
        },
        ease: "power4.out",
      });
    }, container.current);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx2 = gsap.context(() => {
      gsap.from(".col-2 .item", {
        y: 200,
        opacity: 0,
        stagger: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".col-2",
          start: "top 80%",
          end: "top 00%",
        },
      });
      gsap.from(".col-1 > *", {
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".col-1",
          start: "top 100%",
          end: "top 00%",
        },
      });

      image.current.addEventListener("mousemove", (e) => {
        let xPos = e.clientX / window.innerWidth - 0.5,
          yPos = e.clientY / window.innerHeight - 0.5;

        gsap.to(image.current, {
          rotationY: 30 * xPos,
          rotationX: 30 * yPos,
          ease: "Power1.easeOut",
          transformPerspective: 900,
          transformOrigin: "center",
        });
      });

      gsap.utils.toArray(".status").forEach((box) => {
        var num = box.getAttribute("data-num");

        gsap.from(box, {
          opacity: 0.2,
          scrollTrigger: {
            trigger: ".col-2",
            start: "top 90%",
            end: "top 90%",
          },
        });

        gsap.to(box, {
          innerText: num,
          duration: 3,
          snap: {
            innerText: 1,
          },
          scrollTrigger: {
            trigger: ".col-2 ",
            start: "top 80%",
            end: "top 40%",
          },
        });
      });
    }, aboutContainer.current);

    return () => ctx2.revert();
  }, []);

  return (
    <div className="AboutUs">
      <div className="image" ref={container}>
        <div className="image-container"></div>
        <div
          className="cursor"
          ref={cursor}
          onClick={() => navigate("/gallery")}
        >
          <span>View</span>
          <div className="ring"></div>
          <div className="ring"></div>
          <div className="ring"></div>
          <div className="ring"></div>
        </div>
        <div className="opacity"></div>
      </div>
      <div className="AboutUs-container" ref={aboutContainer}>
        <div className="tag">
          <Wrapper>
            <span>About us</span>
          </Wrapper>
        </div>
        <BadgeGDG />
        <Wrapper>
          <img src="/assets/overlay.png" alt="" className="overlayImage" />
          <div className="col col-1">
            <div className="logo">
              <img src="/assets/logo-white.svg" alt="GDG Bhubaneswar Logo" />
            </div>
            <p ref={p}>{data[0].aboutUSHomePage}</p>
            <img
              className="img"
              src="/assets/img2.webp"
              alt="GDG Bhubaneswar Image"
              ref={image}
              onClick={() => navigate("/gallery")}
            />
          </div>
          <div className="col col-2">
            <div className="item">
              <h1 className="status" data-num={data[1].stats.Members}>
                00
              </h1>
              <span>Members</span>
            </div>
            <div className="item">
              <h1 className="status" data-num={data[1].stats.CoreMembers}>
                00
              </h1>
              <span>Core Members and Volunteer</span>
            </div>
            <div className="item">
              <h1 className="status" data-num={data[1].stats.Events}>
                00
              </h1>
              <span>Events and Workshops Organised</span>
            </div>
            <div className="item">
              <h1 className="status" data-num={data[1].stats.College}>
                00
              </h1>
              <span>College and Universities</span>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default AboutUs;
