import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  RadioGroup as MuiRadioGroup,
  Radio,
} from "@mui/material";
import { useController, useFormContext } from "react-hook-form";
//Types
import { useFormBlockerContext } from "../../contextAPI";
import { RadioGroupProps } from "./radioGroup.types";

function RadioGroup<T>(props: RadioGroupProps<any>): JSX.Element {
  const {
    name,
    label,
    data,
    fullWidth = true,
    rules,
    size = "small",
    labelPlacement,
    row,
    sxRadioGroup,
    sx,
    getOptionValue,
    getOptionLabel,
    onChange,
  } = props;
  const { control, clearErrors } = useFormContext();
  const { field, fieldState } = useController({ control, name, rules });
  const dataFormBlocker = useFormBlockerContext();

  //functions
  const onChangeValue = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    field.onChange(event);
    clearErrors(name);
    if (onChange) {
      onChange(event, value);
    }
  };
  const getOptionDisabled = (item: T) => {
    if (props.getOptionDisabled) {
      return props.getOptionDisabled(item);
    }
  };

  //render
  const renderItem = () => {
    return data?.map((item, index) => {
      return (
        <FormControlLabel
          key={index}
          labelPlacement={labelPlacement}
          value={getOptionValue(item)}
          control={
            <Radio
              icon={item.icon}
              checkedIcon={item.checkedIcon}
              size={size}
            />
          }
          label={getOptionLabel(item)}
          disabled={getOptionDisabled(item) || dataFormBlocker.isLoading}
        />
      );
    });
  };
  return (
    <FormControl sx={sx} fullWidth={fullWidth}>
      <FormLabel id={label}>{label}</FormLabel>
      <MuiRadioGroup
        row={row}
        value={field.value}
        onChange={onChangeValue}
        sx={sxRadioGroup}
      >
        {renderItem()}
      </MuiRadioGroup>
      <FormHelperText error={fieldState.error?.message !== null}>
        {fieldState.error?.message}
      </FormHelperText>
    </FormControl>
  );
}
export { RadioGroup };
