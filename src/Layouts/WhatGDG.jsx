import { useEffect, useRef } from "react";
import Wrapper from "../Components/Wrapper";
import gsap from "gsap";

import data from "../Data/WhatIsGDG.json";

const WhatGDG = () => {
  const section = useRef(null);
  const img = useRef(null);
  const h1 = useRef(null);
  const p = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(img.current, {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          end: "top 60%",
          trigger: img.current,
        },
      });
      gsap.from(h1.current, {
        duration: 1,
        yPercent: 100,
        stagger: 0.3,
        scrollTrigger: {
          end: "top 60%",
          trigger: h1.current,
        },
      });
      gsap.from(p.current, {
        duration: 1,
        y: 100,
        opacity: 0,
        scrollTrigger: {
          end: "top 60%",
          trigger: h1.current,
        },
      });
    }, section.current);

    return () => ctx.revert();
  }, []);
  return (
    <div className="WhatGDG" ref={section}>
      <Wrapper>
        <div className="container">
          <div className="img" ref={img}>
            <img src="/assets/code.svg" alt="GDG Bhubaneswar" />
          </div>
          <div className="text">
            <div className="hide">
              <h1 ref={h1}>{data.h1}</h1>
            </div>

            <p ref={p}>{data.p}</p>
          </div>
        </div>
      </Wrapper>
      <div className="overlayBox">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default WhatGDG;
