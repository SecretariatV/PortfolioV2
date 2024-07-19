import { AboutSection, HomeSecton, ServiceSection } from "@features/sections";
import S from "./index.module.scss";
import { PortfolioSection } from "@features/sections/portfolio";

const HomePage = () => {
  return (
    <div className={S.body}>
      <HomeSecton />
      <AboutSection />
      <ServiceSection />
      <PortfolioSection />
    </div>
  );
};

export default HomePage;
