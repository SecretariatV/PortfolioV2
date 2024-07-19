import { Outlet } from "react-router-dom";
import { Header } from "../mainHeader";
import S from "./index.module.scss";
import { Footer } from "../mainFooter";
import Leading from "@features/ui/leading";

let fullfilled = false;
let promise: Promise<void> | null = null;

const useTimeout = (ms: number) => {
  if (!fullfilled) {
    throw (promise ||= new Promise((res: any) => {
      setTimeout(() => {
        fullfilled = true;
        res();
      }, ms);
    }));
  }
};

const MainLayout = () => {
  useTimeout(3000);
  return (
    <>
      <Leading effect="-100%" />
      <div className={S.body}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
