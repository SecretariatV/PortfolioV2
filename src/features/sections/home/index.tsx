import { Button, Typewriter } from "@features/ui";
import S from "./index.module.scss";
import { ABOUT_SELF_DATA } from "@utils/dataUtils";

export const HomeSecton = () => {
  return (
    <section className={S.body}>
      <div className={S.wrapper}>
        <div className={S.info}>
          <span id="back_title">welcome</span>
          <h1>Hi, I'm Oliver</h1>
          <Typewriter
            texts={ABOUT_SELF_DATA}
            typingSpeed={0.1}
            deletingSpeed={0.05}
            pause={1}
          />
          <Button title="My Resume" />
        </div>
        <img src="./avatar.webp" alt="Avatar" className={S.wrapper_avatar} />
      </div>
    </section>
  );
};
