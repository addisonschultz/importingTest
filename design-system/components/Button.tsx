import * as React from "react";
import styled from "styled-components";
import { theme } from "../theme";

export type Props = {
  /** An example comment. This prop is used to set the text for this component */
  text?: string;

  /** An example comment. This prop is used to set the class name to default, primary, or secondary */
  kind?: "default" | "primary" | "secondary";
};

export const Button: React.FC<Props> = ({ text, kind }) => (
  <MyExample className={`${kind ? kind : ""}`}>
    {text ? text : "Welcome to Loupe!"}
  </MyExample>
);

const MyExample = styled.div`
  /* Default styles */
  height: 200px;
  width: 200px;
  font-family: ${theme.font};
  background: ${theme.color.lightGrey};
  &:hover {
    /* Define CSS when hovered */
  }
  &:active {
    /* Define CSS when active */
  }
  &.primary {
    /* Define CSS when primary */
  }
  &.secondary {
    /* Define CSS when primary */
  }
`;
