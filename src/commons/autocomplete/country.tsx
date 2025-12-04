import { Box, InputAdornment } from "@mui/material";
import { Image } from "../image/image";
//types

export type GetTimezoneRes = {
  zoneName?: string;
  gmtOffset?: number;
  gmtOffsetName?: string;
  abbreviation?: string;
  tzName?: string;
};
export type GetCountryRes = {
  countryId?: number;
  name?: string;
  iso3?: string;
  iso2?: string;
  latitude?: number;
  longitude?: number;
};

export const StartAdornmentCountry = ({ value }: { value?: GetCountryRes }) => {
  //@ts-ignore
  const iso2 = value?.iso2?.toLowerCase() || value?.codeAlpha2?.toLowerCase();

  return (
    <InputAdornment position="end">
      <Image
        variant="circular"
        objectFit="cover"
        width={24}
        height={24}
        src={`https://flagicons.lipis.dev/flags/1x1/${iso2}.svg`}
      />
    </InputAdornment>
  );
};

export const CardCountry = ({
  props,
  option,
  getName,
}: {
  option: GetCountryRes;
  getName?: (option: GetCountryRes) => string;
  props: React.HTMLAttributes<HTMLLIElement> & { key?: any };
}) => {
  const { key, ...rest } = props;
  return (
    <Box component="li" {...rest}>
      <Image
        variant="circular"
        width={24}
        height={24}
        objectFit="cover"
        sx={{ marginRight: 1, flexShrink: 0 }}
        src={`https://flagicons.lipis.dev/flags/1x1/${option?.iso2?.toLowerCase()}.svg`}
        alt={option.name}
      />
      {getName ? getName(option) : option?.name}
    </Box>
  );
};
