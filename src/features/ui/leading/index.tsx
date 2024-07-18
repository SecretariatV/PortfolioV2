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
        description="Welcome to the portfolio of Oliver Boucher, a self-taught front-end developer with an unmatched passion for programming. Oliver excels in React, TypeScript, and SCSS, ensuring every project is detailed and efficient. His interests span both front-end and back-end development, showcasing his versatility and commitment to creating seamless applications."
        type="website"
      />
      <div className={S.body} ref={textRef}>
        <h1 className={S.mainText}>Oliver Boucher</h1>
        <h1 className={S.outline}>Oliver Boucher</h1>
      </div>
    </>
  );
};

export default Leading;
