import { Stack, Typography } from "@mui/material";
import { FC } from "react";
//components
import Loader from "./loader/loader";
//styles
import { Content, Header, Item, Paper, Point } from "./cardStatsStatus.styles";
//types
import { CardStatsStatusProps } from "./cardStatsStatus.types";

const CardStatsStatus: FC<CardStatsStatusProps> = (props) => {
  const { statusList, label, icon, loading } = props;

  //render
  if (loading) return <Loader {...props} />;

  const renderItem = () => {
    return statusList.map((item, index) => {
      return (
        <Item key={index}>
          <Point background={item.color} />
          <Typography flex={1} fontSize={14} fontWeight="500" color="grey.500">
            {item.label}
          </Typography>
          <Typography fontSize={14} fontWeight="500" color="grey.600">
            {item.count}
          </Typography>
        </Item>
      );
    });
  };
  return (
    <Paper variant="outlined">
      <Header>
        <Stack component="span">{icon}</Stack>
        <Typography fontWeight="600" color="grey.600">
          {label}
        </Typography>
      </Header>
      <Content>{renderItem()}</Content>
    </Paper>
  );
};

export { CardStatsStatus };
