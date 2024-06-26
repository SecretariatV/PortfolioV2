import S from "./index.module.scss";

export const Toggle = () => {
  return (
    <span className={S.body}>
      <input type="checkbox" className={S.toggle} id="toggle" />
      <label htmlFor="toggle" className={S.label}>
        <span className={S.labelBack} />
      </label>
    </span>
  );
};
