import { Box, Typography } from "@mui/material";

type Resource = {
  url: string;
};
type CountryInfo = {
  iso2: string;
  iso3: string;
  id: number;
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

type PartialCustomerData = {
  id: string;
  firstName: string;
  lastName: string;
  citizenship?: CountryInfo;
  avatar?: Resource;
  email?: string;
  phoneNumber?: string;
  address?: string;
};

export const CardCustomer = ({
  props,
  option,
}: {
  option: PartialCustomerData;
  props: React.HTMLAttributes<HTMLLIElement> & { key?: any };
}) => {
  const { key, ...rest } = props;
  return (
    <Box component="li" {...rest}>
      <Box component="span" display="flex" flexDirection="column">
        <Typography fontSize={14} fontWeight="500" color="grey.900">
          {option.firstName} {option.lastName}
        </Typography>
        <Typography fontSize={12} color="grey.500">
          {option.email}
        </Typography>
      </Box>
    </Box>
  );
};
