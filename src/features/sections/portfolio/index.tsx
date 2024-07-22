import { Navbar } from "ovb-navbar";
import S from "./index.module.scss";
import { PORTFOLIOS } from "@utils/dataUtils";
import { PortfolioCard } from "@features/ui";
import { useRef, useState } from "react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(Flip);

export const PortfolioSection = () => {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [type, setType] = useState<string>("all");

  useGSAP(() => {
    const state = Flip.getState(itemsRef.current);

    itemsRef.current.forEach((item) => {
      if (item) {
        item.style.display =
          item.id !== type && type !== "all" ? "none" : "inline-flex";
      }
    });

    Flip.from(state, {
      duration: 0.7,
      scale: true,
      ease: "power1.inOut",
      stagger: 0.08,
      onEnter: (elements) =>
        gsap.fromTo(
          elements,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 1 }
        ),
      onLeave: (elements) =>
        gsap.to(elements, { opacity: 0, scale: 0, duration: 1 }),
    });
  }, [type]);

  return (
    <section
      className={S.body}
      id="portfolio-section"
      aria-labelledby="portfolio-title"
    >
      <div className={S.body_wrapper}>
        <span id="back_title" aria-hidden="true">
          portfolio
        </span>
        <h2 id="portfolio-title">My Work</h2>
        <div className={S.body_portfolio}>
          <Navbar
            fullWidth={false}
            width={500}
            height={40}
            activeColor="var(--button-bg-secondary)"
            color="#000"
            dataLists={[
              { value: "all", label: "All" },
              { value: "web", label: "Web" },
              { value: "web3", label: "Web3" },
              { value: "project", label: "Project" },
            ]}
            root={S.body_portfolio_root}
            mask={S.body_portfolio_mask}
            tab={S.body_portfolio_tab}
            onChange={(e) => setType(e)}
            aria-label="Portfolio category navigation"
          />
          <div className={S.body_portfolio_wrapper}>
            {PORTFOLIOS.map((data, index) => (
              <PortfolioCard
                key={index}
                title={data.title}
                img={data.img}
                id={data.id}
                type={data.type}
                live={data.live}
                ref={(el) => (itemsRef.current[index] = el)}
                aria-labelledby={`portfolio-item-${data.id}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
