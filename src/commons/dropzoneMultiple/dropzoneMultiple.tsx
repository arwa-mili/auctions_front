import { FC } from "react";
//
import {
  FormHelperText,
  Grid,
  Grow,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useDropzone } from "react-dropzone";
import { useController, useFormContext } from "react-hook-form";
// components
import { Avatar } from "../avatar/avatar";
// svg
import { Svgs } from "../../svgs";
//styles
import {
  DropzoneWrapper,
  FileContainer,
  Placeholder,
  RemoveIcon,
  RootWrapper,
} from "./dropzoneMultiple.styles";
// types
import { useFormBlockerContext } from "../../contextAPI";
import { DropzoneMultipleProps, UploadFile } from "./dropzoneMultiple.types";

const DropzoneMultiple: FC<DropzoneMultipleProps> = (props) => {
  const {
    name,
    label,
    rules,
    textUpload,
    sx,
    accept = {
      "image/*": [],
    },
    ...rest
  } = props;
  const { control, clearErrors } = useFormContext();
  const { field, fieldState } = useController({ control, name, rules });
  const theme = useTheme();
  const dataFormBlocker = useFormBlockerContext();

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      accept,
      multiple: true,
      disabled: dataFormBlocker.isLoading,
      ...rest,
      onDrop: (acceptedFiles: Array<UploadFile>) => {
        const newFiles = acceptedFiles.map((file: UploadFile) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
        const prev = field.value ?? [];
        field.onChange([...prev, ...newFiles]);
        clearErrors(name);
      },
    });

  const onRemoveFile = (index: number) => (event: any) => {
    event.stopPropagation();
    const value: Array<any> = field.value;
    const filtered = value?.filter((_, iterator) => iterator !== index);
    field.onChange(filtered);
  };

  const renderImage = (item: UploadFile | string) => {
    if (typeof item === "object") {
      if (item.type.includes("image")) {
        return (
          <Avatar
            alt="image"
            src={item.preview}
            width="100%"
            height="100%"
            radius={8}
            objectFit="cover"
            border={`1px solid ${theme.palette.divider}`}
          />
        );
      }
      return (
        <FileContainer>
          <Svgs.IconCamera02 />
        </FileContainer>
      );
    } else if (typeof item === "string" && item?.includes(".pdf")) {
      return (
        <FileContainer>
          <Svgs.IconCamera02 />
        </FileContainer>
      );
    }
    return (
      <Avatar
        alt="image"
        src={item}
        width="100%"
        height="100%"
        radius={8}
        objectFit="cover"
        border={`1px solid ${theme.palette.divider}`}
      />
    );
  };

  const renderUploadFiles = () => {
    return field.value?.map((item: UploadFile | string, index: number) => {
      const name = typeof item === "string" ? item : item.name;
      return (
        <Grid item key={index + name} md={6} overflow="hidden">
          <Stack position="relative" height={190}>
            <RemoveIcon size="extra-small" onClick={onRemoveFile(index)}>
              <Svgs.IconXClose sx={{ width: 15 }} />
            </RemoveIcon>
            {renderImage(item)}
          </Stack>
          <Typography
            title={name}
            variant="caption"
            overflow="hidden"
            textOverflow="ellipsis"
            display="-webkit-box"
            sx={{ WebkitLineClamp: "1", WebkitBoxOrient: "vertical" }}
          >
            {name}
          </Typography>
        </Grid>
      );
    });
  };

  return (
    <Stack gap={1} sx={sx}>
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
      <RootWrapper isError={isDragReject}>
        <DropzoneWrapper {...getRootProps()} isDragActive={isDragActive}>
          <input {...getInputProps()} />

          <Placeholder>
            <Avatar
              alt="icon"
              sx={{
                backgroundColor: (theme) => theme.palette.grey[100],
                border: (theme) => `6px solid ${theme.palette.grey[50]}`,
              }}
            >
              <Svgs.IconUploadCloud02
                sx={{
                  fontSize: 20,
                  color: (theme) => theme.palette.grey[600],
                }}
              />
            </Avatar>

            <Typography
              color="grey.600"
              fontWeight={400}
              fontSize={14}
              textAlign="center"
            >
              {textUpload}
            </Typography>
          </Placeholder>
        </DropzoneWrapper>
      </RootWrapper>
      {fieldState.error?.message && (
        <FormHelperText error={!!fieldState.error}>
          {fieldState.error?.message}
        </FormHelperText>
      )}
      <Grow in={field.value?.length > 0} mountOnEnter unmountOnExit>
        <Grid container spacing={1}>
          {renderUploadFiles()}
        </Grid>
      </Grow>
    </Stack>
  );
};

export { DropzoneMultiple };
