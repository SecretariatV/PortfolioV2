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
