import { forwardRef } from "react";
import S from "./index.module.scss";
import { IPortfolioType } from "@utils/typeUtils";

export const PortfolioCard = forwardRef<HTMLDivElement, IPortfolioType>(
  ({ title, img, type, id }, ref) => {
    return (
      <div className={S.body} ref={ref} id={type}>
        <img src={img} alt={title} id={id} />
      </div>
    );
  }
);
