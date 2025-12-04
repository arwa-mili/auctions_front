import { Stack, Tooltip, Typography, useTheme } from "@mui/material";
import { FC, useState } from "react";
//styles
import { BarStyle, Content, Header, Paper } from "./cardStatsDrivers.styles";
//types
import { IconButton } from "../../commons";
import { DialogFullScreen } from "../../modals";
import { Svgs } from "../../svgs";
import { CardStatsDriversProps } from "./cardStatsDrivers.types";

const CardStatsDrivers: FC<CardStatsDriversProps> = (props) => {
  const {
    label,
    icon,
    data,
    currency,
    orientation = "horizontal",
    height = 230,
  } = props;
  const theme = useTheme();
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  //render
  const onChangeFullScreen = () => {
    setFullScreen((prev) => !prev);
  };
  const renderData = () => {
    if (data.length === 0)
      return (
        <Stack
          p={2}
          alignItems="center"
          justifyContent="center"
          height={height}
        >
          <Typography fontWeight={400} fontSize={14} justifyContent="center">
            No data to display
          </Typography>
        </Stack>
      );
    return data.map((item, index) => {
      const maxValue = Math.max(...data.map((item) => item.value));
      const percentage = ((item.value / maxValue) * 100).toFixed(2);
      return (
        <Tooltip
          key={item.label + index + 1}
          arrow
          title={
            item.label ? (
              <Stack>
                <Typography noWrap fontSize={14} fontWeight={500}>
                  {item.label}
                </Typography>
                <Typography noWrap fontSize={14} fontWeight={700}>
                  {`${currency || ""} ${item.value}`}
                </Typography>
              </Stack>
            ) : null
          }
        >
          <BarStyle
            backgroundColor={item.color || ""}
            orientation={orientation}
            percentage={percentage}
            total={data.length}
          >
            {item.label && (
              <>
                <Typography noWrap fontSize={14} fontWeight={500}>
                  {item.label}
                </Typography>
                <Typography noWrap fontSize={14} fontWeight={700}>
                  {`${currency || ""} ${item.value}`}
                </Typography>
              </>
            )}
          </BarStyle>
        </Tooltip>
      );
    });
  };

  return (
    <DialogFullScreen
      p={2}
      fullScreen={fullScreen}
      onClose={onChangeFullScreen}
    >
      <Paper variant="outlined">
        <Header>
          <Stack component="span">{icon}</Stack>
          <Typography flex={1} fontWeight="600" color="grey.600">
            {label}
          </Typography>
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
        </Header>
        <Content>{renderData()}</Content>
      </Paper>
    </DialogFullScreen>
  );
};

export { CardStatsDrivers };
