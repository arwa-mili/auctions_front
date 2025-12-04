import { RefObject, createRef, useEffect, useState } from "react";
import { useController, useFormContext } from "react-hook-form";
import { InputLabel, Stack } from "@mui/material";
//contextAPI
import { useFormBlockerContext } from "../../contextAPI";
//styles
import { Container, Button, Selector } from "./segmentedControl.styles";
//types
import { SegmentedControlProps } from "./segmentedControl.types";

function SegmentedControl<T>(props: SegmentedControlProps<T>): JSX.Element {
  const {
    label,
    data,
    name,
    size = "medium",
    color,
    margin,
    minWidth,
    position,
    optionLabelColor,
    borderColor,
    sxContainer,
    getOptionLabel,
    getOptionValue,
    getOptionIcon,
  } = props;
  const dataFormBlocker = useFormBlockerContext();
  const { control, setValue } = useFormContext();
  const { field } = useController({ control, name });

  const [selectorStyle, setSelectorStyle] = useState({});
  const [windowWidth, setWindowWidth] = useState({});

  const buttonRefs: Array<RefObject<any>> = [];
  data.map(() => buttonRefs.push(createRef()));

  useEffect(() => {
    const index = data.findIndex(
      (option) => getOptionValue(option) === field.value
    );
    if (index !== -1) {
      const button = buttonRefs[index].current;
      const width = Math.round(button.getBoundingClientRect().width) + 1;
      const left =
        Math.round(
          button.getBoundingClientRect().x -
            button.parentNode.getBoundingClientRect().x
        ) - 1;
      const top =
        Math.round(
          button.getBoundingClientRect().y -
            button.parentNode.getBoundingClientRect().y
        ) - 1;
      setSelectorStyle({
        width,
        left,
        top,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [field.value, windowWidth]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //functions
  const onChange = (item: T) => () => {
    setValue(name, getOptionValue(item));
    if (props.onChange) {
      props.onChange(item);
    }
  };

  const renderItem = () => {
    return data.map((item, index) => {
      const selected = getOptionValue(item) === field.value;
      const startIcon = getOptionIcon?.(item, selected);
      const label = getOptionLabel?.(item);
      return (
        <Button
          key={index}
          fullWidth
          minwidth={minWidth}
          size={size}
          color={color}
          textcolor={optionLabelColor}
          ref={buttonRefs[index]}
          selected={selected}
          startIcon={startIcon}
          disabled={dataFormBlocker.isLoading}
          onClick={onChange(item)}
        >
          {label}
        </Button>
      );
    });
  };
  return (
    <Stack sx={sxContainer}>
      <InputLabel sx={{ mb: 0.5 }}>{label}</InputLabel>
      <Container
        size={size}
        count={data.length}
        alignSelf={position}
        bordercolor={borderColor}
        margin={margin}
      >
        {renderItem()}
        {field.value && Object.keys(selectorStyle).length > 0 && (
          <Selector style={selectorStyle} size={size} color={color} />
        )}
      </Container>
    </Stack>
  );
}

export { SegmentedControl };
