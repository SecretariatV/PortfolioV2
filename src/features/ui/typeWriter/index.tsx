import gsap from "gsap";
import { FC, useEffect, useRef } from "react";
import S from "./index.module.scss";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

interface IProps {
  texts: string[];
  typingSpeed: number;
  deletingSpeed: number;
  pause: number;
}

export const Typewriter: FC<IProps> = ({
  texts,
  typingSpeed,
  deletingSpeed,
  pause,
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: pause });

    texts.forEach((text) => {
      const chars = text.split("");
      tl.to(textRef.current, {
        duration: typingSpeed * chars.length,
        text: { value: text },
        ease: "none",
        onComplete: () => {
          gsap.to(textRef.current, { delay: pause });
        },
      }).to(
        {},
        {
          duration: deletingSpeed * text.length,
          onUpdate: () => {
            const currentText = textRef.current?.textContent;
            if (currentText) {
              textRef.current.textContent = currentText.slice(0, -1);
            }
          },
          ease: "none",
          onComplete: () => {
            gsap.to(textRef.current, { delay: pause });
          },
        },
        "+=2.5"
      );
    });

    gsap.to(cursorRef.current, {
      opacity: 0,
      ease: "power2.inOut",
      repeat: -1,
      duration: 0.5,
      yoyo: true,
    });
  }, [texts, typingSpeed, pause, deletingSpeed]);

  return (
    <div className={S.body}>
      <h3 ref={textRef} className={S.title} id="title" />
      <h3 ref={cursorRef} className={S.cursor}>
        |
      </h3>
    </div>
  );
};
