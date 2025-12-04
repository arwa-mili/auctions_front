import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { FC, useMemo } from "react";
import { useController, useFormContext } from "react-hook-form";
//Types
import { Box, InputLabel } from "@mui/material";
//context
import { useFormBlockerContext } from "../../contextAPI";
import { Svgs } from "../../svgs";
import { DatePickerProps } from "./datePicker.types";

const DatePicker: FC<DatePickerProps> = (props) => {
  const {
    name,
    label,
    fullWidth = true,
    minDate,
    maxDate,
    rules,
    size = "small",
    variant = "outlined",
    format = "dd/MM/yyyy",
    views,
    placeholder,
    readOnly = false,
    disablePast,
    disableFuture,
    referenceDate,
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
      <DesktopDatePicker
        // label={label}
        value={field.value}
        views={views}
        onChange={onChange}
        //@ts-ignore
        minDate={minDate}
        //@ts-ignore
        maxDate={maxDate}
        format={format}
        referenceDate={referenceDate}
        disabled={disabled || dataFormBlocker.isLoading}
        disableFuture={disableFuture}
        disablePast={disablePast}
        slots={{
          openPickerIcon: () => <Svgs.IconCalendar fontSize={size} />,
        }}
        sx={{
          "& .MuiIconButton-root": {
            minWidth: size === "small" ? 30 : undefined,
            minHeight: size === "small" ? 30 : undefined,
          },
          ...sx,
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
export { DatePicker };
