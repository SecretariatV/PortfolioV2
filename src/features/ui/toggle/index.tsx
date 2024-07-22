import { AppContext } from "@machines/appMachine";
import S from "./index.module.scss";

export const Toggle = () => {
  const { send } = AppContext.useActorRef();

  return (
    <div className={S.body}>
      <input
        type="checkbox"
        className={S.toggle}
        id="toggle"
        name="toggle"
        onChange={(e) => send({ type: "TOGGLE", value: e.target.checked })}
        aria-label="Toggle switch"
      />
      <label htmlFor="toggle" className={S.label}>
        <span className={S.labelBack} />
        <span className="hidden">Toggle switch</span>
      </label>
    </div>
  );
};
