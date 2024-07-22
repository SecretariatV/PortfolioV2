import { IconNames } from "@assets/icon/icons";
import { ReactNode } from "react";

export interface IRouterType {
  title: string;
  path: string;
  element: JSX.Element;
  children?: IRouterType[];
}

export interface IBasicProps {
  children?: ReactNode;
}

export interface IPropsService {
  title: string;
  content: string;
  icon: IconNames;
}

export interface ISkillType {
  title: string;
  icon: string;
}

export interface ISocialProps {
  link: string;
  icon: JSX.Element;
}

export interface IPortfolioType {
  id: number;
  img: string;
  title: string;
  type: string;
  live: string;
}
