import { Stack, Typography } from "@mui/material";
import { FC } from "react";
//components
import Loader from "./loader/loader";
//styles
import { Paper } from "./cardStats.styles";
//types
import { CardStatsProps } from "./cardStats.types";

const CardStats: FC<CardStatsProps> = (props) => {
  const { label, subLabel, icon, sx, sxContent, loading, message } = props;

  //render
  if (loading) return <Loader {...props} />;
  return (
    <Paper variant="outlined" sx={sx}>
      {icon && <Stack>{icon}</Stack>}
      <Stack sx={sxContent}>
        {subLabel && (
          <Typography
            component="div"
            color="grey.500"
            fontSize={14}
            fontWeight={500}
          >
            {subLabel}
          </Typography>
        )}
        {label && (
          <Stack direction="row" gap={1} alignItems="center">
            <Typography
              component="div"
              fontSize={18}
              fontWeight={700}
              color="grey.800"
            >
              {label}
            </Typography>
            <Typography
              component="div"
              fontSize={12}
              fontWeight={500}
              color="success.500"
            >
              {message}
            </Typography>
          </Stack>
        )}
      </Stack>
    </Paper>
  );
};

export { CardStats };
