import { AppContext } from "@machines/appMachine";
import S from "./index.module.scss";

export const HamburgerButton = () => {
  const { send } = AppContext.useActorRef();
  const state = AppContext.useSelector((state) => state);

  const handleChange = () => {
    send({ type: "MOBILE_MENU", value: !state.context.mobileMenu });
  };

  return (
    <button className={S.root} id="hamburger-button">
      <div className={S.line} id="hamburger-line" />
      <div className={S.line} id="hamburger-line" />
      <div className={S.line} id="hamburger-line" />
      <input
        type="checkbox"
        id="hamburger"
        className={S.hidden}
        onChange={handleChange}
        checked={state.context.mobileMenu}
        aria-hidden="true"
      />
    </button>
  );
};
