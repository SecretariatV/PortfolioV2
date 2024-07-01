import { Navbar } from "ovb-navbar";
import S from "./index.module.scss";
import { Toggle } from "@features/ui";

export const Header = () => {
  return (
    <div className={S.body}>
      <div className={S.wrapper}>
        <div className={S.logo}>
          <img src="./logo.png" alt="" />
          <p className="logo">OVB</p>
        </div>
        <Navbar
          fullWidth={false}
          width={500}
          height={40}
          activeColor="#20c997"
          color="#000"
          dataLists={[
            { value: "home", label: "Home" },
            { value: "about", label: "About" },
            { value: "portfolio", label: "Portfolio" },
            { value: "resume", label: "Resume" },
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
