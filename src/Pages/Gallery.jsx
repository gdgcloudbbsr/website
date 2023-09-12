import { useEffect, useRef } from "react";
import gsap from "gsap";
import PageHeading from "../Components/PageHeading";
import GalleryBanner from "../Layouts/GalleryBanner";
import HeaderTitle from "../Components/HeaderTitle";
import Carsoual from "../Components/Carsoual";
import Wrapper from "../Components/Wrapper";

const data = [
  "/assets/img3.webp",
  "/assets/img4.webp",
  "/assets/img5.webp",
  "/assets/img6.webp",
  "/assets/img11.webp",
  "/assets/img7.webp",
  "/assets/img8.webp",
  "/assets/img9.webp",
  "/assets/img10.webp",
];

const Gallery = () => {
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
            opacity: 0,
            duration: 1,
            stagger: 0.1,
          },
          "-=.5"
        )

        .to(".Pagelodder .text h1", {
          y: 200,
          opacity: 0,
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
        .from(
          headingText.current.childNodes[0].children[3],
          {
            ease: "power2.out",
            autoAlpha: 0,
            duration: 0.5,
          },
          "c"
        )
        .from(
          banner.current,
          {
            y: -100,
            autoAlpha: 0,
            duration: 1.5,
            zIndex: -1,
          },
          "c"
        );
    }, main.current);
    return () => ctxAbout.revert();
  }, []);
  return (
    <div id="Gallery" ref={main}>
      <div className="overlayBox">
        <div></div>
        <div></div>
      </div>
      <div className="Pagelodder">
        <div className="overlayBlur"></div>

        <div className="text">
          <div className="hide">
            <h1>Gallery</h1>
          </div>
          <div className="hide">
            <h1>Gallery</h1>
          </div>
          <div className="hide">
            <h1>Gallery</h1>
          </div>
        </div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <div ref={headingText}>
        <PageHeading
          h1={"Gallery"}
          p={
            "Here are some Pics of the events, seminars and workshops hosted by GDG Bhubaneswar"
          }
        />
      </div>
      <div ref={banner}>
        <GalleryBanner />
      </div>
      <div className="Gallery-container">
        <Wrapper>
          <div className="GallerySection GallerySection-1">
            <div className="GallerySection-text">
              <HeaderTitle h2={"Devfest 2022"} />
            </div>

            <Carsoual>
              {data.map((elem, index) => (
                <div className="GallerySection-container-image" key={index}>
                  <div className="image">
                    <img src={elem} alt="GDG Bhubaneswar Image" />
                  </div>
                </div>
              ))}
            </Carsoual>
          </div>

          <div className="GallerySection GallerySection-2">
            <div className="GallerySection-text">
              <HeaderTitle h2={"Google I/O 2023"} />
            </div>

            <Carsoual>
              {data.map((elem, index) => (
                <div className="GallerySection-container-image" key={index}>
                  <div className="image">
                    <img src={elem} alt="GDG Bhubaneswar Image" />
                  </div>
                </div>
              ))}
            </Carsoual>
          </div>

          <div className="GallerySection GallerySection-3">
            <div className="GallerySection-text">
              <HeaderTitle h2={"Google Cloud Community Day 2023"} />
            </div>

            <Carsoual>
              {data.map((elem, index) => (
                <div className="GallerySection-container-image" key={index}>
                  <div className="image">
                    <img src={elem} alt="GDG Bhubaneswar Image" />
                  </div>
                </div>
              ))}
            </Carsoual>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Gallery;
