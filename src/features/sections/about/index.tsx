import { useRef } from "react";
import S from "./index.module.scss";
import { useGSAP } from "@gsap/react";
import { Splittext } from "@features/ui";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { AMOUT_ME } from "@utils/dataUtils";

gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(textRef.current && textRef.current.children, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 70%",
        end: "120% bottom",
        scrub: 0.3,
      },
      opacity: 0.1,
      stagger: 0.3,
    });
  });

  return (
    <section
      className={S.body}
      id="about-section"
      aria-labelledby="about-title"
    >
      <div className={S.body_wrapper}>
        <div className={S.body_title}>
          <span id="back_title" aria-hidden="true">
            about me
          </span>
          <h2 id="about-title">Know Me More</h2>
        </div>
        <div className={S.body_info}>
          <div className={S.about}>
            <h4 id="about-title">
              <span>Oliver Boucher</span>, a frontend developer
            </h4>
            <h5 ref={textRef} aria-labelledby="about-title">
              <Splittext text={AMOUT_ME} word />
            </h5>
          </div>
          <img src="./working.webp" alt="Oliver working on a project" />
        </div>
      </div>
    </section>
  );
};
