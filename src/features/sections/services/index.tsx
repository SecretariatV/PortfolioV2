import { SERVICES_DATA, SKILL_LIST } from "@utils/dataUtils";
import S from "./index.module.scss";
import { ServiceCard } from "@features/ui";

export const ServiceSection = () => {
  return (
    <section
      className={S.body}
      id="services-section"
      aria-labelledby="services-title"
    >
      <div className={S.body_wrapper}>
        <span id="back_title" aria-hidden="true">
          services
        </span>
        <h2 id="services-title">What I do?</h2>
        <div className={S.body_services}>
          {SERVICES_DATA.map((data, index) => (
            <ServiceCard
              key={index}
              title={data.title}
              icon={data.icon}
              content={data.content}
            />
          ))}
        </div>
        <div className={S.body_skills}>
          {SKILL_LIST.map((skill, index) => (
            <div className={S.body_skill}>
              <img
                key={index}
                src={skill.icon}
                alt={skill.title}
                className={S.body_skills_img}
              />
              <span className={S.name}>{skill.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
