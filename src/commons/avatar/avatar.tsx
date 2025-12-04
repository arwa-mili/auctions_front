import { FC } from "react";
//styles
import { MuiAvatar } from "./avatar.styles";
//types
import { AvatarProps } from "./avatar.types";

const Avatar: FC<AvatarProps> = (props) => {
  const {
    width,
    height,
    radius,
    objectFit = "contain",
    border,
    ...rest
  } = props;

  //render
  return (
    <MuiAvatar
      width={width}
      height={height}
      border={border}
      radius={radius}
      objectfit={objectFit}
      {...rest}
    >
      {rest.alt?.[0]}
    </MuiAvatar>
  );
};
export { Avatar };
