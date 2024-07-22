import { Button, Typewriter } from "@features/ui";
import S from "./index.module.scss";
import { ABOUT_SELF_DATA } from "@utils/dataUtils";

export const HomeSecton = () => {
  return (
    <section className={S.body} id="home-section" aria-labelledby="home-title">
      <div className={S.wrapper}>
        <div className={S.info}>
          <span id="back_title" aria-hidden="true">
            welcome
          </span>
          <h1 id="home-title">Hi, I'm Oliver</h1>
          <Typewriter
            texts={ABOUT_SELF_DATA}
            typingSpeed={0.1}
            deletingSpeed={0.05}
            pause={1}
            aria-label="Typewriter introducing Oliver"
          />
          <Button title="My Resume" aria-label="Link to my resume" />
        </div>
        <img
          src="./avatar.webp"
          alt="Avatar of Oliver"
          className={S.wrapper_avatar}
        />
      </div>
    </section>
  );
};
