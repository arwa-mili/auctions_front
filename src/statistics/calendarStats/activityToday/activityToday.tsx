import { Typography } from "@mui/material";
import { FC } from "react";
//styles
import {
  Container,
  Content,
  Header,
  Item,
  Point,
} from "./activityToday.styles";
//types
import { ActivityTodayProps } from "./activityToday.types";

const ActivityToday: FC<ActivityTodayProps> = (props) => {
  const { data, title, bordered } = props;

  //render
  const renderItem = () => {
    return data.map((item, index) => {
      return (
        <Item key={index}>
          <Point background={item.pointColor} />
          <Typography flex={1} fontSize={14} fontWeight="500" color="grey.500">
            {item.text}
          </Typography>
          <Typography fontSize={14} fontWeight="600" color="grey.600">
            {item.total}
          </Typography>
        </Item>
      );
    });
  };
  return (
    <Container bordered={bordered}>
      <Header>
        <Typography fontSize={16} fontWeight="600" color="grey.600">
          {title}
        </Typography>
      </Header>
      <Content>{renderItem()}</Content>
    </Container>
  );
};

export { ActivityToday };
