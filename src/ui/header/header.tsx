import {
  CircularProgress,
  Collapse,
  Grid,
  InputAdornment,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FC, Fragment, useCallback, useState } from "react";
//helpers
import { Svgs } from "../../svgs";
import { debounce } from "./header.utils";
//components
import {
  AutoComplete,
  Button,
  DatePicker,
  DateTimePicker,
  IconButton,
  RangeSlider,
  Select,
  TimePicker,
} from "../../commons";
//styles
import {
  Container,
  ContainerBottom,
  ContainerHeader,
  Footer,
  Left,
  OutlinedInput,
  Right,
} from "./header.styles";
//types
import { HeaderProps, ItemFilter, OptionProps } from "./header.types";

const Header: FC<HeaderProps> = (props) => {
  const {
    iconLeft,
    title,
    tooltip,
    subTitle,
    searchPlaceholder = "Search...",
    labelMore = "See more",
    labelLess = "See less",
    labelButtonFilter,
    labelButtonReset,
    buttons = [],
    filters = [],
    isAppliedFilter,
    sx,
    sxLeft,
    sxRight,
    right,
    onChangeTextSearch,
    breakpointsFilterButtons,
    onClickFilter,
    onClickReset,
  } = props;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  //states
  const [startLoading, setStartLoading] = useState<boolean>(false);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  //functions
  const debouncedSearch = useCallback(
    debounce(async (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onChangeTextSearch) {
        await onChangeTextSearch(event);
      }
      setStartLoading(false);
    }, 1000),
    []
  );
  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartLoading(true);
    debouncedSearch(event);
  };
  const onClickOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const onClickCloseMenu = () => {
    setAnchorEl(null);
  };
  const onClickOption = (option: OptionProps) => () => {
    setAnchorEl(null);
    if (option.onClickOption) {
      onClickOption(option);
    }
  };

  const onClickOpenFilter = () => {
    setIsFilterOpen((prev) => !prev);
  };

  //render
  const renderButtonItem = () => {
    return buttons
      .filter((o) => !o.hide)
      .map((item, index) => {
        if (item.type === "Button") {
          return (
            <Button
              key={index}
              variant={item.variant || "contained"}
              bgColor={item.bgColor}
              size={item.size || "small"}
              color={item.color}
              startIcon={item.startIcon}
              loading={item?.buttonLoading}
              sx={{
                minWidth: item.minWidth || 100,
                minHeight: item.minHeight,
                transition: "all 0.3s",
                [theme.breakpoints.down("sm")]: {
                  minWidth: 36,
                  width: 36,
                  height: 36,
                  "& > p": {
                    display: "none",
                  },
                  "& .MuiButton-startIcon": {
                    margin: 0,
                  },
                },
                ...item.sx,
              }}
              disabled={item.disabled}
              onClick={item.onClick}
            >
              <Typography flex={1} variant="inherit">
                {item.label}
              </Typography>
            </Button>
          );
        } else if (item.type === "IconButton") {
          return (
            <IconButton
              key={index}
              size={item.size || "small"}
              color={item.color || "standard"}
              bgColor={item.bgColor}
              borderColor={item.borderColor}
              disabled={item.disabled}
              onClick={item.onClick}
              sx={item.sx}
            >
              {item.icon}
            </IconButton>
          );
        }
        return (
          <Fragment key={index}>
            <Button
              variant={item.variant || "contained"}
              // bgColor={item.bgColor}
              size={item.size || "small"}
              color={item.color}
              startIcon={item.startIcon}
              sx={{
                minWidth: item.minWidth || 100,
                minHeight: item.minHeight,
                transition: "all 0.3s",
                [theme.breakpoints.down("sm")]: {
                  minWidth: 36,
                  width: 36,
                  height: 36,
                  "& > p": {
                    display: "none",
                  },
                  "& .MuiButton-startIcon": {
                    margin: 0,
                  },
                },
              }}
              aria-controls={open ? "menu-button-with-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              disabled={item.disabled}
              onClick={onClickOpenMenu}
            >
              <Typography flex={1} variant="inherit">
                {item.label}
              </Typography>
            </Button>
            <Menu
              id="menu-button-with-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={onClickCloseMenu}
              MenuListProps={{ "aria-labelledby": "basic-button" }}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              {item.options.map((option, indexOption) => (
                <MenuItem
                  key={indexOption + 1}
                  disabled={option.disabled}
                  onClick={option.onClickOption}
                >
                  {option.icon && <ListItemIcon>{option.icon}</ListItemIcon>}
                  <ListItemText color={option.textColor}>
                    {option.label}
                  </ListItemText>
                </MenuItem>
              ))}
            </Menu>
          </Fragment>
        );
      });
  };

  const renderFilter = () => {
    if (filters.length === 0) return null;
    return (
      <IconButton size="small" color="standard" onClick={onClickOpenFilter}>
        {isFilterOpen ? (
          <Svgs.IconXClose fontSize="small" sx={{ color: "grey.600" }} />
        ) : (
          <Svgs.IconFilterFunnel02
            fontSize="small"
            fill={isAppliedFilter ? theme.palette.primary.main : "none"}
            sx={{
              color: isAppliedFilter ? theme.palette.primary.main : "grey.600",
            }}
          />
        )}
      </IconButton>
    );
  };
  const renderFilterItem = (item: ItemFilter) => {
    if (item.type === "Select") {
      return <Select {...item} variant="outlined" size="small" />;
    } else if (item.type === "Autocomplete") {
      return <AutoComplete {...item} variant="outlined" size="small" />;
    } else if (item.type === "DateTimePicker") {
      return <DateTimePicker {...item} variant="outlined" size="small" />;
    } else if (item.type === "DatePicker") {
      return <DatePicker {...item} variant="outlined" size="small" />;
    } else if (item.type === "TimePicker") {
      return <TimePicker {...item} variant="outlined" size="small" />;
    } else if (item.type === "RangeSlider") {
      return <RangeSlider {...item} size="small" />;
    }
    return null;
  };

  return (
    <Container sx={sx}>
      <ContainerHeader>
        <Left sx={sxLeft}>
          {iconLeft}
          <Stack>
            <Stack direction="row" gap={1}>
              <Typography fontSize={20} fontWeight="600" color="grey.700">
                {title}
              </Typography>
              {tooltip}
            </Stack>
            {subTitle && (
              <Typography fontSize={14} color="grey.600">
                {subTitle}
              </Typography>
            )}
          </Stack>
        </Left>
        <Right sx={sxRight}>
          {onChangeTextSearch && (
            <OutlinedInput
              placeholder={searchPlaceholder}
              size="small"
              endAdornment={
                <InputAdornment position="end">
                  {startLoading ? (
                    <CircularProgress color="primary" size={18} />
                  ) : (
                    <Svgs.IconSearchLg fontSize="small" />
                  )}
                </InputAdornment>
              }
              onChange={onChangeSearch}
            />
          )}
          {renderFilter()}
          {renderButtonItem()}
          {right}
        </Right>
      </ContainerHeader>
      <Collapse in={isFilterOpen} mountOnEnter unmountOnExit>
        <ContainerBottom>
          <Grid container spacing={1}>
            {filters.map((item, index) => (
              <Grid
                key={index}
                item
                xl={item.breakpoints?.xl || 2}
                lg={item.breakpoints?.lg || 3}
                md={item.breakpoints?.md || 6}
                sm={item.breakpoints?.sm || 6}
                xs={item.breakpoints?.xs || 12}
              >
                {renderFilterItem(item)}
              </Grid>
            ))}
            <Grid
              item
              xl={breakpointsFilterButtons?.xl || 2}
              lg={breakpointsFilterButtons?.lg || 3}
              md={breakpointsFilterButtons?.md || 6}
              sm={breakpointsFilterButtons?.sm || 6}
              xs={breakpointsFilterButtons?.xs || 12}
            >
              <Footer>
                <Button
                  bgColor={theme.palette.primary[100]}
                  sx={{
                    border: "none",
                    "&:hover": { border: "none" },
                  }}
                  onClick={onClickReset}
                >
                  {labelButtonReset}
                </Button>
                <Button variant="contained" onClick={onClickFilter}>
                  {labelButtonFilter}
                </Button>
              </Footer>
            </Grid>
          </Grid>
        </ContainerBottom>
      </Collapse>
    </Container>
  );
};

export { Header };
