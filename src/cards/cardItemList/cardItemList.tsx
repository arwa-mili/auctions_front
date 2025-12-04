import { Stack, Typography } from "@mui/material";
import { FC } from "react";
//
import CardItem from "./cardItem/cardItem";
//types
import { CardItemListProps } from "./cardItemList.types";

const CardItemList: FC<CardItemListProps> = (props) => {
  const { data, loading, direction, sx, title } = props;

  const renderItem = () => {
    return data.map((item, index) => {
      const isLast = index + 1 === data.length;
      return (
        <CardItem key={index} bordered={!isLast} loading={loading} {...item} />
      );
    });
  };
  return (
    <Stack direction={direction} sx={sx}>
      {title && (
        <Typography fontSize={18} fontWeight={600} p={1}>
          {title}
        </Typography>
      )}
      {renderItem()}
    </Stack>
  );
};

export { CardItemList };
