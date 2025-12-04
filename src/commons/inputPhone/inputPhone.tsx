import { validatePhoneNumberLength } from "libphonenumber-js";
import { MuiTelInput, MuiTelInputInfo } from "mui-tel-input";
import { FC, useMemo } from "react";
import { useController, useFormContext } from "react-hook-form";
//Types
import { Box, InputLabel } from "@mui/material";
import { useFormBlockerContext } from "../../contextAPI";
import { ColorInputProps, InputPhoneProps } from "./inputPhone.types";

const InputPhone: FC<InputPhoneProps> = (props) => {
  const {
    name,
    label,
    placeholder,
    size = "small",
    variant = "outlined",
    fullWidth = true,
    endAdornment,
    rules,
    disabled,
    defaultCountry,
    startAdornment,
    color,
    sx,
  } = props;
  const { control } = useFormContext();
  const { field, fieldState } = useController({
    name,
    control,
    rules,
  });
  const dataFormBlocker = useFormBlockerContext();

  //fucntions
  const onChange = (value: string, info: MuiTelInputInfo): void => {
    if (
      validatePhoneNumberLength(value, info.countryCode || "US") === "TOO_LONG"
    ) {
      return;
    }
    field.onChange(value);
  };
  //render
  const getColor = (): ColorInputProps => {
    if (color) return color;
    if (disabled) return undefined;
    return fieldState.error ? "error" : undefined;
  };

  const InputProps = useMemo(
    () => (variant !== "outlined" ? { disableUnderline: true } : {}),
    [variant]
  );
  const startAdornmentIcon = useMemo(
    () => (startAdornment ? { startAdornment } : {}),
    [startAdornment]
  );
  return (
    <Box component="span">
      <InputLabel sx={{ mb: 0.5 }}>{label}</InputLabel>
      <MuiTelInput
        {...field}
        name={name}
        color={getColor()}
        variant={variant}
        size={size}
        // label={label}
        fullWidth={fullWidth}
        defaultCountry={defaultCountry}
        placeholder={placeholder || ""}
        disabled={disabled || dataFormBlocker.isLoading}
        onChange={onChange}
        error={!!fieldState.error?.message}
        helperText={fieldState.error?.message}
        sx={
          sx || {
            "& .MuiOutlinedInput-root": { pl: 0 },
            "& .MuiInputAdornment-root": { mr: 0 },
          }
        }
        InputProps={{
          endAdornment,
          ...startAdornmentIcon,
          ...InputProps,
        }}
      />
    </Box>
  );
};
export { InputPhone };
