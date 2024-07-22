import { FC } from "react";
import S from "./index.module.scss";

interface IProps {
  link: string;
  icon: JSX.Element;
}

export const SocialButton: FC<IProps> = ({ link, icon }) => {
  return (
    <a
      href={link}
      className={S.social}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};
