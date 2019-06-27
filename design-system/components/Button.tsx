import * as React from "react";
import styled from "styled-components";
import { theme } from "../theme";

export type Props = {
  /** An example comment. This prop is used to set the text for this component */
  text?: string;
  /** An color comment. This prop is used to set the color of the text for this component */
  color?: string;
};

export const Button: React.FC<Props> = ({ text, color }) => (
  <MyButton color={color}>{text}</MyButton>
);

const MyButton = styled.button`
  height: 200px;
  width: 200px;
  background: "blue";
  color: ${props => props.color};
  &:hover{ 
      background: "red" ;
      border: 5px solid ${theme.color.primary};
  }
`;
