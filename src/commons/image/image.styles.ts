import { styled, Avatar as MuiAvatar } from "@mui/material";

export const Avatar = styled(MuiAvatar)<{
  size?: number;
  border?: string | number;
  borderradius?: string | number;
  width?: string | number;
  height?: string | number;
  backgroundcolor?: string;
  objectfit?: "fill" | "contain" | "cover" | "none" | "scale-down";
}>(({ theme, size, border, borderradius, width, height, objectfit, backgroundcolor }) => ({
  width: width || (size || 0) * 2,
  height: height || (size || 0) * 2,
  borderRadius: borderradius || size,
  background: backgroundcolor,
  border,
  img: {
    objectFit: objectfit || "contain",
  },
}));
