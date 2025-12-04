import { FC } from "react";
//
import { Backdrop, Stack, Tooltip, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
//constants
import { RoutesEnum } from "@constants";
// core

// hooks
import useSidebar from "./useSidebar";
//styles
import {
  BottomContent,
  Content,
  ExpandButton,
  IconContainer,
  Item,
  ItemsContainer,
  LeftContent,
  LogoContainer,
  RightContent,
  RootStyle,
  SubItem,
} from "./sidebar.styles";
// types
import { SidebarProps } from "./sidebar.types";
import { Svgs } from "svgs";
import { Avatar } from "index";

const Sidebar: FC<SidebarProps> = (props) => {
  const { routes, open, onOpen } = props;
  const theme = useTheme();

  const {
    isSmallScreen,
    leftOpen,
    subRoutes,
    logo,
    selectedItem,
    onClickItem,
  } = useSidebar(props);

  const onClickSidebar = () => onOpen(!open);

  const renderItems = () => {
    return routes
      .filter((item) => item.isVisible !== false)
      .map((item) => {
        return (
          <Tooltip
            title={leftOpen ? null : item.label}
            key={item.id}
            placement="right"
          >
            <Item
              isopen={`${leftOpen}`}
              onClick={onClickItem}
              to={item.subRoutes ? item.subRoutes[0].path : item.path}
              isselected={`${selectedItem.parentId === item.id}`}
            >
              <Stack>{item.icon}</Stack>
              <Typography noWrap className="item-label">
                {item.label}
              </Typography>
            </Item>
          </Tooltip>
        );
      });
  };

  const renderSubItems = () => {
    return subRoutes?.map((item) => {
      return (
        <SubItem
          title={item.label}
          isselected={`${selectedItem.id === item.id}`}
          key={item.id}
          to={item.path}
        >
          <Typography noWrap>{item.label}</Typography>
        </SubItem>
      );
    });
  };

  const renderSupportManager = () => {
    return (
      <Stack overflow="hidden">
        <Typography noWrap fontSize={14} fontWeight={600}>
          Support Manager
        </Typography>
        <Typography noWrap fontSize={14}>
          contact@trvlcode.com
        </Typography>
      </Stack>
    );
  };

  return (
    <>
      {isSmallScreen && (
        <Backdrop sx={{ zIndex: 9 }} open={open} onClick={onClickSidebar} />
      )}
      <RootStyle isOpen={open}>
        <ExpandButton
          onClick={onClickSidebar}
          isopen={`${open}`}
          ischildrenopen={`${subRoutes !== undefined && open}`}
        >
          <Svgs.IconChevronLeft stroke={theme.palette.grey[50]} />
        </ExpandButton>
        <Content>
          <LeftContent isChildrenOpen={subRoutes !== undefined}>
            <Stack width="100%">
              <LogoContainer isOpen={leftOpen}>
                <Link to={`/${RoutesEnum.MAIN}`}>
                  <Avatar
                    radius={0}
                    alt="logo"
                    src={logo}
                    height={leftOpen ? 46 : 46}
                    width={leftOpen ? 213 : 46}
                  />
                </Link>
              </LogoContainer>
              <ItemsContainer>{renderItems()}</ItemsContainer>
            </Stack>
            <Tooltip
              placement="right"
              title={leftOpen ? null : renderSupportManager()}
            >
              <BottomContent>
                <IconContainer>
                  <Svgs.IconSupportManager stroke={theme.palette.grey[600]} />
                </IconContainer>
                {leftOpen && renderSupportManager()}
              </BottomContent>
            </Tooltip>
          </LeftContent>
          {open && (
            <RightContent isOpen={open && subRoutes !== undefined}>
              {renderSubItems()}
            </RightContent>
          )}
        </Content>
      </RootStyle>
    </>
  );
};

export { Sidebar };
