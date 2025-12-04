import { Fade, FormHelperText, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { useDropzone } from "react-dropzone";
import { useController, useFormContext } from "react-hook-form";
//contextAPI
import { useFormBlockerContext } from "../../contextAPI";
//svgs
//components
import Actions from "./actions/actions";
//styles
import { DropzoneWrapper, PlaceholderWrapper } from "./dropzone.styles";
// types
import { DropzoneProps, UploadFile } from "./dropzone.types";
const Dropzone: FC<DropzoneProps> = (props) => {
  const {
    name,
    rules,
    accept = {
      "image/*": [],
    },
    multiple = false,
    children,
    label,
    textUpload,
    iconUpload,
    sxEmpty,
    sx,
    sxDropzone,
    actions,
    sxActions,
    sxActionDelete,
    ...rest
  } = props;
  const dataFormBlocker = useFormBlockerContext();
  const { control, clearErrors, setValue } = useFormContext();
  const { field, fieldState } = useController({ control, name, rules });

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      accept,
      multiple,
      disabled: dataFormBlocker.isLoading,
      ...rest,
      onDrop: (acceptedFiles: Array<UploadFile>) => {
        const newFiles = acceptedFiles.map((file: UploadFile) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
        setValue(name, newFiles[0]);
        clearErrors(name);
      },
    });

  const onClickClear = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setValue(name, null);
  };

  //render
  const renderContent = () => {
    if (typeof field.value === "string") {
      return (
        <img
          alt={field.value}
          src={field.value}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      );
    } else if (field.value) {
      return (
        <img
          alt={field.value?.name}
          src={field.value?.preview}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      );
    } else if (children) {
      return children;
    }
    return (
      <Stack spacing={0.5} alignItems="center" sx={sxEmpty}>
        {iconUpload}
        {typeof textUpload === "string" ? (
          <Typography fontSize={14}>{textUpload}</Typography>
        ) : (
          textUpload
        )}
      </Stack>
    );
  };

  return (
    <Stack gap={0.5} sx={sx}>
      {label && (
        <Typography
          component="div"
          fontSize={14}
          fontWeight="500"
          color="grey.700"
        >
          {label}
        </Typography>
      )}
      <DropzoneWrapper
        {...getRootProps()}
        isDragActive={isDragActive}
        isError={isDragReject || !!fieldState.error?.message}
        sx={sxDropzone}
      >
        <input {...getInputProps()} />
        <PlaceholderWrapper>{renderContent()}</PlaceholderWrapper>

        <Fade in={!!field.value} mountOnEnter unmountOnExit>
          <Actions
            field={field}
            actions={actions}
            sxActions={sxActions}
            sxActionDelete={sxActionDelete}
            onClickClear={onClickClear}
          />
        </Fade>
      </DropzoneWrapper>
      {fieldState.error?.message && (
        <FormHelperText error={fieldState.error?.message !== null}>
          {fieldState.error.message}
        </FormHelperText>
      )}
    </Stack>
  );
};

export { Dropzone };
