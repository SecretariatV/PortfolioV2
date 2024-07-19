import S from "./index.module.scss";

export const AboutSection = () => {
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
            <p>
              Meet Oliver Boucher, a creative front-end developer who has forged
              his own path through self-taught expertise and an unparalleled
              passion for programming. With a meticulous eye for detail, Oliver
              ensures that every project operates flawlessly. His proficiency
              spans React, TypeScript, and SCSS, enabling him to craft
              exceptional user experiences.
              <br />
              <br />
              Oliver's interests aren't confined to the front-end; he delves
              into back-end technologies, bringing a holistic approach to his
              projects. Recently, he has developed a keen interest in web3,
              exploring the cutting-edge of decentralized web technologies.
              Oliver's dedication to continuous learning and innovation sets him
              apart, making him a valuable asset in the ever-evolving world of
              web development.
            </p>
          </div>
          <img src="./working.webp" alt="Working img" />
        </div>
      </div>
    </section>
  );
};
