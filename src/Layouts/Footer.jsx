import Wrapper from "../Components/Wrapper";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";
import data from "../Data/SocialLinks.json";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const currentDate = new Date();
  return (
    <div className="footer">
      <Wrapper>
        <div className="footer-container">
          <div className="left">
            <div className="logo">
              <img src="/assets/logo-footer.svg" alt="GDG Bhubaneswar Logo" />
            </div>
            <p>
              Stay informed, lead the way with industry trends, and embrace
              cutting-edge technologies for tommorrow's challenges.
            </p>
            <div className="social-links">
              <Link to={data.facebook} className="links">
                <AiFillFacebook className="ico" />
              </Link>
              <Link to={data.instagram} className="links">
                <AiFillInstagram className="ico" />
              </Link>
              <Link to={data.linkedin} className="links">
                <AiFillLinkedin className="ico" />
              </Link>
              <Link to={data.twitter} className="links">
                <AiFillTwitterSquare className="ico" />
              </Link>
            </div>
          </div>
          <div className="right">
            <div className="right-container">
              <Link to={"/about"} onClick={() => scroll.scrollToTop()}>
                About
              </Link>
              <Link to={"/events"} onClick={() => scroll.scrollToTop()}>
                Events
              </Link>
              <Link to={"/team"} onClick={() => scroll.scrollToTop()}>
                Team
              </Link>
              <Link to={"/gallery"} onClick={() => scroll.scrollToTop()}>
                Gallery
              </Link>
            </div>
          </div>
        </div>
        <div className="copyright">
          <h4>
            <AiOutlineCopyrightCircle className="ico" />
            Copyright {currentDate.getFullYear()} GDG Bhubaneswar
          </h4>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
