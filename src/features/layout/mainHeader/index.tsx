import { Navbar } from "ovb-navbar";
import S from "./index.module.scss";
import { Toggle } from "@features/ui";
import useScrollToAnchor from "@hooks/useScrollToAnchor";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  useScrollToAnchor();

  const changeActionTab = (collection: string) => {
    navigate(`#${collection}-section`);
  };

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
            { value: "services", label: "Services" },
            { value: "portfolio", label: "Portfolio" },
            { value: "contact", label: "Contact" },
          ]}
          root={S.root}
          mask={S.mask}
          tab={S.tab}
          onChange={changeActionTab}
        />
        <Toggle />
      </div>
    </div>
  );
};
