import { Grid, Stack, Typography, useTheme } from "@mui/material";
import { PieChart } from "@mui/x-charts";
import { FC, useState } from "react";
//styles
import { Content, Header, Paper } from "./cardStatsTransferType.styles";
//component
import { IconButton } from "../../commons";
import { DialogFullScreen } from "../../modals";
import { Svgs } from "../../svgs";
//types
import { CardStatsDriversProps } from "./cardStatsTransferType.types";

const CardStatsTransferType: FC<CardStatsDriversProps> = (props) => {
  const { label, icon, data, currency, colors } = props;
  const theme = useTheme();
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  //render
  const onChangeFullScreen = () => {
    setFullScreen((prev) => !prev);
  };
  const formattedData =
    data.map((item) => ({
      label: `${item.label} ${item.value}`,
      value: item.value,
    })) || [];

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
        <Content>
          <Grid container>
            <Grid item md={12}>
              <PieChart
                colors={colors}
                series={[
                  {
                    data,
                    innerRadius: 60,
                  },
                ]}
                slotProps={{
                  legend: {
                    labelStyle: {
                      fontSize: 14,
                      fontWeight: 400,
                    },

                    position: { vertical: "top", horizontal: "right" },
                  },
                }}
                width={data.length > 0 ? 500 : undefined}
                height={250}
              />
            </Grid>
          </Grid>
        </Content>
      </Paper>
    </DialogFullScreen>
  );
};

export { CardStatsTransferType };
