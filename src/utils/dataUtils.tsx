import { lazy } from "react";
import { IRouterType } from "./typeUtils";

const LazyMainLayout = lazy(() => import("@features/layout/mainLayout"));
const LazyHomePage = lazy(() => import("@pages/home"));
const LazyErrorPage = lazy(() => import("@pages/404"));

export const PAGE_DATA: IRouterType[] = [
  {
    title: "Page Layout",
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
