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
      stagger: 1,
    });
  });

  return (
    <section className={S.body}>
      <div className={S.body_wrapper}>
        <div className={S.body_title}>
          <span id="back_title">about me</span>
          <h2>Know Me More</h2>
        </div>
        <div className={S.body_info}>
          <div className={S.about}>
            <h4>
              <span>Oliver Boucher</span>, a frontend developer
            </h4>
            <h5 ref={textRef}>
              <Splittext text={AMOUT_ME} word />
            </h5>
          </div>
          <img src="./working.webp" alt="Working img" />
        </div>
      </div>
    </section>
  );
};
