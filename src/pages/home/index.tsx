import { AboutSection, HomeSecton, ServiceSection } from "@features/sections";
import S from "./index.module.scss";

const HomePage = () => {
  return (
    <div className={S.body}>
      <HomeSecton />
      <AboutSection />
      <ServiceSection />
    </div>
  );
};

export default HomePage;
