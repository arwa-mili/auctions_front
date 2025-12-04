import { styled, keyframes } from "@mui/material";
import { DotProps } from "./loader.types";

export const frames = keyframes`
  0%,
  80%,
  100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`;

export const Container = styled("div")`
  position: relative;
  display: flex;
`;

export const Dot = styled("div")<DotProps>`
  width: ${props => props.dotSize || "18px"};
  height: ${props => props.dotSize || "18px"};
  border-radius: 100%;
  display: inline-block;
  background-color: ${props => {
    if (props.color === "primary") {
      return props.theme.palette.primary.main;
    } else if (props.color === "secondary") {
      return props.theme.palette.secondary.main;
    } else if (props.color === "error") {
      return props.theme.palette.error.main;
    } else if (props.color === "success") {
      return props.theme.palette.success.main;
    } else if (props.color === "warning") {
      return props.theme.palette.warning.main;
    } else if (props.color === "info") {
      return props.theme.palette.info.main;
    } else if (props.color === "inherit") {
      return props.theme.palette.common.white;
    } else if (props.color === "default") {
      return props.theme.palette.common.white;
    }
    return props.color;
  }};
  animation: ${frames} 1.4s infinite ease-in-out both;
  animation-duration: ${props => props.duration || "1.4s"};
  animation-delay: ${props => props.delay || "-0.32s"};
`;
