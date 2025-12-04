import { FC } from "react";
//styles
import { MuiButton } from "./button.styles";
//Types
import { ButtonProps } from "./button.types";

const Button: FC<ButtonProps> = (props) => {
  const { bgColor, ...rest } = props;
  //render
  return <MuiButton bgcolor={bgColor} {...rest} />;
};

export { Button };
