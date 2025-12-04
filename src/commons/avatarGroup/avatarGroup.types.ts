import { AvatarGroupProps as MuiAvatarGroupProps } from "@mui/material";
import { AvatarProps } from "../avatar/avatar.types";

export type AvatarGroupProps = MuiAvatarGroupProps & {
  avatars: Array<AvatarProps>;
};
