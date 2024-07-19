import { FC } from "react";
import S from "./index.module.scss";
import { IPropsService } from "@utils/typeUtils";
import { Icon } from "@assets/icon/icon";

export const ServiceCard: FC<IPropsService> = ({ title, content, icon }) => {
  return (
    <div className={S.body}>
      <div className={S.body_icon}>
        <Icon name={icon} size={48} />
      </div>
      <h5 className={S.body_title}>{title}</h5>
      <span className={S.body_content}>{content}</span>
    </div>
  );
};
