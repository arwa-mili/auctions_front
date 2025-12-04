import { FC, useEffect, useState } from "react";
import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
//components
import { Chip } from "../chip/chip";
//styles
import { ContainerHorizontal, ContainerVertical, Tab } from "./tabs.styles";
//types
import { ItemTab, TabsProps } from "./tabs.types";

const Tabs: FC<TabsProps> = (props) => {
  const {
    size = "small",
    data,
    value,
    orientation = "horizontal",
    breakpointKey = "md",
    centered,
    sx,
    sxTabList,
    sxTab,
    onChange,
    renderHeader,
  } = props;
  const [currentOrientation, setCurrentOrientation] = useState(orientation);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(breakpointKey));

  useEffect(() => {
    if (orientation === "horizontal") return;
    if (matches) {
      setCurrentOrientation("horizontal");
    } else {
      setCurrentOrientation("vertical");
    }
  }, [orientation, matches]);

  //render
  const renderRight = (item: ItemTab) => {
    if (item.right) {
      return item.right;
    } else if (
      typeof item.count === "number" &&
      currentOrientation === "horizontal"
    ) {
      return (
        <Chip
          size="small"
          label={item.count > 99 ? "+99" : item.count}
          labelFontSize={12}
          bgColor={value === item.value ? theme.palette.primary[50] : undefined}
          labelColor={
            value === item.value ? theme.palette.primary[700] : undefined
          }
          sx={{ height: 22, minWidth: 22 }}
        />
      );
    } else if (
      typeof item.count === "number" &&
      currentOrientation === "vertical"
    ) {
      return (
        <Chip
          size="small"
          label={item.count > 99 ? "+99" : item.count}
          labelFontSize={12}
          bgColor={
            value === item.value ? theme.palette.primary[500] : undefined
          }
          labelColor={
            value === item.value
              ? theme.palette.primary.contrastText
              : undefined
          }
          sx={{ height: 22, minWidth: 22 }}
        />
      );
    }
  };
  const renderLabel = (item: ItemTab) => {
    if (currentOrientation === "horizontal") {
      return (
        <Stack direction="row" alignItems="center" gap={1}>
          <Typography variant="inherit">{item.label}</Typography>
          {renderRight(item)}
        </Stack>
      );
    } else if (currentOrientation === "vertical") {
      return (
        <Stack direction="row" alignItems="center" width="100%" gap={1}>
          <Typography variant="inherit" textAlign="left" flex={1}>
            {item.label}
          </Typography>
          {renderRight(item)}
        </Stack>
      );
    }
    return item.label;
  };
  const renderTabItem = () => {
    return data.map((item, index) => {
      const label = renderLabel(item);
      return (
        <Tab
          size={size}
          key={index}
          label={label}
          value={item.value}
          icon={item.icon}
          sx={sxTab}
          iconPosition={item.iconPosition}
          orientation={currentOrientation}
        />
      );
    });
  };
  const renderContentItem = () => {
    return data.map((item, index) => {
      return (
        <TabPanel
          key={index}
          value={item.value?.toString() || ""}
          sx={{ flex: 1, p: item.p }}
        >
          {item.element}
        </TabPanel>
      );
    });
  };

  if (!value) return null;

  if (currentOrientation === "horizontal") {
    return (
      <TabContext value={value}>
        <ContainerHorizontal sx={sx}>
          {renderHeader?.()}
          <TabList
            orientation="horizontal"
            onChange={onChange}
            aria-label="tabs horizontal"
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={sxTabList}
            centered={centered}
          >
            {renderTabItem()}
          </TabList>
        </ContainerHorizontal>
        {renderContentItem()}
      </TabContext>
    );
  }

  return (
    <TabContext value={value}>
      <ContainerVertical sx={sx}>
        <TabList
          orientation="vertical"
          onChange={onChange}
          centered={centered}
          aria-label="tabs vertical"
          TabIndicatorProps={{ sx: { display: "none" } }}
          sx={{
            borderRight: 1,
            borderColor: "divider",
            minWidth: 160,
            padding: 1,
            ...sxTabList,
          }}
        >
          {renderHeader?.()}
          {renderTabItem()}
        </TabList>
        {renderContentItem()}
      </ContainerVertical>
    </TabContext>
  );
};
export { Tabs };
