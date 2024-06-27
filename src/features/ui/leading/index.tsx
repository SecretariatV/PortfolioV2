import { useAnimate } from "framer-motion";
import S from "./index.module.scss";
import { FC, useEffect } from "react";

interface IProps {
  effect: string;
}

const Leading: FC<IProps> = ({ effect }) => {
  const [textRef, animate] = useAnimate();

  useEffect(() => {
    animate(textRef.current, { y: effect }, { duration: 1 });
  }, [effect]);

  return (
    <div className={S.body} ref={textRef}>
      <h1 className={S.mainText}>Oliver Boucher</h1>
      <h1 className={S.outline}>Oliver Boucher</h1>
    </div>
  );
};

export default Leading;
