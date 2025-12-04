import { styled, AvatarGroup } from "@mui/material";

export const MuiAvatarGroup = styled(AvatarGroup)<{
  width?: string | number;
  height?: string | number;
}>(({ width, height }) => ({
  justifyContent: "start",
  "& .MuiAvatar-root": {
    width,
    height,
    fontSize: 10,
  },
}));
