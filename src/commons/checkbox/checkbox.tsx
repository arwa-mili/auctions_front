import { FormHelperText, Checkbox as MuiCheckbox } from "@mui/material";
import { FC } from "react";
import { useController, useFormContext } from "react-hook-form";
//context
import { useFormBlockerContext } from "../../contextAPI";
//styles
import { FormControlLabel } from "./checkbox.styles";
//Types
import { CheckboxProps } from "./checkbox.types";

const Checkbox: FC<CheckboxProps> = (props) => {
  const {
    name,
    label,
    labelFontWeight = "500",
    size = "small",
    rules,
    disabled,
    icon,
    checkedIcon,
    onChange,
  } = props;
  const { control, clearErrors, setValue } = useFormContext();
  const { field, fieldState } = useController({ control, name, rules });
  const dataFormBlocker = useFormBlockerContext();
  //functions
  const onChangeValue = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(name, checked);
    clearErrors(name);
    if (onChange) {
      onChange(event, checked);
    }
  };
  //render
  return (
    <>
      <FormControlLabel
        label={label}
        fontWeight={labelFontWeight}
        control={
          <MuiCheckbox
            {...field}
            size={size}
            id={name}
            name={name}
            checked={field.value}
            icon={icon}
            checkedIcon={checkedIcon}
            disabled={disabled || dataFormBlocker.isLoading}
            onChange={onChangeValue}
            inputProps={{ "aria-label": "controlled" }}
            onClick={(e) => e.stopPropagation()}
          />
        }
      />
      {!!fieldState.error?.message && (
        <FormHelperText id={`helper-${label}`}>
          {fieldState.error?.message}
        </FormHelperText>
      )}
    </>
  );
};
export { Checkbox };
