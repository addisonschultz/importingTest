import * as React from "react";
import styled from "styled-components";

export type Props = {
  /** An example comment. This prop is used to set the text for this component */
  text?: string;
};

export const List: React.FC<Props> = ({ text }) => (
  <MyExample>{text}</MyExample>
);

const MyExample = styled.div`
  height: 200px;
  width: 200px;
`;
