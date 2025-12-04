import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Divider, Stack, Typography } from "@mui/material";
//helpers
// core
// styles
import {
  ButtonsContainer,
  RootStyle,
  UserInfoContainer,
} from "./avatarPopover.styles";
// types
import { AvatarPopoverProps } from "./avatarPopover.types";
import { Avatar, Button, Select, Svgs } from "index";

const AvatarPopover: FC<AvatarPopoverProps> = (props) => {
  const { user, onClickAccount, onClickLogout, onChangeLanguage } =
    props;
  const { t } = useTranslation();
  return (
    <RootStyle divider={<Divider flexItem orientation="horizontal" />}>
      <UserInfoContainer>
        <Avatar
          alt={user.name}
          src={user.avatar}
          width={40}
          height={40}
          objectFit="contain"
          radius="50%"
        />
        <Stack overflow="hidden" width="100%">
          <Typography noWrap fontWeight={600} variant="subtitle1">
            {user.name}
          </Typography>
          <Typography noWrap variant="subtitle2">
            {user.email}
          </Typography>
        </Stack>
      </UserInfoContainer>
      <Stack paddingBlock={0.5}>
        <Select
          name="language"
          label="Language"
          size="small"
          heightPaper={300}
          getOptionLabel={(item) => (
            <Stack direction="row" alignItems="center" gap={1}>
              <Avatar
                src={"tunisia.png"}
                objectFit="cover"
                width={20}
                height={20}
                alt={item.name}
              />
              <Typography color="grey.900">
                {item.code?.toUpperCase()}
              </Typography>
            </Stack>
          )}
          getOptionValue={(item) => item.code}
          onChange={onChangeLanguage}
        />
      </Stack>
      <ButtonsContainer>
        {onClickAccount && (
          <Button
            startIcon={<Svgs.IconUser03 sx={{ color: "grey.700" }} />}
            onClick={onClickAccount}
          >
            <Typography variant="inherit" color="grey.700">
              {t("common:my_account.my_account")}
            </Typography>
          </Button>
        )}

        <Button
          startIcon={<Svgs.IconLogOut01 color="error" />}
          onClick={onClickLogout}
        >
          <Typography variant="inherit" color="error.main">
            {t("common:navbar.logout")}
          </Typography>
        </Button>
      </ButtonsContainer>
    </RootStyle>
  );
};

export default AvatarPopover;
