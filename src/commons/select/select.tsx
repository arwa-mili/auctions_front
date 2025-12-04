import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  Typography,
} from "@mui/material";
import { useId, useMemo } from "react";
import { useController, useFormContext } from "react-hook-form";
//Context
import { useFormBlockerContext } from "../../contextAPI";
//components
//styles
import { Placeholder } from "./select.styles";
//Types
import { ColorInputProps, SelectProps } from "./select.types";

function Select<T>(props: SelectProps<T>): JSX.Element {
  const id = useId();
  const {
    name,
    label,
    placeholder,
    variant = "outlined",
    size = "small",
    fullWidth = true,
    data,
    heightPaper = 300,
    disabled,
    multiple,
    rules,
    color,
    sx,
    sxMenuItem,
    emptyLabel = "No data",
    IconComponent,
    getOptionValue,
    getOptionLabel,
    getOptionDisabled,
    onChange,
  } = props;
  const { control, clearErrors, setValue } = useFormContext();
  const { field, fieldState } = useController({ control, name, rules });
  const dataFormBlocker = useFormBlockerContext();

  //functions
  const onChangeValue = (event: any) => {
    field.onChange(event);
    clearErrors(name);
    if (onChange) {
      onChange(event);
    }
  };

  const onClickClear = () => {
    setValue(name, null);
  };
  //render
  const renderItem = () => {
    if (data.length === 0) {
      return (
        <Box p={2}>
          <Typography color="text.secondary" textAlign="center">
            {emptyLabel}
          </Typography>
        </Box>
      );
    }

    return data.map((item, index) => {
      if (!getOptionValue || !getOptionLabel) {
        return null;
      }
      return (
        <MenuItem
          key={index}
          sx={sxMenuItem}
          disabled={getOptionDisabled && getOptionDisabled(item)}
          value={getOptionValue(item)}
        >
          {getOptionLabel(item)}
        </MenuItem>
      );
    });
  };
  const getColor = (): ColorInputProps => {
    if (color) return color;
    if (disabled) return undefined;
    return fieldState.error ? "error" : undefined;
  };

  const renderValue = useMemo(() => {
    if (
      !field.value ||
      (Array.isArray(field.value) && field.value.length === 0)
    ) {
      return () => <Placeholder>{placeholder}</Placeholder>;
    } else if (props.renderValue) {
      return props.renderValue;
    }
    return undefined;
  }, [field.value, placeholder]);

  const customProps = useMemo(
    () => (variant !== "outlined" ? { disableUnderline: true } : {}),
    [variant]
  );

  return (
    <Box component="span">
      {label && <InputLabel sx={{ mb: 0.5 }}>{label}</InputLabel>}
      <FormControl variant={variant} size={size} fullWidth={fullWidth}>
        <MuiSelect
          // label={label}
          disabled={disabled || dataFormBlocker.isLoading}
          value={field.value || ""}
          renderValue={renderValue}
          color={getColor()}
          error={!!fieldState.error?.message}
          multiple={multiple}
          displayEmpty
          MenuProps={{
            PaperProps: { sx: { maxHeight: heightPaper } },
            marginThreshold: 0,
          }}
          sx={sx}
          {...customProps}
          IconComponent={IconComponent}
          onChange={onChangeValue}
        >
          {renderItem()}
        </MuiSelect>
        {fieldState.error?.message && (
          <FormHelperText error={!!fieldState.error}>
            {fieldState.error?.message}
          </FormHelperText>
        )}
      </FormControl>
    </Box>
  );
}
export { Select };
