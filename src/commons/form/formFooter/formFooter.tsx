import { FC, useMemo } from "react";
import { useTheme } from "@mui/material";
//components
import { Button } from "../../../commons";
//styles
import { Container } from "./formFooter.styles";
//types
import { FormFooterProps } from "./formFooter.types";

const FormFooter: FC<FormFooterProps> = (props) => {
  //props
  const {
    hide,
    minWidth = 164,
    textButtonLeft,
    textButtonRight,
    isLoadingButtonLeft,
    isLoadingButtonRight,
    isDisabledButtonLeft,
    isDisabledButtonRight,
    colorButtonLeft,
    colorButtonRight,
    variantButtonLeft,
    variantButtonRight,
    startIconButtonLeft,
    startIconButtonRight,
    sx,
    sxButtonLeft,
    sxButtonRight,
    onClickButtonLeft,
    onClickButtonRight,
  } = props;
  const theme = useTheme();
  const styleButtonLeft = useMemo(
    () =>
      colorButtonLeft
        ? {}
        : {
            color: theme.palette.grey[700],
            "&:hover": { borderColor: theme.palette.divider },
          },
    [colorButtonLeft]
  );
  //render
  if (hide) return null;

  return (
    <Container sx={sx}>
      {textButtonLeft && (
        <Button
          size="large"
          variant={variantButtonLeft || "outlined"}
          onClick={onClickButtonLeft}
          loading={isLoadingButtonLeft}
          disabled={isDisabledButtonLeft}
          color={colorButtonLeft}
          startIcon={startIconButtonLeft}
          sx={{
            minWidth,
            borderColor: theme.palette.divider,
            ...styleButtonLeft,
            ...sxButtonLeft,
          }}
        >
          {textButtonLeft}
        </Button>
      )}
      {textButtonRight && (
        <Button
          type="submit"
          disableElevation
          size="large"
          sx={{ minWidth, ...sxButtonRight }}
          variant={variantButtonRight || "contained"}
          onClick={onClickButtonRight}
          loading={isLoadingButtonRight}
          disabled={isDisabledButtonRight}
          color={colorButtonRight}
          startIcon={startIconButtonRight}
        >
          {textButtonRight}
        </Button>
      )}
    </Container>
  );
};

export { FormFooter };
