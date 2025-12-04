import { FC } from "react";
import { Skeleton, Stack } from "@mui/material";
//styles
import { Paper, Header, Content } from "../cardStatsStatus.styles";
//types
import { CardStatsStatusProps } from "../cardStatsStatus.types";

const Loader: FC<CardStatsStatusProps> = (props) => {
  const { statusList } = props;
  //render
  const renderItem = () => {
    return statusList.map((_, index) => {
      return (
        <Stack key={index} direction="row" justifyContent="space-between">
          <Skeleton width="45%" height={21} />
          <Skeleton width={30} height={21} />
        </Stack>
      );
    });
  };
  return (
    <Paper variant="outlined">
      <Header>
        <Skeleton variant="rounded" width={20} height={20} />
        <Skeleton width="40%" height={24} />
      </Header>
      <Content>{renderItem()}</Content>
    </Paper>
  );
};

export default Loader;
