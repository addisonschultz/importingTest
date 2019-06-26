import * as React from "react";
import * as System from "../../design-system";
import { ControlType, PropertyControls } from "framer";

type Props = System.NewProps & {
  width: number;
  height: number;
};

export class New extends React.Component<Props> {
  render() {
    return <System.New {...this.props} />;
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
