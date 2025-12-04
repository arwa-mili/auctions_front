import { FC } from "react";
import { useController, useFormContext } from "react-hook-form";
import { IconButton, InputAdornment } from "@mui/material";
//
import { Svgs } from "../../../svgs";
//Types
import { InputAdornmentPasswordProps } from "./inputAdornmentPassword.types";

const InputAdornmentPassword: FC<InputAdornmentPasswordProps> = (props) => {
  const { name } = props;

  const { control, setValue } = useFormContext();
  const { field } = useController({ control, name });

  //functions
  const onClickShowPassword = () => {
    setValue(name, !field.value);
  };
  //render
  return (
    <InputAdornment position="end">
      <IconButton
        size="extra-small"
        aria-label="toggle password visibility"
        onClick={onClickShowPassword}
        edge="end"
      >
        {field.value ? (
          <Svgs.IconEye fontSize="medium" />
        ) : (
          <Svgs.IconEyeOff fontSize="medium" />
        )}
      </IconButton>
    </InputAdornment>
  );
};

export { InputAdornmentPassword };
