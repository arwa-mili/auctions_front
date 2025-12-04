import { Divider, FormHelperText, Stack, Typography } from "@mui/material";
import { createRef, FC, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useController, useFormContext } from "react-hook-form";
import SignatureCanvas from "react-signature-canvas";
// components & svgs
import { Avatar, FormFooter, UploadFile } from "../../commons";
import { ModalConfirmation } from "../../modals";
import { Svgs } from "../../svgs";
// styles
import {
  Button,
  CardFooter,
  Container,
  Content,
  IconButton,
  Mask,
} from "./cardSignature.styles";
// types
import { CardSignatureProps } from "./cardSignature.types";

const CardSignature: FC<CardSignatureProps> = (props) => {
  const {
    name,
    label,
    width,
    height,
    textUpload,
    textSign,
    sx,
    children,
    titleSign,
    textButtonReset,
    textButtonConfirm,
    rules,
  } = props;
  const refSignatureCanvas = useRef<SignatureCanvas>(null);
  const refContract = createRef<ModalConfirmation>();

  const { setValue } = useFormContext();
  const { field, fieldState } = useController({ name, rules });
  const [isEmpty, setIsEmpty] = useState<boolean>(true);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles: Array<UploadFile>) => {
      const newFiles = acceptedFiles.map((file: UploadFile) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      setValue(name, newFiles[0]);
    },
  });

  const onClickClear = () => {
    setValue(name, null);
  };
  const onClickSign = () => {
    refContract.current?.show();
  };
  const onConfirm = async () => {
    if (isEmpty) return;
    refContract.current?.hide();
    const signature = refSignatureCanvas.current
      ?.getTrimmedCanvas()
      .toDataURL("image/png");
    if (!signature) return;
    setValue(name, { base64: signature, name: "signature" });
  };
  const onEnd = () => {
    setIsEmpty(false);
  };
  const onClickReset = () => {
    refSignatureCanvas.current?.clear();
    setIsEmpty(true);
  };

  //render
  const renderContent = () => {
    if (typeof field.value === "string") {
      return (
        <Avatar
          variant="square"
          alt="signature"
          src={field.value}
          width={width}
          height={height - 50}
        />
      );
    } else if (field.value) {
      const src = field.value.hasOwnProperty("base64")
        ? field.value.base64
        : field.value?.preview;
      return (
        <Avatar
          variant="square"
          alt={field.value?.name}
          src={src}
          width={width}
          height={height - 50}
        />
      );
    }
    return children;
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
      <Container width={width} height={height}>
        <Content>
          {renderContent()}
          {field.value && (
            <Mask className="mask">
              <IconButton size="extra-small" onClick={onClickClear}>
                <Svgs.IconTrash01 sx={{ color: "white", fontSize: 16 }} />
              </IconButton>
            </Mask>
          )}
        </Content>

        <CardFooter
          direction="row"
          divider={<Divider flexItem orientation="vertical" />}
        >
          <Button {...getRootProps()}>
            <input {...getInputProps()} />
            <Svgs.IconUpload01 fontSize="small" />
            {textUpload}
          </Button>
          <Button onClick={onClickSign}>
            <Svgs.IconEdit05 fontSize="small" />
            {textSign}
          </Button>
        </CardFooter>
      </Container>
      <ModalConfirmation
        ref={refContract}
        title={titleSign}
        sx={{
          "& .MuiDialog-paper": { p: 0 },
        }}
        sxHeader={{ p: 2 }}
        sxContent={{ p: 0 }}
      >
        <Stack>
          <SignatureCanvas
            ref={refSignatureCanvas}
            penColor="black"
            canvasProps={{
              width: width,
              height: height,
              className: "sigCanvas",
            }}
            onEnd={onEnd}
          />
          <FormFooter
            textButtonLeft={textButtonReset}
            textButtonRight={textButtonConfirm}
            isDisabledButtonRight={isEmpty}
            onClickButtonRight={onConfirm}
            onClickButtonLeft={onClickReset}
          />
        </Stack>
      </ModalConfirmation>
      {fieldState.error?.message && (
        <FormHelperText error={fieldState.error?.message !== null}>
          {fieldState.error.message}
        </FormHelperText>
      )}
    </Stack>
  );
};

export { CardSignature };
