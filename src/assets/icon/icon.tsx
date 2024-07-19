import { FC } from "react";
import { IconNames, Icons } from "./icons";

interface IProps {
  name: IconNames;
  size: number;
}

export const Icon: FC<IProps> = ({ name, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 167 167"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {Icons[name]()}
    </svg>
  );
};
