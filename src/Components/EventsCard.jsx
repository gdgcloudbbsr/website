import { useEffect, useRef } from "react";
import gsap from "gsap";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const EventsCard = ({ img, title, link }) => {
  const main = useRef(null);
  const cursor = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      main.current.addEventListener("mousemove", (e) => {
        let xPos = e.clientX / window.innerWidth - 0.5,
          yPos = e.clientY / window.innerHeight - 0.5;

        gsap.to(main.current, {
          rotationY: 30 * xPos,
          rotationX: 30 * yPos,
          ease: "Power1.easeOut",
          transformPerspective: 900,
          transformOrigin: "center",
        });
      });

      let diffRotate = 0;
      let rotate = 0;

      main.current.addEventListener("mousemove", (e) => {
        diffRotate = rotate - e.clientX;
        rotate = e.clientX;
        gsap.to(cursor.current, {
          opacity: 1,
          scale: 1.2,
          top: e.clientY - main.current.getBoundingClientRect().top,
          left: e.clientX - main.current.getBoundingClientRect().left,
          rotate: gsap.utils.clamp(-30, 30, diffRotate),
          ease: "power2.out",
        });
      });

      main.current.addEventListener("mouseleave", () => {
        gsap.to(cursor.current, {
          opacity: 0,
          scale: 0,
          ease: "power2.out",
        });
        gsap.to(main.current, {
          rotationY: 0,
          rotationX: 0,
          ease: "Power1.easeOut",
        });
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
    }, main.current);

    return () => ctx.revert();
  }, []);
  return (
    <div className="EventsCard" ref={main}>
      <Link to={link} className="cursor" ref={cursor}>
        <BsArrowUpRight />
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="ring"></div>
      </Link>
      <div className="tag">upcoming</div>
      <div className="img">
        <img src={img} alt="GDG Bhubaneswar Events" />
      </div>
      <div className="container">
        <div className="text">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
