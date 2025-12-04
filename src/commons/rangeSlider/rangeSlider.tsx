import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import { useController, useFormContext } from "react-hook-form";
//context
import { useFormBlockerContext } from "../../contextAPI";
//utils
import { kFormatter } from "./rangeSlider.utils";
//styles
import { Slider } from "./rangeSlider.styles";
//types
import { RangeSliderProps } from "./rangeSlider.types";

const RangeSlider: FC<RangeSliderProps> = (props) => {
  const { name, label, size = "medium", min = 0, max = 1000, rules } = props;
  const { control, setValue } = useFormContext();
  const { field } = useController({ control, name, rules });
  const dataFormBlocker = useFormBlockerContext();
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(name, newValue as number[]);
  };

  return (
    <Stack>
      <Typography variant="subtitle1">{label}</Typography>
      <Stack direction="row" alignItems="center" gap={2}>
        <Typography variant="body2" fontWeight="500">
          {kFormatter(min)}
        </Typography>
        <Slider
          {...field}
          size={size}
          min={min}
          max={max}
          disabled={dataFormBlocker.isLoading}
          getAriaLabel={() => "price range"}
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => kFormatter(value)}
          onChange={handleChange}
        />
        <Typography variant="body2" fontWeight="500">
          {kFormatter(max)}
        </Typography>
      </Stack>
    </Stack>
  );
};

export { RangeSlider };
