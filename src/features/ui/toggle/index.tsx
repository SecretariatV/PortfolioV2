import { AppContext } from "@machines/appMachine";
import S from "./index.module.scss";

export const Toggle = () => {
  const { send } = AppContext.useActorRef();

  return (
    <span className={S.body}>
      <input
        type="checkbox"
        className={S.toggle}
        id="toggle"
        onChange={(e) => send({ type: "TOGGLE", value: e.target.checked })}
      />
      <label htmlFor="toggle" className={S.label}>
        <span className={S.labelBack} />
      </label>
    </span>
  );
};
