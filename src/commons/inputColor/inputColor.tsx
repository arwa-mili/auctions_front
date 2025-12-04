import { FC } from "react";
import { useController, useFormContext } from "react-hook-form";
import { MuiColorInput, MuiColorInputColors } from "mui-color-input";
import {
  Box,
  FormHelperText,
  InputLabel,
  Typography,
  useTheme,
} from "@mui/material";
//types
import { ColorInputProps, InputColorProps } from "./inputColor.types";

const InputColor: FC<InputColorProps> = (props) => {
  const theme = useTheme();
  const {
    name,
    rules,
    format = "hex",
    size = "small",
    label,
    placeholder,
    margin,
    minWidth,
    width,
    tooltip,
    helperText,
    color,
    endAdornment,
    disabled,
    sx,
    onChange,
  } = props;
  const { control } = useFormContext();
  const { field, fieldState } = useController({ control, name, rules });

  //functions
  const onChangeText = (value: string, colors: MuiColorInputColors) => {
    field.onChange(value);
    onChange?.(value, colors);
  };

  //render

  const getColor = (): ColorInputProps => {
    if (color) return color;
    if (disabled) return undefined;
    return fieldState.error ? "error" : undefined;
  };

  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex" alignItems="center" mb={0.5}>
        {label && <InputLabel htmlFor={label}>{label}</InputLabel>}
      </Box>
      <MuiColorInput
        {...field}
        color={color || getColor()}
        size={size}
        disabled={disabled}
        style={{ margin, minWidth, width }}
        format={format}
        error={fieldState.invalid}
        placeholder={placeholder || ""}
        sx={sx}
        InputProps={{
          endAdornment,
        }}
        onChange={onChangeText}
      />

      <FormHelperText id={`helper-${label}`} sx={{ color: "error" }}>
        <Typography fontWeight={400} fontSize={12} color="error">
          {helperText || fieldState.error?.message}
        </Typography>
      </FormHelperText>
    </Box>
  );
};
export { InputColor };
