import { DateTimePicker as MuiDateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { FC, useMemo } from "react";
import { useController, useFormContext } from "react-hook-form";
//Types
import { Box, InputLabel } from "@mui/material";
import { useFormBlockerContext } from "../../contextAPI";
import { Svgs } from "../../svgs";
import { DateTimePickerProps } from "./dateTimePicker.types";

const DateTimePicker: FC<DateTimePickerProps> = (props) => {
  const {
    name,
    label,
    fullWidth = true,
    minDate,
    maxDate,
    rules,
    size = "small",
    variant = "outlined",
    format = "dd/MM/yyyy HH:mm",
    placeholder,
    readOnly = false,
    disabled,
    sxContainer,
    sx,
  } = props;
  const { control, clearErrors } = useFormContext();
  const { field, fieldState } = useController({ control, name, rules });
  const dataFormBlocker = useFormBlockerContext();

  const onChange = (value: any, context: any) => {
    field.onChange(value);
    clearErrors(name);
    if (props.onChange) {
      props.onChange(value, context);
    }
  };

  const InputProps = useMemo(
    () => (variant !== "outlined" ? { disableUnderline: true } : {}),
    [variant]
  );

  return (
    <Box component="span" sx={sxContainer}>
      <InputLabel sx={{ mb: 0.5 }}>{label}</InputLabel>
      <MuiDateTimePicker
        // label={label}
        value={field.value}
        onChange={onChange}
        minDateTime={minDate}
        maxDateTime={maxDate}
        format={format}
        ampm={false}
        ampmInClock={false}
        sx={sx}
        disabled={disabled || dataFormBlocker.isLoading}
        slots={{
          openPickerIcon: () => <Svgs.IconCalendar fontSize={size} />,
        }}
        slotProps={{
          textField: {
            placeholder: placeholder || "",
            size,
            variant,
            fullWidth,
            error: !!fieldState.error?.message,
            disabled,
            helperText: fieldState.error?.message,
            inputProps: { placeholder: placeholder || "", readOnly },
            InputProps: { ...InputProps },
          },
        }}
      />
    </Box>
  );
};
export { DateTimePicker };
