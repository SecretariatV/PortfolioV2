import S from "./index.module.scss";

export const ContactSection = () => {
  return (
    <section className={S.body}>
      <div className={S.body_wrapper}>
        <span id="back_title">contact</span>
        <h2>Get in Touch</h2>
        <div className={S.contact}>
          <div className={S.contact_forms} id="forms">
            <span>Let's talk?</span>
            <label htmlFor="name">
              <p id="form-title">Name</p>
              <input type="text" name="name" placeholder="Name" />
            </label>
            <label htmlFor="email">
              <p id="form-title">Email</p>
              <input type="email" name="email" placeholder="Email" />
            </label>
            <label htmlFor="talk">
              <p id="form-title">Tell me</p>
              <textarea
                name="talk"
                placeholder="Tell Me About Project"
                rows={10}
              />
            </label>
          </div>
          <div className={S.contact_follow}>
            <span>Follow me</span>
            <div className={S.contact_follow_socials}>
              <a
                href="https://github.com/SecretariatV"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
