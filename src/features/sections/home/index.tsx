import S from "./index.module.scss";
import {} from "typewriter-effect";

export const HomeSecton = () => {
  return (
    <section className={S.body}>
      <div className={S.wrapper}>
        <div className={S.info}>
          <h2>Hi, I'm Oliver</h2>
          <h3>Web developer</h3>
        </div>
      </div>
    </section>
  );
};
