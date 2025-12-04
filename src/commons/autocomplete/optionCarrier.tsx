import { Box, InputAdornment, Stack, Typography } from "@mui/material";
import { Avatar } from "../avatar/avatar";

enum CarrierStatus {
  INITIATED = "Initiated",
  IN_PROGRESS = "InProgress",
  SUBMITTED = "Submitted",
  APPROVED = "Approved",
  REJECTED = "Rejected",
  CONFIRMED = "Confirmed",
}
enum CarrierProviderType {
  COMPANY = "Company",
  INDIVIDUAL = "Individual",
}
type CountryResponseAttributes = {
  id: number;
  name: string;
  iso3: string;
  iso2: string;
};
type RegionResponseAttributes = {
  id: number;
  name: string;
  code: string;
  latitude: number;
  longitude: number;
};
type CityResponseAttributes = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
};
export type BasicUserCarrierResponseAttributes = {
  id: string;
  companyName: string;
  logoUrl?: string;
  providerType: CarrierProviderType;
  country: CountryResponseAttributes;
  region: RegionResponseAttributes;
  city: CityResponseAttributes;
  address: string;
  currencyCode?: string;
  carrierStatus?: CarrierStatus;
};
export const StartAdornmentCarrier = ({
  value,
}: {
  value?: BasicUserCarrierResponseAttributes;
}) => {
  if (!value?.id) return;

  return (
    <InputAdornment position="end">
      <Avatar
        alt={value?.companyName || ""}
        width={20}
        height={20}
        objectFit="contain"
        src={value.logoUrl}
      />
    </InputAdornment>
  );
};

export const OptionCarrier = ({
  props,
  option,
}: {
  option: BasicUserCarrierResponseAttributes;
  props: React.HTMLAttributes<HTMLLIElement> & { key?: any };
}) => {
  const { key, ...rest } = props;
  const data = [
    option?.country?.name || "",
    option?.region?.name || "",
    option?.city?.name || "",
  ];
  return (
    <Box component="li" {...rest}>
      <Stack component="span" direction="row" gap={1}>
        <Avatar
          objectFit="contain"
          sx={{ mr: 2, flexShrink: 0 }}
          src={option.logoUrl}
          alt={option?.companyName || ""}
        />
        <Stack component="span">
          <Typography fontSize={14} fontWeight="500" color="grey.700">
            {option.companyName}
          </Typography>
          <Typography fontSize={14} fontWeight="500" color="grey.500">
            {data.filter((o) => o).join(", ")}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
