import { Box, Stack, Typography } from "@mui/material";
import { Avatar } from "../avatar/avatar";

export const OptionLanguage = ({
  props,
  option,
}: {
  option: { code: string; name: string };
  props: React.HTMLAttributes<HTMLLIElement> & { key?: any };
}) => {
  const { key, ...rest } = props;
  return (
    <Box component="li" {...rest}>
      <Avatar
        variant="circular"
        width={20}
        height={20}
        objectFit="cover"
        sx={{ mr: 1, flexShrink: 0 }}
        alt={option.name}
        src={`langicons/${option.code.toLowerCase()}.svg`}
      />
      {option?.name}
    </Box>
  );
};

export const OptionSelectLanguage = ({
  code,
  name,
}: {
  code?: string;
  name?: string;
}) => {
  return (
    <Stack direction="row" alignItems="center">
      <Avatar
        alt={name || ""}
        width={24}
        height={24}
        sx={{ fontSize: 12 }}
        src={`/langicons/${code?.toLowerCase()}.svg`}
      />

      <Typography fontSize={14} fontWeight="500" color="grey.900" ml={1}>
        {name}
      </Typography>
    </Stack>
  );
};

export const OptionAutoCompleteLanguage = ({
  props,
  code,
  name,
}: {
  code?: string;
  name?: string;
  props: React.HTMLAttributes<HTMLLIElement> & { key?: any };
}) => {
  const { key, ...rest } = props;
  return (
    <Stack direction="row" alignItems="center" component="li" {...rest}>
      <Avatar
        alt={name || ""}
        width={24}
        height={24}
        sx={{ fontSize: 12 }}
        src={`langicons/${code?.toLowerCase()}.svg`}
      />
      <Typography fontSize={14} fontWeight="500" color="grey.900" ml={1}>
        {name}
      </Typography>
    </Stack>
  );
};
