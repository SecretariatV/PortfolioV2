import S from "./index.module.scss";

export const Footer = () => {
  return (
    <footer className={S.body}>
      <div className={S.body_wrapper}>
        <p>
          Copyright @ {new Date().getFullYear()} <span>Oliver</span>. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};
