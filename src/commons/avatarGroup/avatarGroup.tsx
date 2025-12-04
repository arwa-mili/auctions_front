import { FC } from "react";
import { Avatar } from "../avatar/avatar";
//styles
import { MuiAvatarGroup } from "./avatarGroup.styles";
//types
import { AvatarGroupProps } from "./avatarGroup.types";

const AvatarGroup: FC<AvatarGroupProps> = (props) => {
  const { avatars, ...rest } = props;

  const renderAvatar = () => {
    return avatars.map((avatarProps, index) => (
      <Avatar key={`avatar-${index}`} {...avatarProps} />
    ));
  };

  return (
    <MuiAvatarGroup
      {...rest}
      width={avatars?.[0]?.width}
      height={avatars?.[0]?.height}
    >
      {renderAvatar()}
    </MuiAvatarGroup>
  );
};
export { AvatarGroup };
