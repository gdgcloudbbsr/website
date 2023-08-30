import { Link, NavLink } from "react-router-dom";
import Wrapper from "../Components/Wrapper";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { animateScroll as scroll } from "react-scroll";

const links = [
  {
    text: "home",
    link: "/",
  },
  {
    text: "about us",
    link: "/about",
  },
  {
    text: "events",
    link: "/events",
  },
  {
    text: "gallery",
    link: "/gallery",
  },
  {
    text: "team",
    link: "/team",
  },
  {
    text: "contact",
    link: "/contact",
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const tl = useRef(
    gsap.timeline({ defaults: { ease: "power2.inOut" } }).reverse()
  );

  const progressBar = useRef(null);

  const toggleMenu = (menuOpen) => {
    if (menuOpen === true) {
      tl.current
        .to(
          ".navMenu",
          {
            y: 0,
          },
          "a"
        )
        .to(
          ".navMenu-container .links",
          {
            opacity: 0,
          },
          "a"
        )
        .to(
          ".navMenu-container .links",
          {
            y: 0,
            opacity: 0.9,
            stagger: 0.09,
          },
          "a"
        );
    }
  };

  const handleClick = () => {
    toggleMenu(!menuOpen);
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    tl.current.reversed(!menuOpen);
  }, [menuOpen]);

  return (
    <div id="Header">
      <Wrapper>
        <div id="Header-container">
          <div className="left">
            <div className="logo">
              <img src="/assets/logo.svg" alt="GDG Bhubaneswar Logo" />
            </div>
          </div>
          <div className="right">
            <div className="navMenu">
              <div className="navMenu-container">
                {links.map((elem, index) => (
                  <div className={`links`} key={index}>
                    <NavLink
                      to={elem.link}
                      onClick={() => {
                        setMenuOpen(false);
                        scroll.scrollToTop();
                      }}
                    >
                      {elem.text}
                    </NavLink>
                  </div>
                ))}
                <Link
                  className="PrimaryButton"
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  <span>Join us</span>
                  <span>Join us</span>
                </Link>
              </div>
            </div>
            <div
              className={`hamMenu ${menuOpen && "active"}`}
              onClick={handleClick}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
