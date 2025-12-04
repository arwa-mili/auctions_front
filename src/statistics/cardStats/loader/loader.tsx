import { FC } from "react";
import { Skeleton, Stack, Typography } from "@mui/material";
//styles
import { Paper } from "../cardStats.styles";
//types
import { CardStatsProps } from "../cardStats.types";

const Loader: FC<CardStatsProps> = (props) => {
  const { sx, sxContent } = props;
  return (
    <Paper variant="outlined" sx={sx}>
      <Stack>
        <Skeleton variant="circular" height={67} width={67} />
      </Stack>
      <Stack flex={1} gap={1} width="100%" sx={sxContent}>
        <Skeleton variant="rounded" height={36} width="30%" />
        <Skeleton variant="rounded" height={24} width="60%" />
      </Stack>
    </Paper>
  );
};

export default Loader;
