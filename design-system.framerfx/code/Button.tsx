import * as React from "react";
import * as System from "../../design-system";
import { ControlType, PropertyControls } from "framer";

type Props = System.ButtonProps & {
  width: number;
  height: number;
};

export class Button extends React.Component<Props> {
  render() {
    return <System.Button {...this.props} />;
  }

  static defaultProps: Props = {
    width: 150,
    height: 50
  };

  static propertyControls: PropertyControls<Props> = {
    /** An example comment. This prop is used to set the text for this component */
    text: { title: "Text", type: ControlType.String },
    /** An example comment. This prop is used to set the class name to default, primary, or secondary */
    kind: {
      title: "Kind",
      options: ["default", "primary", "secondary"],
      optionTitles: ["Default", "Primary", "Secondary"],
      type: ControlType.Enum
    }
  };
}
