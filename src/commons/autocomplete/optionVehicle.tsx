import { Box, InputAdornment, Stack, styled, Typography } from "@mui/material";
import { Avatar } from "../avatar/avatar";
import { Svgs } from "../../svgs";

export const StartAdornmentVehicle = ({ value }: { value?: any }) => {
  if (!value?.id) return;

  return (
    <InputAdornment position="end">
      <Avatar
        alt={value?.brand.name || ""}
        width={20}
        height={20}
        objectFit="contain"
        src={value?.brand.logo}
      />
    </InputAdornment>
  );
};

export const OptionVehicle = ({
  props,
  option,
}: {
  option: any;
  props: React.HTMLAttributes<HTMLLIElement> & { key?: any };
}) => {
  const { key, ...rest } = props;
  return (
    <Box component="li" {...rest}>
      <Stack component="span" direction="row" flex={1} gap={1}>
        <Avatar
          objectFit="contain"
          sx={{ mr: 2, flexShrink: 0 }}
          alt={option?.brand.name || ""}
          src={option?.brand.logo}
        />
        <Stack component="span" flex={1}>
          <Typography fontSize={14} fontWeight="500" color="grey.700">
            {option.brand.name} ({option.model.name})
          </Typography>
          <Row>
            <Typography
              flex={1}
              fontSize={14}
              fontWeight="500"
              color="grey.500"
            >
              {option?.vehicleLicensePlate}
            </Typography>
            <Row>
              <Svgs.IconUser01 sx={{ fontSize: 16, color: "grey.500" }} />
              <Typography fontSize={14} fontWeight="500" color="grey.700">
                {option.numberOfSeats || 0}
              </Typography>
            </Row>
            <Row>
              <Svgs.IconLuggage01 sx={{ fontSize: 16, color: "grey.500" }} />
              <Typography fontSize={14} fontWeight="500" color="grey.700">
                {option.luggageCapacity || 0}
              </Typography>
            </Row>
          </Row>
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
