import { styled, Avatar } from "@mui/material";

export const MuiAvatar = styled(Avatar)<{
  width?: number | string;
  height?: number | string;
  radius?: number | string;
  border?: string;
  objectfit?: "fill" | "contain" | "cover" | "none" | "scale-down";
}>(({ width, height, radius, objectfit, border }) => ({
  width: width,
  height: height,
  borderRadius: radius,
  border,
  img: {
    objectFit: objectfit || "contain",
  },
}));
