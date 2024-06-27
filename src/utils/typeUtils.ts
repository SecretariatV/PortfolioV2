export interface IRouterType {
  title: string;
  path: string;
  element: JSX.Element;
  children?: IRouterType[];
}
