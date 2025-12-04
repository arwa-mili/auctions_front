import {
  IconButton as IconButtonChevron,
  Typography,
  useTheme,
} from "@mui/material";
import { format } from "date-fns";
import { FC } from "react";
//svgs
import { Svgs } from "../../../svgs";

//styles
import { Container, Content } from "./calendarHeader.styles";
//types
import { IconButton } from "../../../commons";
import { CalendarHeaderProps } from "./calendarHeader.types";

const CalendarHeader: FC<CalendarHeaderProps> = (props) => {
  const {
    labelLeft,
    fullScreen,
    month,
    disabledLeft,
    disabledRight,
    onClickLeft,
    onClickRight,
    onChangeFullScreen,
  } = props;
  const theme = useTheme();

  return (
    <Container>
      <Typography fontSize={14} fontWeight="400" color="grey.600">
        {labelLeft}
      </Typography>
      <Content>
        {month && (
          <>
            <IconButtonChevron
              size="small"
              disabled={disabledLeft}
              onClick={onClickLeft}
            >
              <Svgs.IconChevronLeft
                width={8}
                height={14}
                fill={
                  disabledLeft
                    ? theme.palette.grey[300]
                    : theme.palette.grey[500]
                }
              />
            </IconButtonChevron>
            <Typography
              minWidth={120}
              fontSize={16}
              textAlign="center"
              fontWeight="600"
              color="text.primary"
            >
              {format(month, "MMMM yyyy")}
            </Typography>
            <IconButtonChevron
              size="small"
              disabled={disabledRight}
              onClick={onClickRight}
            >
              <Svgs.IconChevronRight
                width={8}
                height={14}
                fill={
                  disabledRight
                    ? theme.palette.grey[300]
                    : theme.palette.grey[500]
                }
              />
            </IconButtonChevron>
          </>
        )}
      </Content>
      <IconButton
        title={fullScreen ? "Minimize" : "Maximize"}
        size="small"
        color="standard"
        bgColor={theme.palette.grey[50]}
        onClick={onChangeFullScreen}
      >
        {fullScreen ? (
          <Svgs.IconMinimize01
            width={20}
            height={20}
            stroke={theme.palette.primary.main}
          />
        ) : (
          <Svgs.IconMaximize01
            width={20}
            height={20}
            stroke={theme.palette.primary.main}
          />
        )}
      </IconButton>
    </Container>
  );
};

export default CalendarHeader;
