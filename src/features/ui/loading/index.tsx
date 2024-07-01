import S from "./index.module.scss";

export const Loading = () => {
  return (
    <div className={S.body}>
      <div className={S.loader} />
    </div>
  );
};
