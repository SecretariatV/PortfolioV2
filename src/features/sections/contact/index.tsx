import { SOCIAL_LIST } from "@utils/dataUtils";
import S from "./index.module.scss";
import { SocialButton } from "@features/ui";

export const ContactSection = () => {
  return (
    <section
      className={S.body}
      id="contact-section"
      aria-labelledby="section-title"
    >
      <div className={S.body_wrapper}>
        <span id="back_title" aria-hidden="true">
          contact
        </span>
        <h2 id="section-title">Get in Touch</h2>
        <div className={S.contact}>
          <div className={S.contact_forms} id="forms">
            <span>Let's talk?</span>
            <label htmlFor="name">
              <p id="name-title" className="form-title">
                Name
              </p>
              <input
                type="text"
                name="name"
                placeholder="Name"
                aria-labelledby="name-title"
              />
            </label>
            <label htmlFor="email">
              <p id="email-title" className="form-title">
                Email
              </p>
              <input
                type="email"
                name="email"
                placeholder="Email"
                aria-labelledby="email-title"
              />
            </label>
            <label htmlFor="talk">
              <p id="talk-title" className="form-title">
                Tell me
              </p>
              <textarea
                name="talk"
                placeholder="Tell Me About Project"
                rows={10}
                aria-labelledby="talk-title"
              />
            </label>
          </div>
          <div className={S.contact_follow}>
            <span>Follow me</span>
            <div className={S.contact_follow_socials}>
              {SOCIAL_LIST.map((social, index) => (
                <SocialButton
                  key={index}
                  link={social.link}
                  icon={social.icon}
                  label={`Follow me on ${social.name}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
