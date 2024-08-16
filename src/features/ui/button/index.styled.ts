import styled from "styled-components";

const Container = styled.button`
  color: white;
  border-radius: 100px;
  background-color: #040834;
  border: 0;
  outline: none;
  padding: 12px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: translateX(-100%);
    background-color: #ff014f;
    transition: transform ease-in-out 0.4s;
  }

  &:hover::before {
    transform: translateX(0);
  }

  span {
    font-weight: 700;
    font-family: "Rubik", sans-serif;
    font-size: 18px;
    position: relative;
    z-index: 2;
  }
  @media (min-width: 640px) {
    padding: 16px 52px;
  }
`;

export { Container };
