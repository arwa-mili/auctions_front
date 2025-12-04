import { Box } from "@mui/material";
import { FC } from "react";
//Types
import { Loader } from "../loader/loader";
import { FallbackProps } from "./fallback.types";

const Fallback: FC<FallbackProps> = (props) => {
  const { width, height } = props;
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width={width || "100%"}
      height={height || "100%"}
      padding={6}
    >
      <Loader />
    </Box>
  );
};
export { Fallback };
