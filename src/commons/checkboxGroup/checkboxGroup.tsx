import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  RadioGroup as MuiRadioGroup,
} from "@mui/material";
import { useController, useFormContext } from "react-hook-form";
//context
import { useFormBlockerContext } from "../../contextAPI";
//Types
import { CheckboxGroupProps } from "./checkboxGroup.types";

function CheckboxGroup<T>(props: CheckboxGroupProps<any>): JSX.Element {
  const {
    name,
    label,
    data,
    fullWidth = true,
    labelSelectAll,
    rules,
    size = "small",
    labelPlacement,
    row,
    sx,
    sxFormControlLabel,
    getOptionValue,
    getOptionLabel,
    gridBreakpoints,
    onChange,
  } = props;
  const { control, setValue, clearErrors } = useFormContext();
  const { field, fieldState } = useController({ control, name, rules });
  const dataFormBlocker = useFormBlockerContext();

  //functions
  const removeItem = (value: string | number) => {
    const index = field.value?.indexOf(value);
    if (index > -1) {
      field.value?.splice(index, 1);
    }
    return field.value;
  };

  const onChangeValue =
    (value: string | number) =>
    (event: React.SyntheticEvent<Element, Event>, checked: boolean) => {
      if (checked) {
        setValue(name, [...field.value, value]);
      } else {
        const newFieldValue = removeItem(value);
        setValue(name, newFieldValue);
      }

      clearErrors(name);
      if (onChange) {
        onChange(event, value, checked);
      }
    };
  const getOptionDisabled = (item: T) => {
    if (props.getOptionDisabled) {
      return props.getOptionDisabled(item);
    }
  };

  const onChangeSelectAll = () => {
    const isSelectAll = field.value?.length === data.length;
    if (isSelectAll) {
      setValue(name, []);
    } else {
      const newValues = data.map((o) => getOptionValue(o));
      setValue(name, newValues);
    }
  };

  //render
  const renderItem = () => {
    return data?.map((item, index) => {
      const value = getOptionValue(item);
      const checked = field.value?.indexOf(value) !== -1;
      return (
        <Grid
          key={index}
          item
          xl={gridBreakpoints?.xl || 12}
          lg={gridBreakpoints?.lg || 12}
          md={gridBreakpoints?.md || 12}
          sm={gridBreakpoints?.sm || 12}
          xs={gridBreakpoints?.xs || 12}
        >
          <FormControlLabel
            labelPlacement={labelPlacement}
            sx={sxFormControlLabel}
            value={value}
            control={<Checkbox size={size} checked={checked} />}
            label={getOptionLabel(item)}
            disabled={getOptionDisabled(item) || dataFormBlocker.isLoading}
            onChange={onChangeValue(value)}
          />
        </Grid>
      );
    });
  };
  return (
    <FormControl sx={sx} fullWidth={fullWidth}>
      <FormLabel id={label} sx={{ fontSize: 14, mb: 0.5 }}>
        {label}
      </FormLabel>
      <MuiRadioGroup row={row}>
        {labelSelectAll && (
          <FormControlLabel
            labelPlacement={labelPlacement}
            control={<Checkbox size={size} />}
            label={labelSelectAll}
            onChange={onChangeSelectAll}
          />
        )}
        <Grid container spacing={1}>
          {renderItem()}
        </Grid>
      </MuiRadioGroup>
      {fieldState.error?.message && (
        <FormHelperText error={fieldState.error?.message !== null}>
          {fieldState.error?.message}
        </FormHelperText>
      )}
    </FormControl>
  );
}
export { CheckboxGroup };
