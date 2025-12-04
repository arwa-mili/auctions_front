import { FC, useMemo } from "react";
import { Stack, Typography } from "@mui/material";
//components
import { Avatar } from "../avatar/avatar";
//styles
import { Container } from "./emptyTable.styles";
//types
import { EmptyTableProps } from "./emptyTable.types";

const EmptyTable: FC<EmptyTableProps> = (props) => {
  const {
    isAppliedSearch,
    isAppliedFilter,
    imageWidth,
    imageHeight,
    imageEmptyFilter,
    imageEmptySearch,
    titleEmptyFilter,
    titleEmptySearch,
    messageEmptyFilter,
    messageEmptySearch,
    sx,
  } = props;

  const { image, title, message } = useMemo(() => {
    if (isAppliedSearch) {
      return {
        image: imageEmptySearch,
        title: titleEmptySearch,
        message: messageEmptySearch,
      };
    } else if (isAppliedFilter) {
      return {
        image: imageEmptyFilter,
        title: titleEmptyFilter,
        message: messageEmptyFilter,
      };
    }
    return {};
  }, [isAppliedFilter, isAppliedSearch]);

  //render
  return (
    <Container sx={sx}>
      <Avatar
        variant="square"
        alt="empty-image"
        src={image}
        width={imageWidth}
        height={imageHeight}
      />
      <Typography
        fontSize={24}
        fontWeight="600"
        color="grey.700"
        textAlign="center"
      >
        {title}
      </Typography>
      <Typography fontSize={14} fontWeight="400" textAlign="center">
        {message}
      </Typography>
    </Container>
  );
};
export { EmptyTable };
