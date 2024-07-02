import S from "./index.module.scss";

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

const HomePage = () => {
  // useTimeout(3000);
  return <div className={S.body}>HomePage</div>;
};

export default HomePage;
