import S from "./index.module.scss";

const ErrorPage = () => {
  return (
    <div className={S.body}>
      <h3 className={S.body_title}>404</h3>
      <div className={S.cloak}>
        <div className={S.cloak_container}>
          <div className={S.cloak_container_body} />
        </div>
      </div>
      <div className={S.info}>
        <h4>We can't find that page</h4>
        <p>
          We're fairly sure that page used to be here, but seems to have gone
          missing. We do apologise on it's behalf.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
