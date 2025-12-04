import { Badge, Popover, Stack, Tooltip, useTheme } from "@mui/material";
import { createRef, FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
//contextAPI
// components
import { Breadcrumb } from "@components";
import AvatarPopover from "./avatarPopover/avatarPopover";
// core
// styles
import { IconsContainer, RootStyle } from "./navbar.styles";
// types
import { NavbarProps } from "./navbar.types";
//api
import { Avatar, IconButton, ModalRight, Svgs } from "index";

const Navbar: FC<NavbarProps> = (props) => {
  const {
    logo,
    background,
    breadcrumbs,
    user,
    buttons,
    onClickAccount,
    onClickLogout,
    onChangeLanguage
  } = props;
  const { t } = useTranslation(["common"]);
  const theme = useTheme();
  const refNotification = createRef<ModalRight>();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const popoverOpen = Boolean(anchorEl);
  const popoverId = popoverOpen ? "avatar-popover" : undefined;
  //queries & mutations
  
 

  //functions
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickAvatar = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const onFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.body.requestFullscreen();
    }
    setIsFullScreen((prev) => !prev);
  };



  return (
    <>
      <RootStyle background={background}>
        {logo && <Avatar alt="logo" variant="square" width={160} src={logo} />}
        <Stack>
          <Breadcrumb
            data={breadcrumbs}
            separator={
              <Svgs.IconChevronRight stroke={theme.palette.grey[500]} />
            }
            sx={{ ol: { gap: 1 } }}
          />
        </Stack>
        <Stack
          direction="row"
          gap={2}
          alignItems="center"
          justifyContent="flex-end"
        >
          <IconsContainer>
            <Tooltip
              arrow
              title={t("common:labels.notifications")}
            >
              <IconButton size="small" bgColor={buttons?.bgColor}>
                <Badge badgeContent={1} color="primary">
                  <Svgs.IconBell
                    fill="transparent"
                    stroke={buttons?.iconColor}
                  />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip arrow title={t("common:labels.full_screen")}>
              <IconButton
                size="small"
                bgColor={buttons?.bgColor}
                onClick={onFullScreen}
              >
                {isFullScreen ? (
                  <Svgs.IconMinimize02 stroke={buttons?.iconColor} />
                ) : (
                  <Svgs.IconMaximize02 stroke={buttons?.iconColor} />
                )}
              </IconButton>
            </Tooltip>
          </IconsContainer>

          <IconButton
            aria-describedby={popoverId}
            size="extra-small"
            sx={{ width: 40, height: 40 }}
            onClick={onClickAvatar}
          >
            <Avatar src={user.avatar} radius="50%" alt="user" />
          </IconButton>
          <Popover
            sx={{ ".MuiPopover-paper": { borderRadius: 2 } }}
            id={popoverId}
            open={popoverOpen}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <AvatarPopover
              user={user}
              onClickAccount={onClickAccount}
              onClickLogout={onClickLogout}
              onChangeLanguage={onChangeLanguage}
            />
          </Popover>
        </Stack>
      </RootStyle>
      {/* Modal notifications */}
      <ModalRight
        ref={refNotification}
        size="small"
        onClickClose={() => refNotification.current?.hide()}
      >
      </ModalRight>
    </>
  );
};

export { Navbar };
