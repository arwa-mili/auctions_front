import { FormControlLabel } from "@mui/material";
import { FC } from "react";
import { useController, useFormContext } from "react-hook-form";
//context
import { useFormBlockerContext } from "../../contextAPI";
//styles
import { AntSwitch } from "./switch.styles";
//Types
import { SwitchProps } from "./switch.types";

const Switch: FC<SwitchProps> = (props) => {
  const {
    name,
    label,
    size,
    rules,
    disabled,
    labelPlacement = "start",
    sx,
  } = props;
  const { control, clearErrors } = useFormContext();
  const { field } = useController({ name, control, rules });
  const dataFormBlocker = useFormBlockerContext();
  const onChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    field.onChange(event);
    clearErrors(name);
    if (props.onChange) {
      props.onChange(event, checked);
    }
  };

  //render
  return (
    <FormControlLabel
      label={label}
      labelPlacement={labelPlacement}
      onClick={(e) => e.stopPropagation()}
      sx={{ gap: 1, ml: 0, mr: 0, ...sx }}
      control={
        <AntSwitch
          {...field}
          size={size}
          id={name}
          name={name}
          checked={field.value}
          disabled={disabled || dataFormBlocker.isLoading}
          onChange={onChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      }
    />
  );
};

export { AntSwitch, Switch };
