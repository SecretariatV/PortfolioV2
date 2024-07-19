import { FC } from "react";
import * as S from "./index.styled";

interface IProps {
  title: string;
}

export const Button: FC<IProps> = ({ title }) => {
  return (
    <S.Container>
      <span>{title}</span>
    </S.Container>
  );
};
