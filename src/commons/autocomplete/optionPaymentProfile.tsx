import { InputAdornment, Box, Stack, Typography } from "@mui/material";
import { Avatar } from "../avatar/avatar";

export const StartAdornmentPaymentProfile = ({
  logo,
  name,
}: {
  name?: string;
  logo: string;
}) => {
  return (
    <InputAdornment position="end">
      <Avatar
        alt={name || ""}
        width={20}
        height={20}
        objectFit="contain"
        src={logo}
      />
    </InputAdornment>
  );
};

export const OptionPaymentProfile = ({
  props,
  logo,
  name,
  paymentProviderName,
}: {
  logo: string;
  name?: string;
  paymentProviderName?: string;
  props: React.HTMLAttributes<HTMLLIElement> & { key?: any };
}) => {
  const { key, ...rest } = props;
  return (
    <Box component="li" {...rest}>
      <Avatar
        variant="circular"
        width={20}
        height={20}
        objectFit="contain"
        sx={{ mr: 2, flexShrink: 0 }}
        src={logo}
        alt={name || ""}
      />
      <Stack>
        <Typography fontSize={14} fontWeight="500" color="grey.700">
          {name}
        </Typography>
        {paymentProviderName && (
          <Typography fontSize={14} color="grey.500">
            {paymentProviderName}
          </Typography>
        )}
      </Stack>
    </Box>
  );
};
