import { FC } from "react";

interface IProps {
  text: string;
  word: boolean;
}

export const Splittext: FC<IProps> = ({ text, word }) => {
  if (word) {
    const wordArr = text.split(" ");

    return wordArr.map((item, index) => (
      <span key={index}>
        <span>{item}</span>
      </span>
    ));
  } else {
    const textArr = text.split("");

    return textArr.map((item, index) =>
      item === " " ? <div key={index} /> : <span key={index}>{item}</span>
    );
  }
};
