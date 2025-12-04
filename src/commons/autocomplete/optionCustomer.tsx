import { Box, InputAdornment, Stack, Typography } from "@mui/material";
import { Avatar } from "../avatar/avatar";

type Resource = {
  url: string;
};

type CountryInfo = {
  iso2: string;
  iso3: string;
  dialing: number;
  name: string;
};
type StateInfo = {
  id: number;
  name: string;
};
type CityInfo = {
  id: number;
  name: string;
};
export type AddressData = {
  country?: CountryInfo;
  state?: StateInfo;
  city?: CityInfo;
  addressLine?: string;
  postalCode?: string;
};

export type PartialCustomerData = {
  id: string;
  firstName: string;
  lastName: string;
  citizenship?: CountryInfo;
  avatarUrl?: string;
  emailAddress: string;
  phoneNumber: string;
  address?: AddressData;
};

export const StartAdornmentCustomer = ({
  value,
}: {
  value?: PartialCustomerData;
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

export const OptionCustomer = ({
  props,
  option,
}: {
  option: PartialCustomerData;
  props: React.HTMLAttributes<HTMLLIElement> & { key?: any };
}) => {
  const { key, ...rest } = props;
  return (
    <Box component="li" {...rest}>
      <Stack component="span" direction="row" gap={1}>
        <Avatar
          objectFit="contain"
          sx={{ mr: 2, flexShrink: 0 }}
          src={option.avatarUrl}
          alt={option?.firstName || ""}
        />
        <Stack component="span">
          <Typography fontSize={14} fontWeight="500" color="grey.700">
            {option.firstName} {option.lastName}
          </Typography>
          <Typography fontSize={14} fontWeight="500" color="grey.500">
            {option?.phoneNumber}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
