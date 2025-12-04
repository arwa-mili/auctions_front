import { Box, InputLabel, TextField } from "@mui/material";
import { FC, useId, useMemo } from "react";
import { useController, useFormContext } from "react-hook-form";
//components
import { InputAdornmentPassword } from "./inputAdornmentPassword/inputAdornmentPassword";
//Types
import { ColorInputProps, InputProps } from "./input.types";
//context
import { useFormBlockerContext } from "../../contextAPI";

const Input: FC<InputProps> = (props) => {
  const id = useId();
  const {
    name,
    label,
    size = "small",
    variant = "outlined",
    fullWidth = true,
    multiline,
    placeholder,
    rows,
    type,
    startAdornment,
    endAdornment,
    rules,
    disabled,
    maxRows,
    color,
    autoFocus,
    maxCharacters,
    sxContainer,
    hideLabel,
    sx,
    getFieldValue,
    onChange,
    onFocus,
    onBlur,
  } = props;

  const { control } = useFormContext();
  const { field, fieldState } = useController({ control, name, rules });
  const dataFormBlocker = useFormBlockerContext();

  //functions
  const onChangeText = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    field.onChange(event);
    if (onChange) {
      onChange(event);
    }
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

  return (
    <Box component="span" sx={sxContainer}>
      {!hideLabel && <InputLabel sx={{ mb: 0.5 }}>{label}</InputLabel>}
      <TextField
        id={id}
        {...field}
        color={getColor()}
        autoFocus={autoFocus}
        // label={label}
        placeholder={placeholder || ""}
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        type={type}
        autoComplete="off"
        disabled={disabled || dataFormBlocker.isLoading}
        sx={sx}
        multiline={multiline}
        rows={rows}
        maxRows={maxRows}
        value={
          typeof field.value === "object"
            ? getFieldValue?.(field.value)
            : field.value
        }
        onChange={onChangeText}
        error={!!fieldState.error?.message}
        helperText={fieldState.error?.message}
        onFocus={onFocus}
        onBlur={onBlur}
        InputProps={{
          startAdornment,
          endAdornment,
          ...InputProps,
          inputProps: {
            maxLength: maxCharacters,
          },
        }}
      />
    </Box>
  );
};

export { Input, InputAdornmentPassword };
