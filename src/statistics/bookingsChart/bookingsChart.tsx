import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { LineChart } from "@mui/x-charts";
import { format } from "date-fns";
import { FC, Fragment, useMemo, useState } from "react";
//components
import { IconButton } from "../../commons";
import { DialogFullScreen } from "../../modals";
import { Svgs } from "../../svgs";
//utils
import { getDays } from "./bookingsChart.utils";
//styles
import { Content, Header, Paper, Point, Row } from "./bookingsChart.styles";
//types
import { BookingsChartProps } from "./bookingsChart.types";

const BookingsChart: FC<BookingsChartProps> = (props) => {
  const {
    bookingsByCurrentYear = [],
    bookingsByPastYear = [],
    views,
    title,
    subTitle,
    legends,
  } = props;
  const theme = useTheme();
  //state
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const [days, setDays] = useState<number>(views?.[0]?.days || 6);

  //memo
  const { allDays, dataCurrentYear, dataPastYear } = useMemo(
    () => getDays({ days, bookingsByCurrentYear, bookingsByPastYear }),
    [days, bookingsByCurrentYear, bookingsByPastYear]
  );

  // check if there is no meaningful data to display
  const hasNoData = allDays.length === 0;
  //functions
  const onChange = (event: SelectChangeEvent) => {
    setDays(Number.parseInt(event.target.value));
  };
  const onChangeFullScreen = () => {
    setFullScreen((prev) => !prev);
  };

  //render
  const renderItem = () => {
    return views.map((o, index) => {
      return (
        <MenuItem key={index} value={o.days}>
          {o.label}
        </MenuItem>
      );
    });
  };
  const renderLegends = () => {
    return legends?.map((item, index) => {
      return (
        <Fragment key={index}>
          <Point background={item.pointColor} />
          <Typography fontSize={15} fontWeight={400} color="grey.600">
            {item.label}
          </Typography>
        </Fragment>
      );
    });
  };

  const isFloat = (n: number) => {
    return Number(n) === n && n % 1 !== 0;
  };

  return (
    <DialogFullScreen
      p={2}
      title={title}
      fullScreen={fullScreen}
      onClose={onChangeFullScreen}
    >
      <Paper variant="outlined">
        <Header>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography
              flex={1}
              fontSize={16}
              fontWeight="600"
              color="grey.600"
            >
              {title}
            </Typography>
            {subTitle}
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <FormControl size="small" variant="standard">
              <Select
                labelId="select-view-label"
                id="select-view"
                value={days.toString()}
                onChange={onChange}
                disableUnderline
              >
                {renderItem()}
              </Select>
            </FormControl>
            <IconButton
              title={fullScreen ? "Minimize" : "Maximize"}
              color="standard"
              size="small"
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
          </Stack>
        </Header>
        <Content>
          <Row>{renderLegends()}</Row>
          <LineChart
            skipAnimation
            grid={{ vertical: true, horizontal: false }}
            xAxis={[
              {
                data: allDays,
                disableLine: true,
                disableTicks: true,
                tickLabelStyle: {
                  fill: "#667085",
                },
                tickInterval: (time) => time.getHours() === 0,
                id: "bottomAxis",
                scaleType: "point",
                valueFormatter(value) {
                  return format(value, "dd MMM");
                },
              },
            ]}
            yAxis={[
              {
                valueFormatter(value) {
                  return isFloat(value) || value === 0 || Number.isNaN(value)
                    ? ""
                    : value;
                },
                disableLine: true,
                disableTicks: true,
                tickLabelStyle: {
                  fill: "#667085",
                },
              },
            ]}
            series={[
              {
                data: dataCurrentYear,
                color: legends?.[1].pointColor,
                connectNulls: true,
                showMark: false,
                //@ts-ignore
                label: (location: "tooltip" | "legend") =>
                  location === "legend" ? undefined : legends?.[1]?.label,
              },
              {
                data: dataPastYear,
                connectNulls: true,
                color: legends?.[0].pointColor,
                showMark: false,
                //@ts-ignore
                label: (location: "tooltip" | "legend") =>
                  location === "legend" ? undefined : legends?.[0]?.label,
              },
            ]}
            height={fullScreen ? globalThis.innerHeight - 182 : 216}
            margin={{ top: 10, bottom: 20 }}
            tooltip={{ trigger: hasNoData ? "none" : "axis" }}
          />
        </Content>
      </Paper>
    </DialogFullScreen>
  );
};

export { BookingsChart };
