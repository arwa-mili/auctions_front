import { Link, Skeleton, Stack, Typography } from "@mui/material";
import { FC } from "react";
//styles
import { Container } from "./cardItem.styles";
//types
import { CardItemProps } from "./cardItem.types";

const CardItem: FC<CardItemProps> = (props) => {
  const {
    left,
    right,
    iconRight,
    iconLeft,
    type = "string",
    loading,
    bgColor,
    bordered,
    sx,
    sxLeft,
    sxRight,
  } = props;

  const renderLeft = () => {
    if (typeof left === "string") {
      return (
        <Typography noWrap fontSize={14} color="grey.600" fontWeight="600">
          {left}
        </Typography>
      );
    }
    return left;
  };
  const renderRight = () => {
    if (loading) {
      return <Skeleton variant="rounded" width={120} />;
    }
    if (typeof right === "object") {
      return right;
    }
    if (type === "string") {
      return (
        <Typography
          fontSize={14}
          color="grey.700"
          fontWeight="500"
          textAlign="end"
          title={right?.toString()}
        >
          {right}
        </Typography>
      );
    } else if (props.type === "link" && props.url) {
      return (
        <Link
          underline="hover"
          href={props.url}
          rel="noopener noreferrer"
          target="_blank"
          fontSize={14}
          fontWeight="500"
          textAlign="end"
          title={right?.toString()}
        >
          {right}
        </Link>
      );
    } else if (props.type === "link") {
      return (
        <Typography
          fontSize={14}
          color="grey.700"
          fontWeight="500"
          textAlign="end"
          title={right?.toString()}
        >
          {right}
        </Typography>
      );
    }
  };
  return (
    <Container bgColor={bgColor} bordered={bordered} sx={sx}>
      <Stack flex={1} direction="row" alignItems="center" gap={1} sx={sxLeft}>
        {iconLeft && <Stack>{iconLeft}</Stack>}
        <Stack flex={1}>{renderLeft()}</Stack>
      </Stack>
      {(iconRight || right) && (
        <Stack direction="row" alignItems="center" gap={1} sx={sxRight}>
          {iconRight && <Stack>{iconRight}</Stack>}
          <Stack>{renderRight()}</Stack>
        </Stack>
      )}
    </Container>
  );
};

export default CardItem;
