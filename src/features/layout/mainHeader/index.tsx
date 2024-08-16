import { Navbar } from "ovb-navbar";
import S from "./index.module.scss";
import { Toggle } from "@features/ui";
import useScrollToAnchor from "@hooks/useScrollToAnchor";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
// import useIntersectionObserver from "@hooks/useIntersectionObserver";

export const Header = () => {
  const [action, setAction] = useState<boolean>(false);
  const [currentSection, _] = useState<string>("");
  const [currentTab, setCurrentTab] = useState<string>("");
  const headerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // useIntersectionObserver(setCurrentSection, action, setAction, currentTab);
  useScrollToAnchor();

  useEffect(() => {
    navigate(`#${currentSection}`);
  }, [currentSection]);

  useEffect(() => {
    const clickHandler = () => {
      setAction(true);
    };

    if (headerRef.current) {
      headerRef.current.addEventListener("click", clickHandler);
    }

    return () => {
      if (headerRef.current) {
        headerRef.current.removeEventListener("click", clickHandler);
      }
    };
  }, []);

  useEffect(() => {
    if (action && location.hash.slice(1).split("-")[0] === currentTab) {
      setAction(false);
    }
  }, [location, currentTab]);

  const changeActionTab = (collection: string) => {
    setCurrentTab(collection);
    navigate(`#${collection}-section`);
  };

  return (
    <div className={S.body}>
      <div className={S.wrapper} ref={headerRef}>
        <div className={S.logo}>
          <img src="./logo.png" alt="Logo img" />
          <p id="logo">OVB</p>
        </div>
        <div className={S.navbar}>
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
            activeTab={currentSection.split("-")[0]}
            root={S.root}
            mask={S.mask}
            tab={S.tab}
            onChange={changeActionTab}
          />
        </div>
        <Toggle />
      </div>
    </div>
  );
};
