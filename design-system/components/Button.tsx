import * as React from "react";
import { theme } from "../theme";
import styled from "styled-components";

const StyledButton = styled.button`
  height: 150px;
  width: 50px;
  background-color: "#05f";
  &:hover {
    background-color: ${theme.color.primary};
  }
`;

export type Props = {
  /** A prop for controlling the inner text */
  text: string;
};

export const Button: React.FC<Props> = ({ text }) => {
  return <StyledButton>hello {text}</StyledButton>;
};
