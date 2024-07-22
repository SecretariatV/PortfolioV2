import { Navbar } from "ovb-navbar";
import S from "./index.module.scss";
import { Toggle } from "@features/ui";
import useScrollToAnchor from "@hooks/useScrollToAnchor";

export const Header = () => {
  useScrollToAnchor();

  return (
    <div className={S.body}>
      <div className={S.wrapper}>
        <div className={S.logo}>
          <img src="./logo.png" alt="Logo img" />
          <p id="logo">OVB</p>
        </div>
        <Navbar
          fullWidth={false}
          width={700}
          height={40}
          activeColor="#20c997"
          color="#000"
          dataLists={[
            { value: "home", label: "Home" },
            { value: "about", label: "About" },
            { value: "service", label: "Services" },
            { value: "portfolio", label: "Portfolio" },
            { value: "contact", label: "Contact" },
          ]}
          root={S.root}
          mask={S.mask}
          tab={S.tab}
        />
        <Toggle />
      </div>
    </div>
  );
};
