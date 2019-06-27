import * as React from "react";
import styled from "styled-components";
import {theme} from "../theme"

export type Props = {
  /** An example comment. This prop is used to set the text for this component */
  text?: string;
  /** An example color comment. This prop is used to set the text color for this component */
  color?: string;
};

export const Button: React.FC<Props> = ({ text, color }) => (
  <MyButton color={color}>{text} hello there</MyButton>
);

const MyButton = styled.button`
  height: 200px;
  width: 200px;
  background-color: "blue";
  color: black;
  &:hover {
        color: ${theme.color.primary};
      background-color: ${props => props.color};
  }
`;
