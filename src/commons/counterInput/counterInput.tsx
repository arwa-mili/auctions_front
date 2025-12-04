import { FormHelperText, Stack, Typography, useTheme } from "@mui/material";
import { FC, useCallback, useMemo } from "react";
import { useController, useFormContext } from "react-hook-form";
//constants
import { Svgs } from "../../svgs";
//contextAPI
import { useFormBlockerContext } from "../../contextAPI";
//styles
import { Container, ContainerIcon, Content } from "./counterInput.styles";
//types
import { CounterInputProps } from "./counterInput.types";

const CounterInput: FC<CounterInputProps> = (props) => {
  const {
    name,
    label,
    note,
    min = 0,
    size = "medium",
    direction = "column",
    disabled,
    bgColorCounter,
    rules,
    onDecrease,
    onIncrease,
    sx,
  } = props;
  const theme = useTheme();
  const methods = useFormContext();
  const value = methods.watch(name);
  const { field, fieldState } = useController({
    control: methods.control,
    name,
    rules,
  });
  const dataFormBlocker = useFormBlockerContext();

  //functions
  const onClickDecrease = useCallback(() => {
    methods.setValue(name, value - 1);
    if (onDecrease) {
      onDecrease();
    }
  }, [value]);
  const onClickIncrease = useCallback(() => {
    methods.setValue(name, value + 1);
    if (onIncrease) {
      onIncrease();
    }
  }, [value]);

  const colorLeft = useMemo(
    () => (value === min ? theme.palette.grey[300] : theme.palette.grey[500]),
    [min, value]
  );

  const counter = (
    <Container bgColor={bgColorCounter}>
      <ContainerIcon
        size={size}
        disabled={value === min || dataFormBlocker.isLoading}
        onClick={onClickDecrease}
      >
        <Svgs.IconMinus fontSize={size} stroke={colorLeft} />
      </ContainerIcon>
      <Content size={size}>
        <Typography
          fontSize={14}
          fontWeight="500"
          color={theme.palette.grey[700]}
        >
          {value}
        </Typography>
      </Content>
      <ContainerIcon
        size={size}
        onClick={onClickIncrease}
        disabled={disabled || dataFormBlocker.isLoading}
      >
        <Svgs.IconPlus fontSize={size} stroke={theme.palette.grey[500]} />
      </ContainerIcon>
    </Container>
  );
  if (direction === "column") {
    return (
      <Stack sx={sx} gap="4px">
        {label && (
          <Typography fontSize={14} fontWeight="500" color="grey.700">
            {label}
            {note && (
              <Typography
                ml="4px"
                component="span"
                fontSize={12}
                fontWeight="400"
                color="grey.500"
              >
                {note}
              </Typography>
            )}
          </Typography>
        )}
        {counter}
        {fieldState.error?.message && (
          <FormHelperText error={!!fieldState.error}>
            {fieldState.error?.message}
          </FormHelperText>
        )}
      </Stack>
    );
  }
  return (
    <Stack sx={sx}>
      <Stack direction="row" flex={1} gap={1}>
        <Stack flex={1}>
          {label && (
            <Typography fontSize={14} fontWeight="500" color="grey.700">
              {label}
            </Typography>
          )}
          {note && (
            <Typography
              component="span"
              fontSize={12}
              fontWeight="400"
              color="grey.500"
            >
              {note}
            </Typography>
          )}
        </Stack>
        {counter}
      </Stack>
      {fieldState.error?.message && (
        <FormHelperText error={fieldState.error?.message !== null}>
          {fieldState.error.message}
        </FormHelperText>
      )}
    </Stack>
  );
};

export { CounterInput };
