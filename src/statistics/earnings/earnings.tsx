import { Typography, useTheme } from "@mui/material";
import { LineChart, useDrawingArea } from "@mui/x-charts";
import { format } from "date-fns";
import { FC, useEffect, useMemo, useState } from "react";
//components
import { DialogFullScreen } from "../../modals";
import CalendarHeader from "./calendarHeader/calendarHeader";
//utils
import { getEarnedByMonth, toRound } from "./earnings.utils";
//styles
import { Content, Paper } from "./earnings.styles";
//types
import { EarningsProps } from "./earnings.types";

const Earnings: FC<EarningsProps> = (props) => {
  const {
    labelEarned = "Earned",
    earningsByDay = [],
    earningsByMonth = [],
    currencyCode,
  } = props;
  const theme = useTheme();
  const [index, setIndex] = useState<number>(0);
  const [fullScreen, setFullScreen] = useState<boolean>(false);

  //useMemo
  const months = useMemo(
    () =>
      [...earningsByMonth]
        .map((o) => ({ ...o, month: (o.month || 1) - 1 }))
        .reverse(),
    [earningsByMonth]
  );
  const days = useMemo(
    () => earningsByDay.map((o) => ({ ...o, month: (o.month || 1) - 1 })),
    [earningsByDay]
  );

  const currentMonth = useMemo(() => months[index], [months, index]);
  const { earnings, allDays } = useMemo(
    () => getEarnedByMonth({ days, month: currentMonth?.month }),
    [days, currentMonth]
  );

  // check if there is no meaningful data to display
  const hasNoData = earnings.length === 0;

  //useEffect
  useEffect(() => {
    setIndex(earningsByMonth.length - 1);
  }, [earningsByMonth]);

  //functions
  const onClickLeft = () => {
    setIndex((prev) => prev - 1);
  };
  const onClickRight = () => {
    setIndex((prev) => prev + 1);
  };
  const onChangeFullScreen = () => {
    setFullScreen((prev) => !prev);
  };

  return (
    <DialogFullScreen
      p={2}
      title={labelEarned}
      fullScreen={fullScreen}
      onClose={onChangeFullScreen}
    >
      <Paper variant="outlined">
        <CalendarHeader
          labelLeft={labelEarned}
          fullScreen={fullScreen}
          month={
            currentMonth
              ? new Date(currentMonth.year || 2024, currentMonth.month, 1)
              : null
          }
          disabledLeft={index === 0}
          disabledRight={index + 1 === months.length}
          onClickLeft={onClickLeft}
          onClickRight={onClickRight}
          onChangeFullScreen={onChangeFullScreen}
        />
        <Content>
          <Typography fontSize={20} fontWeight="700" color="grey.700">
            {`${toRound(currentMonth?.earnings || 0)} ${currencyCode}`}
          </Typography>
          <LineChart
            grid={{ horizontal: true }}
            skipAnimation
            xAxis={[
              {
                data: allDays,
                disableLine: true,
                disableTicks: true,
                tickLabelStyle: {
                  fill: theme.palette.grey[500],
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
                  return value === 0 || Number.isNaN(value)
                    ? "0 " + currencyCode
                    : value;
                },
                disableLine: true,
                disableTicks: true,
                tickLabelStyle: {
                  fill: theme.palette.grey[500],
                },
              },
            ]}
            series={[
              {
                data: earnings.map((o) => o.earnings || 0),
                connectNulls: true,
                showMark: false,
                color: theme.palette.primary.main,
                area: true,
                valueFormatter: (v) => (v === null ? "" : v + currencyCode),
              },
            ]}
            height={fullScreen ? globalThis.innerHeight - 182 : 216}
            margin={{ top: 20, bottom: 25, right: 20 }}
            tooltip={{ trigger: hasNoData ? "none" : "axis" }}
            sx={{
              "& .MuiAreaElement-series-auto-generated-id-0": {
                fill: "url('#myGradient')",
              },
            }}
          >
            <Colors />
          </LineChart>
        </Content>
      </Paper>
    </DialogFullScreen>
  );
};

const Colors = () => {
  const theme = useTheme();
  const { top, height, bottom } = useDrawingArea();
  const svgHeight = top + bottom + height;

  return (
    <defs>
      <linearGradient
        id="myGradient"
        x1="300.25"
        y1="46.9999"
        x2="300.25"
        y2={`${svgHeight}px`}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor={theme.palette.primary.main} stopOpacity="0.9" />
        <stop
          offset="0.8"
          stopColor={theme.palette.primary.main}
          stopOpacity="0"
        />
      </linearGradient>
    </defs>
  );
};

export { Earnings };
