import { FC } from "react";
//Material UI
import {
  Box,
  CircularProgress,
  LinearProgress,
  Typography,
} from "@mui/material";
//Types
import { ProgressBarProps } from "./progressBar.types";

const ProgressBar: FC<ProgressBarProps> = (props) => {
  if (props.type === "circular") {
    const { value, textColor, minWidth = 35, ...rest } = props;
    return (
      <Box position="relative" display="inline-flex">
        <CircularProgress
          variant="determinate"
          value={value}
          sx={{
            "& .MuiCircularProgress-circleDeterminate": {
              strokeLinecap: "round",
            },
            borderRadius: "50%",
            boxShadow: "inset 0 0 0 5px #EAECF0",
          }}
          {...rest}
        />
        <Box
          minWidth={minWidth}
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="body2"
            color="grey.700"
            style={{ color: textColor }}
            fontWeight={600}
          >{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
    );
  }
  const { value, textColor, minWidth = 35, ...rest } = props;
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress
          variant="determinate"
          value={props.value}
          sx={{ borderRadius: 4 }}
          {...rest}
        />
      </Box>
      <Box minWidth={minWidth}>
        <Typography
          variant="subtitle1"
          color="grey.700"
          style={{ color: textColor }}
        >{`${Math.round(value)}%`}</Typography>
      </Box>
    </Box>
  );
};
export { ProgressBar };
