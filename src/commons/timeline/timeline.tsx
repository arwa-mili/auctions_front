import { FC } from "react";
import { Stack } from "@mui/material";
//styles
import { Circle, Container, Divider, Row, Step } from "./timeline.styles";
//types
import { TimelineProps, TimeLineItemProps } from "./timeline.types";

const Timeline: FC<TimelineProps> = (props) => {
  const { data, sx, loading, renderEmpty, renderLoader } = props;

  //render
  const renderItem = () => {
    return data.map((item, index) => {
      return (
        <Row key={index}>
          <Step>{item.icon || <Circle />}</Step>
          <Stack>{item.node}</Stack>
        </Row>
      );
    });
  };

  if (loading) {
    return renderLoader?.() || null;
  }
  if (!loading && data.length === 0) {
    return renderEmpty?.() || null;
  }
  return (
    <Container sx={sx}>
      {renderItem()}
      <Divider />
    </Container>
  );
};

export { Timeline, type TimeLineItemProps };
