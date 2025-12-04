import {
  alpha,
  Badge,
  Box,
  CircularProgress,
  Link,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { FC, useState } from "react";
//Components
import { Svgs } from "../../../svgs";
import { Avatar } from "../../avatar/avatar";
import { Chip } from "../../chip/chip";
import { ChipTooltip } from "../../chipTooltip/chipTooltip";
import { IconButton } from "../../iconButton/iconButton";
import { TooltipTable } from "./tooltipTable/tooltipTable";
//Styles
import {
  IconButtonBadge,
  ListItemTextActions,
  Row,
} from "./dataTableColumn.styles";
//Types
import { Switch } from "../../switch/switch";
import { DataTableColumnProps, OptionProps } from "./dataTableColumn.types";

const ITEM_HEIGHT = 48;

const DataTableColumn: FC<DataTableColumnProps> = (props) => {
  const theme = useTheme();
  const { type } = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  //functions
  const onClickMenu = (event: React.MouseEvent<HTMLElement>) => {
    event?.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const onClickClose = (event: React.MouseEvent<HTMLElement>) => {
    event?.stopPropagation();
    setAnchorEl(null);
  };
  const onClickIcon = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event?.stopPropagation();
    if (type === "icon" && props.onClickIcon) {
      props.onClickIcon();
    }
  };
  const onClickActionOption =
    (option: OptionProps) =>
    (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      if (type === "actions" && option.onClickOption) {
        event?.stopPropagation();
        option.onClickOption(option);
        setAnchorEl(null);
      }
    };

  //render
  if (type === "link") {
    const {
      link,
      fontSize = 14,
      color = "secondary.main",
      fontWeight = "600",
      underline = "hover",
      maxWidth,
      onClick,
    } = props;

    if (!onClick) {
      return (
        <Typography
          fontSize={fontSize}
          color="text.secondary"
          fontWeight={fontWeight}
          maxWidth={maxWidth}
          noWrap
        >
          {link}
        </Typography>
      );
    }
    return (
      <Link
        component="button"
        fontSize={fontSize}
        color={color}
        fontWeight={fontWeight}
        underline={underline}
        maxWidth={maxWidth}
        noWrap
        // title={link.toString()}
        onClick={onClick}
      >
        {link}
      </Link>
    );
  } else if (type === "text") {
    const {
      label,
      fontSize = 14,
      color = "grey.600",
      fontWeight = 400,
      maxWidth,
    } = props;
    return (
      <Typography
        fontSize={fontSize}
        color={color}
        fontWeight={fontWeight}
        maxWidth={maxWidth}
        noWrap
        // title={label.toString()}
      >
        {label}
      </Typography>
    );
  } else if (type === "chip") {
    const { label, icon, bgColor, labelFontSize = 12, labelColor } = props;
    return (
      <Chip
        size="small"
        label={label}
        bgColor={bgColor}
        labelFontSize={labelFontSize}
        labelColor={labelColor}
        sx={{ pointerEvents: "none" }}
      />
    );
  } else if (type === "chip-tooltip") {
    const { label, icon, tooltip, sxChip, align, sxLabel } = props;
    return (
      <Stack alignItems={align}>
        <ChipTooltip
          label={label}
          icon={icon}
          tooltip={tooltip}
          sxChip={sxChip}
          sxLabel={sxLabel}
        />
      </Stack>
    );
  } else if (type === "actions") {
    const { isVisible = true, loading, options } = props;
    if (!isVisible) return null;

    return (
      <>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          size="extra-small"
          border="none"
          color="standard"
          sx={{
            "&:hover": {
              border: "none",
              "& path": {
                stroke: theme.palette.grey[700],
              },
            },
          }}
          onClick={onClickMenu}
        >
          {loading ? (
            <CircularProgress color="secondary" size={16} />
          ) : (
            <Svgs.IconMenu01 fontSize="small" sx={{ color: "grey.400" }} />
          )}
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{ "aria-labelledby": "long-button" }}
          anchorEl={anchorEl}
          open={open}
          onClose={onClickClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          slotProps={{
            paper: {
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                minWidth: "16ch",
              },
            },
          }}
        >
          {options
            .filter((o) => o.isVisible || typeof o.isVisible === "undefined")
            .map((option) => (
              <MenuItem
                dense
                disabled={option.disabled}
                key={option.value}
                onClick={onClickActionOption(option)}
              >
                {option.icon && <ListItemIcon>{option.icon}</ListItemIcon>}
                <ListItemTextActions color={option.textColor}>
                  {option.label}
                </ListItemTextActions>
              </MenuItem>
            ))}
        </Menu>
      </>
    );
  } else if (type === "reactNode") {
    const { node } = props;
    return <>{node}</>;
  } else if (type === "item") {
    const {
      avatar,
      icon,
      avatarSx,
      subtitle,
      title = "",
      align,
      showAvatar = true,
      maxWidth,
      onClick,
    } = props;
    return (
      <Row justifyContent={align}>
        {showAvatar && avatar && (
          <Avatar
            alt="item"
            src={avatar}
            sx={{ ...avatarSx }}
            objectFit="contain"
          >
            {title?.toString()?.[0]}
          </Avatar>
        )}
        {showAvatar && icon && icon}
        {(subtitle || title) && (
          <Stack alignItems="flex-start">
            {title && onClick && (
              <Link
                component="button"
                fontSize={14}
                fontWeight={600}
                color="secondary.main"
                underline="hover"
                noWrap
                // title={title.toString()}
                maxWidth={maxWidth}
                onClick={onClick}
              >
                {title}
              </Link>
            )}
            {title && !onClick && (
              <Typography
                component={typeof title === "object" ? "span" : "p"}
                fontSize={14}
                fontWeight={500}
                color="grey.900"
                noWrap
                // title={title.toString()}
                maxWidth={maxWidth}
              >
                {title}
              </Typography>
            )}
            {subtitle && (
              <Typography
                noWrap
                // title={subtitle.toString()}
                maxWidth={maxWidth}
                fontSize={14}
                fontWeight={400}
                color="grey.600"
              >
                {subtitle}
              </Typography>
            )}
          </Stack>
        )}
      </Row>
    );
  } else if (type === "ellipsisTable") {
    const { data, columns, renderItem, minWidthTable } = props;
    return (
      <Tooltip
        arrow
        title={
          data.length > 0 ? (
            <TooltipTable
              columns={columns}
              data={data}
              renderItem={renderItem}
            />
          ) : null
        }
        slotProps={{
          tooltip: { sx: { borderRadius: 2, p: 0, minWidth: minWidthTable } },
        }}
      >
        <Box width="fit-content">
          <Chip
            size="small"
            label={data.length}
            sx={{
              background: alpha(theme.palette.primary.main, 0.1),
              color: theme.palette.primary.main,
              fontWeight: "600",
            }}
            icon={
              <Svgs.IconInfoCircle
                sx={{ fontSize: 16 }}
                stroke={theme.palette.primary.main}
              />
            }
          />
        </Box>
      </Tooltip>
    );
  } else if (type === "icon") {
    const { count, icon, disabled, badgeContent = "+", hideBadge } = props;

    const isExist = count > 0;
    return (
      <Box pt={1}>
        {hideBadge ? (
          <IconButtonBadge
            size="extra-small"
            disabled={disabled}
            isexist={`${isExist}`}
            onClick={onClickIcon}
          >
            {icon}
          </IconButtonBadge>
        ) : (
          <Badge
            color="secondary"
            badgeContent={isExist ? count : badgeContent}
            sx={{ cursor: "pointer" }}
            onClick={disabled ? undefined : onClickIcon}
          >
            <IconButtonBadge
              size="extra-small"
              disabled={disabled}
              isexist={`${isExist}`}
              onClick={onClickIcon}
            >
              {icon}
            </IconButtonBadge>
          </Badge>
        )}
      </Box>
    );
  } else if (type === "switch") {
    const { name, onChange, disabled } = props;
    return (
      <Switch name={name} onChange={onChange} disabled={disabled || false} />
    );
  } else if (type === "icon-button-actions") {
    const { options, isVisible } = props;
    if (isVisible === false) return null;
    return (
      <Stack direction="row" alignItems="center" gap={0.5}>
        {options.map((o, index) => {
          if (o.isVisible === false) return null;
          return (
            <Tooltip arrow key={index} title={o.title}>
              {o.noIconButton ? (
                <Stack>{o.icon}</Stack>
              ) : (
                <IconButton
                  rounded
                  color={o.color}
                  size={o.size}
                  onClick={() => o.onClickOption && o.onClickOption(o)}
                >
                  {o.icon}
                </IconButton>
              )}
            </Tooltip>
          );
        })}
      </Stack>
    );
  }
  return null;
};

export { DataTableColumn };
