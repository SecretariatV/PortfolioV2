import { lazy } from "react";
import {
  IPortfolioType,
  IPropsService,
  IRouterType,
  ISkillType,
} from "./typeUtils";
import reactIcon from "@assets/skills/react.webp";
import tsIcon from "@assets/skills/typescript.webp";
import jsIcon from "@assets/skills/javascript.webp";
import htmlIcon from "@assets/skills/html.webp";
import phaserIcon from "@assets/skills/pahser.webp";
import cssIcon from "@assets/skills/css.webp";
import styleIcon from "@assets/skills/styled-components.webp";
import scssIcon from "@assets/skills/sass.webp";
import tailwindIcon from "@assets/skills/tailwind.webp";
import gsapIcon from "@assets/skills/gsap.webp";
import nodeIcon from "@assets/skills/nodejs.webp";
import graphqlIcon from "@assets/skills/graphql.webp";
import dockerIcon from "@assets/skills/docker.webp";
import mongoIcon from "@assets/skills/mongodb.webp";
import viteIcon from "@assets/skills/vite.webp";
import cypressIcon from "@assets/skills/cypress.webp";
import vitestIcon from "@assets/skills/vitest.webp";
import jestIcon from "@assets/skills/jest.webp";
import figmaIcon from "@assets/skills/figma.webp";
import githubIcon from "@assets/skills/github.webp";
import portfolio from "@assets/projects/portfolio.webp";
import covault from "@assets/projects/covault.webp";
import pioneerwhite from "@assets/projects/pioneer_doc.webp";
import strangepeople from "@assets/projects/strangepeople.webp";
import pomodoro from "@assets/projects/pomodoro.webp";
import pioneer from "@assets/projects/pioneer.webp";

const LazyMainLayout = lazy(() => import("@features/layout/mainLayout"));
const LazyHomePage = lazy(() => import("@pages/home"));
const LazyErrorPage = lazy(() => import("@pages/404"));

const PAGE_DATA: IRouterType[] = [
  {
    title: "Page  Layout",
    path: "/",
    element: <LazyMainLayout />,
    children: [
      {
        title: "Home Page",
        path: "",
        element: <LazyHomePage />,
      },
    ],
  },
  {
    title: "404 Page",
    path: "/*",
    element: <LazyErrorPage />,
  },
];

const ABOUT_SELF_DATA: string[] = [
  "Web developer",
  "Front end developer",
  "Unmatched passion ",
  "Game developer",
];

const SERVICES_DATA: IPropsService[] = [
  {
    title: "Web Development",
    content:
      "As a seasoned web developer, Oliver excels in building responsive and dynamic websites. Utilizing technologies like React, TypeScript, and SCSS, he creates user-friendly interfaces and ensures seamless performance across all devices.",
    icon: "WebDevelopment",
  },
  {
    title: "App Development",
    content:
      "Oliver's app development skills allow him to create intuitive and feature-rich applications for both mobile and desktop platforms. He focuses on delivering a smooth user experience, robust functionality, and aesthetically pleasing design.",
    icon: "Appdevelopment",
  },
  {
    title: "Game Development",
    content:
      "Oliver Boucher is skilled in game development, combining creativity with technical prowess to create engaging and interactive gaming experiences. His expertise in various programming languages and frameworks ensures that each game is not only fun but also well-optimized and visually stunning.",
    icon: "Gamedevelopment",
  },
  {
    title: "Web3 Integration",
    content:
      "Oliver is at the forefront of web3 technologies, offering seamless integration of decentralized web features. His knowledge in this emerging field allows him to incorporate blockchain and other web3 innovations into projects, ensuring they are future-proof and cutting-edge.",
    icon: "Web3development",
  },
  {
    title: "UX/UI Design",
    content:
      "With a keen eye for design and user experience, Oliver excels in UX/UI design. He ensures that digital products are not only visually appealing but also intuitive and easy to navigate, enhancing user satisfaction and engagement.",
    icon: "Uxuidesign",
  },
  {
    title: "SEO Marketing",
    content:
      "Oliver understands the importance of visibility in the digital landscape. His expertise in SEO marketing helps businesses improve their online presence, drive organic traffic, and achieve higher search engine rankings through strategic optimization techniques.",
    icon: "Seomarketing",
  },
];

const SKILL_LIST: ISkillType[] = [
  {
    title: "React",
    icon: reactIcon,
  },
  {
    title: "TypeScript",
    icon: tsIcon,
  },
  {
    title: "JS",
    icon: jsIcon,
  },
  {
    title: "HTML",
    icon: htmlIcon,
  },
  {
    title: "Phaser",
    icon: phaserIcon,
  },
  {
    title: "CSS",
    icon: cssIcon,
  },
  {
    title: "Styled Components",
    icon: styleIcon,
  },
  {
    title: "SCSS",
    icon: scssIcon,
  },
  {
    title: "Tailwind",
    icon: tailwindIcon,
  },
  {
    title: "GSAP",
    icon: gsapIcon,
  },
  {
    title: "Node JS",
    icon: nodeIcon,
  },
  {
    title: "GraphQL",
    icon: graphqlIcon,
  },
  {
    title: "Docker",
    icon: dockerIcon,
  },
  {
    title: "MongoDB",
    icon: mongoIcon,
  },
  {
    title: "Vite",
    icon: viteIcon,
  },
  {
    title: "cypress",
    icon: cypressIcon,
  },
  {
    title: "Vitest",
    icon: vitestIcon,
  },
  {
    title: "Jest",
    icon: jestIcon,
  },
  {
    title: "Figma",
    icon: figmaIcon,
  },
  {
    title: "Github",
    icon: githubIcon,
  },
];

const AMOUT_ME: string =
  "Meet Oliver Boucher, a creative front-end developer who has forged his own path through self-taught expertise and an unparalleled passion for programming. With a meticulous eye for detail, Oliver ensures that every project operates flawlessly. His proficiency spans React, TypeScript, and SCSS, enabling him to craft exceptional user experiences. Oliver's interests aren't confined to the front-end; he delves into back-end technologies, bringing a holistic approach to his projects. Recently, he has developed a keen interest in web3, exploring the cutting-edge of decentralized web technologies. Oliver's dedication to continuous learning and innovation sets him apart, making him a valuable asset in the ever-evolving world of web development.";

const PORTFOLIOS: IPortfolioType[] = [
  { id: 0, img: portfolio, title: "Portfolio", type: "project" },
  { id: 2, img: covault, title: "Covault", type: "web" },
  { id: 3, img: pioneerwhite, title: "Pioneer Whitepaper", type: "web" },
  { id: 4, img: strangepeople, title: "Strange People", type: "web3" },
  { id: 5, img: pomodoro, title: "Pomodoro Clock", type: "project" },
  { id: 6, img: pioneer, title: "Pioneer regendary", type: "web3" },
];

export {
  PAGE_DATA,
  ABOUT_SELF_DATA,
  SERVICES_DATA,
  SKILL_LIST,
  AMOUT_ME,
  PORTFOLIOS,
};
