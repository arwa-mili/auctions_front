import {
  Autocomplete,
  AutocompleteRenderInputParams,
  Box,
  CircularProgress,
  InputLabel,
  TextField,
} from "@mui/material";
import { useId, useMemo, useState } from "react";
import { useController, useFormContext, useWatch } from "react-hook-form";
//Types
import { useFormBlockerContext } from "../../contextAPI";
import {
  AutocompleteMultipleProps,
  ColorInputProps,
} from "./autocompleteMultiple.types";

function AutocompleteMultiple<T>(
  props: AutocompleteMultipleProps<T>
): JSX.Element {
  const id = useId();
  const {
    name,
    nameSearch,
    label,
    placeholder,
    loading,
    data,
    size = "medium",
    variant = "outlined",
    fullWidth = true,
    disabled,
    rules,
    clearOnBlur,
    popupIcon,
    color,
    blurOnSelect,
    sx,
    slotProps,
    groupBy,
    getOptionLabel,
    isOptionEqualToValue,
    disableClientFiltering,
    renderGroup,
    renderOption,
    renderTags,
    onFocus,
    onBlur,
  } = props;
  const { control, setValue, clearErrors } = useFormContext();
  const { field, fieldState } = useController({ name, control, rules });
  const dataFormBlocker = useFormBlockerContext();

  //state
  const [open, setOpen] = useState<boolean>(false);
  const valueNameSearch = useWatch({ control, name: nameSearch || "" });
  const inputProps = useMemo(
    () => (valueNameSearch ? { value: valueNameSearch } : {}),
    [valueNameSearch]
  );

  //functions
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChangeText = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (nameSearch) {
      setValue(nameSearch, event.target.value);
    }
  };
  const onChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: T[] | null
  ) => {
    field.onChange(event);
    setValue(name, value);
    clearErrors(name);
    if (props.onChange) {
      props.onChange(value);
    }
  };
  //render

  const renderEndAdornment = (params: AutocompleteRenderInputParams) => {
    if (params.InputProps.endAdornment) {
      return params.InputProps.endAdornment;
    }
    if (loading && open) {
      return <CircularProgress color="inherit" size={20} />;
    }
    return undefined;
  };

  const getColor = (): ColorInputProps => {
    if (color) return color;
    if (disabled) return undefined;
    return fieldState.error ? "error" : undefined;
  };

  const InputProps = useMemo(
    () => (variant !== "outlined" ? { disableUnderline: true } : {}),
    [variant]
  );
  return (
    <Box component="span">
      <InputLabel sx={{ mb: 0.5 }}>{label}</InputLabel>
      <Autocomplete
        id={id}
        color={getColor()}
        size={size}
        options={data}
        fullWidth={fullWidth}
        value={field.value ?? []}
        disabled={disabled || dataFormBlocker.isLoading}
        clearOnBlur={clearOnBlur}
        loading={loading && open}
        getOptionLabel={getOptionLabel}
        renderOption={renderOption}
        isOptionEqualToValue={isOptionEqualToValue}
        groupBy={groupBy}
        renderGroup={renderGroup}
        // disable filtering on client
        filterOptions={disableClientFiltering ? (x) => x : undefined}
        onChange={onChange}
        onOpen={onOpen}
        onClose={onClose}
        popupIcon={popupIcon}
        sx={sx}
        slotProps={slotProps}
        onFocus={onFocus}
        onBlur={onBlur}
        multiple
        blurOnSelect={blurOnSelect}
        renderTags={renderTags}
        renderInput={(params) => (
          <TextField
            {...params}
            variant={variant}
            placeholder={placeholder || ""}
            onChange={onChangeText}
            error={!!fieldState.error?.message}
            helperText={fieldState.error?.message}
            InputProps={{
              ...params.InputProps,
              ...InputProps,
              endAdornment: renderEndAdornment(params),
            }}
            inputProps={{
              ...params.inputProps,
              ...inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
    </Box>
  );
}

export { AutocompleteMultiple };
