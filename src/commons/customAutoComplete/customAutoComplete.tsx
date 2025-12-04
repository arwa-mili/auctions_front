import { useCallback, useEffect, useRef, useState } from "react";
import { useController, useFormContext } from "react-hook-form";
//material
import {
  Box,
  InputLabel,
  TextField,
  Autocomplete,
  AutocompleteRenderInputParams,
  Paper,
  ClickAwayListener,
  Typography,
} from "@mui/material";
//conetxtAPI
import { useFormBlockerContext } from "../../contextAPI";
//components
import { Button } from "../button/button";
//utils
import { debounce } from "./customAutoComplete.utils";
//styles
import { ContainerButton } from "./customAutoComplete.styles";
//Types
import { CustomAutoCompleteProps } from "./customAutoComplete.types";

function CustomAutoComplete<T>(props: CustomAutoCompleteProps<T>): JSX.Element {
  const {
    name,
    nameSearch,
    size = "small",
    variant = "outlined",
    label,
    labelButton,
    placeholder,
    loading,
    data,
    margin,
    fullWidth = true,
    disabled,
    rules,
    loadingLabel,
    noResultLabel,
    popupIcon,
    getOptionLabel,
    isOptionEqualToValue,
    startAdornment,
    startIconButton,
    renderOption,
    sxContainer,
    blurOnSelect,
  } = props;
  const ref = useRef<HTMLDivElement | null>(null);
  const dataFormBlocker = useFormBlockerContext();
  const { control, setValue, clearErrors } = useFormContext();
  const { field, fieldState } = useController({ control, name, rules });
  //state
  const [menuWidth, setMenuWidth] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const [startLoading, setStartLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!ref.current) return;
    const resizeObserver = new ResizeObserver((resizeObserverEntrys) => {
      // when the size of the element changes
      setMenuWidth(resizeObserverEntrys[0].contentRect.width);
    });

    resizeObserver.observe(ref.current);
    return () => resizeObserver.disconnect(); // clean up
  }, []);

  //functions
  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const debouncedSearch = useCallback(
    debounce(async (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(name, event.target.value);
      clearErrors(name);
      if (props.onChangeText) {
        props.onChangeText(event);
      }
      setStartLoading(false);
    }, 1000),
    []
  );

  const onChangeText = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setStartLoading(true);
    debouncedSearch(event);
  };

  const onChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: T | string | null
  ) => {
    setValue(name, value);
    clearErrors(name);
    if (!value) {
      setValue(nameSearch, "");
    }
    if (props.onChange) {
      props.onChange(event, value);
    }
  };

  const onClickButton = () => {
    onClose();
    if (props.onClickButton) {
      props.onClickButton();
    }
  };
  //render
  const renderStartAdornment = () => {
    if (startAdornment) {
      return startAdornment(field.value);
    }
    return undefined;
  };
  const renderEndAdornment = (params: AutocompleteRenderInputParams) => {
    if (params.InputProps.endAdornment) {
      return params.InputProps.endAdornment;
    }

    return undefined;
  };
  const renderContent = (params: React.HTMLAttributes<HTMLElement>) => {
    if ((loading || startLoading) && open) {
      return (
        <Typography m={2} variant="subtitle1">
          {loadingLabel}
        </Typography>
      );
    } else if (!loading && open && data.length === 0) {
      return (
        <Typography m={2} variant="subtitle1">
          {noResultLabel}
        </Typography>
      );
    }
    return params.children;
  };
  //cretae new state for testing errors
  return (
    <Box component="span" sx={sxContainer}>
      <InputLabel sx={{ mb: 0.5 }}>{label}</InputLabel>
      <Autocomplete
        ref={ref}
        id={`${name}-autocompldete`}
        freeSolo={false}
        fullWidth={fullWidth}
        size={size}
        sx={{ width: { menuWidth } }}
        style={{ margin }}
        options={data}
        value={field.value || ""}
        disabled={disabled || dataFormBlocker.isLoading}
        loading={loading && open}
        getOptionLabel={getOptionLabel}
        renderOption={renderOption}
        isOptionEqualToValue={isOptionEqualToValue}
        filterOptions={(values) => values}
        open={open}
        onOpen={onOpen}
        onChange={onChange}
        popupIcon={popupIcon}
        disableClearable={!field.value}
        blurOnSelect={blurOnSelect}
        PaperComponent={(params) => {
          return (
            <ClickAwayListener
              onClickAway={onClose}
              touchEvent="onTouchStart"
              mouseEvent="onMouseDown"
            >
              <Paper {...params} onClick={onClose}>
                {renderContent(params)}
                <ContainerButton>
                  <Button
                    size="large"
                    variant="text"
                    fullWidth
                    startIcon={startIconButton}
                    onClick={onClickButton}
                  >
                    {labelButton}
                  </Button>
                </ContainerButton>
              </Paper>
            </ClickAwayListener>
          );
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant={variant}
            placeholder={placeholder || ""}
            onChange={onChangeText}
            InputProps={{
              ...params.InputProps,
              startAdornment: renderStartAdornment(),
              endAdornment: renderEndAdornment(params),
            }}
            error={!!fieldState.error?.message}
            helperText={fieldState.error?.message}
            inputProps={{
              ...params.inputProps,
              // ...inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
    </Box>
  );
}

export { CustomAutoComplete };
