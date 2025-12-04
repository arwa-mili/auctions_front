import { Box, InputAdornment, Stack, Typography, styled } from "@mui/material";

import { Avatar } from "../avatar/avatar";
import { Svgs } from "../../svgs";

type CurrencyResponseAttributes = {
  code: string;
  name: string;
  symbol: string;
  numCode: number;
};
type DriverSettings = {
  flatRate?: number;
  hourlyRate?: number;
  baseRatePercentage?: number;
  gratuityPercentage?: number;
  currency?: CurrencyResponseAttributes;
};
type DriverResponseAttributes = {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  address?: string;
  avatarUrl?: string;
  licenseNumber?: string;
  licenseExpirationDate?: string;
  licensePhotoUrl?: string;
  settings?: DriverSettings;
  comment?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export const StartAdornmentDriver = ({
  value,
}: {
  value?: DriverResponseAttributes;
}) => {
  if (!value?.id) return;

  return (
    <InputAdornment position="end">
      <Avatar
        alt={value?.firstName || ""}
        width={20}
        height={20}
        objectFit="contain"
        src={value.avatarUrl}
      />
    </InputAdornment>
  );
};

export const OptionDriver = ({
  props,
  option,
}: {
  option: DriverResponseAttributes;
  props: React.HTMLAttributes<HTMLLIElement> & { key?: any };
}) => {
  const { key, ...rest } = props;

  const renderSettings = () => {
    if (option?.settings?.baseRatePercentage) {
      return (
        <Row>
          <Svgs.IconPercent01 sx={{ fontSize: 16, color: "grey.500" }} />
          <Typography fontSize={14} fontWeight="500" color="grey.500">
            {`${option?.settings?.baseRatePercentage || 0}%`}
          </Typography>
        </Row>
      );
    } else if (option?.settings?.hourlyRate) {
      return (
        <Row>
          <Svgs.IconClock sx={{ fontSize: 16, color: "grey.500" }} />
          <Typography fontSize={14} fontWeight="500" color="grey.500">
            {`${option?.settings?.hourlyRate || 0} ${option?.settings?.currency?.code}`}
          </Typography>
        </Row>
      );
    } else if (option?.settings?.flatRate) {
      return (
        <Row>
          <Typography fontSize={14} fontWeight="500" color="grey.500">
            {`${option?.settings?.flatRate || 0} ${option?.settings?.currency?.code}`}
          </Typography>
        </Row>
      );
    }
  };
  return (
    <Box component="li" {...rest}>
      <Stack component="span" direction="row" flex={1} gap={1}>
        <Avatar
          objectFit="contain"
          sx={{ mr: 2, flexShrink: 0 }}
          src={option.avatarUrl}
          alt={option?.firstName || ""}
        />
        <Stack component="span" flex={1}>
          <Row>
            <Typography
              flex={1}
              fontSize={14}
              fontWeight="500"
              color="grey.700"
            >
              {option.firstName} {option.lastName}
            </Typography>
            {renderSettings()}
          </Row>
          <Typography fontSize={14} fontWeight="500" color="grey.500">
            {option?.phoneNumber}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

const Row = styled("span")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));
