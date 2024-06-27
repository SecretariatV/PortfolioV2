import { Outlet } from "react-router-dom";
import { Header } from "../mainHeader";
import S from "./index.module.scss";
import { Footer } from "../mainFooter";
import Leading from "@features/ui/leading";

const MainLayout = () => {
  return (
    <>
      <Leading effect="-100vh" />
      <div className={S.body}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
