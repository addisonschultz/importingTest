import * as React from "react";
import * as System from "../../design-system";
import { ControlType, PropertyControls } from "framer";

type Props = System.Example2Props & {
  width: number;
  height: number;
};

export class Example2 extends React.Component<Props> {
  render() {
    return <System.Example2 {...this.props} />;
  }

  static defaultProps: Props = {
    width: 150,
    height: 50
  };

  static propertyControls: PropertyControls<Props> = {
    /** An example comment. This prop is used to set the text for this component */
    text: { title: "Text", type: ControlType.String }
  };
}
