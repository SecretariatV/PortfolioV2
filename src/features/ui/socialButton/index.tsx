import { FC } from "react";
import S from "./index.module.scss";

interface IProps {
  link: string;
  icon: JSX.Element;
  label: string;
}

export const SocialButton: FC<IProps> = ({ link, icon, label }) => {
  return (
    <a
      href={link}
      className={S.social}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {icon}
    </a>
  );
};
