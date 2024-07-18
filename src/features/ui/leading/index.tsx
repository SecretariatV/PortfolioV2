import { useAnimate } from "framer-motion";
import S from "./index.module.scss";
import { FC, useEffect } from "react";
import SEO from "@features/seo";

interface IProps {
  effect: string;
}

const Leading: FC<IProps> = ({ effect }) => {
  const [textRef, animate] = useAnimate();

  useEffect(() => {
    animate(textRef.current, { y: effect }, { duration: 1 });
  }, [effect]);

  return (
    <>
      <SEO
        title="Oliver Boucher Portfolio"
        description="Welcome to the portfolio of Oliver Boucher, a creative and self-taught front-end developer with an unmatched passion and love for programming. With three years of experience, Oliver combines meticulous attention to detail with a dedication to ensuring every project runs smoothly and efficiently. Proficient in React, TypeScript, and SCSS, Oliver excels in crafting intuitive and responsive user interfaces. His interest extends beyond front-end development, delving into back-end technologies to create holistic and seamless applications."
        type="portfolio"
      />
      <div className={S.body} ref={textRef}>
        <h1 className={S.mainText}>Oliver Boucher</h1>
        <h1 className={S.outline}>Oliver Boucher</h1>
      </div>
    </>
  );
};

export default Leading;
