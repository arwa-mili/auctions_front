import { Typography, useTheme } from "@mui/material";
import { format } from "date-fns";
import { FC } from "react";
//svgs
import { Svgs } from "../../../../svgs";
//styles
import { Container, IconButton } from "./calendarHeader.styles";
//types
import { CalendarHeaderProps } from "./calendarHeader.types";

const CalendarHeader: FC<CalendarHeaderProps> = (props) => {
  const { currentMonth, onClickLeft, onClickRight } = props;
  const theme = useTheme();
  return (
    <Container>
      <IconButton size="small" left={16} onClick={onClickLeft}>
        <Svgs.IconChevronLeft width={8} height={14} />
      </IconButton>
      <Typography fontSize={16} fontWeight="600" color="grey.600">
        {format(currentMonth, "MMMM yyyy")}
      </Typography>
      <IconButton size="small" right={16} onClick={onClickRight}>
        <Svgs.IconChevronRight width={8} height={14} />
      </IconButton>
    </Container>
  );
};

export default CalendarHeader;
