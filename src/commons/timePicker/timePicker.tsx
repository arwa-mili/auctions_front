import { Box, InputLabel } from "@mui/material";
import { TimePicker as MuiTimePicker } from "@mui/x-date-pickers/TimePicker";
import { FC, useMemo } from "react";
import { useController, useFormContext } from "react-hook-form";
//context
import { useFormBlockerContext } from "../../contextAPI";
//Types
import { TimePickerProps } from "./timePicker.types";

const TimePicker: FC<TimePickerProps> = (props) => {
  const {
    name,
    label,
    placeholder,
    fullWidth = true,
    disabled,
    rules,
    size = "small",
    variant = "outlined",
    minTime,
    maxTime,
    readOnly = false,
  } = props;
  const { control } = useFormContext();
  const { field, fieldState } = useController({ control, name, rules });
  const dataFormBlocker = useFormBlockerContext();

  const InputProps = useMemo(
    () => (variant !== "outlined" ? { disableUnderline: true } : {}),
    [variant]
  );
  return (
    <Box component="span">
      <InputLabel sx={{ mb: 0.5 }}>{label}</InputLabel>
      <MuiTimePicker
        // label={label}
        value={field.value}
        onChange={field.onChange}
        // disabled={disabled}
        ampm={false}
        minTime={minTime}
        maxTime={maxTime}
        disabled={disabled || dataFormBlocker.isLoading}
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
export { TimePicker };
