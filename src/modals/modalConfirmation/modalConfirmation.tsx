import React from "react";
//material
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grow,
  Stack,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
//Components
import { Button } from "../../commons";
//utils
import { getColorsFromType } from "./modalConfirmation.utils";
//Styles
import { ContainerIcon, Dialog, Row } from "./modalConfirmation.styles";
//Types
import {
  ModalConfirmationProps,
  ModalConfirmationState,
} from "./modalConfirmation.types";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Grow ref={ref} {...props} />;
});

class ModalConfirmation extends React.Component<
  ModalConfirmationProps,
  ModalConfirmationState
> {
  constructor(props: any) {
    super(props);
    this.state = { open: false };
  }
  show = () => {
    this.setState({ open: true });
  };

  hide = () => {
    this.setState({ open: false });
    this.props.onClose?.();
  };
  onClickLeft = () => {
    if (this.props.onClickButtonLeft) {
      this.props.onClickButtonLeft();
      if (this.props.preventCloseButtonLeft) return;
      this.setState({ open: false });
    }
  };
  onClickRight = () => {
    if (this.props.onClickButtonRight) {
      this.props.onClickButtonRight();
      if (this.props.preventCloseButtonRight) return;
      this.setState({ open: false });
    }
  };
  render() {
    const {
      iconButtontype,
      icon,
      message,
      title,
      textButtonLeft,
      textButtonRight,
      onClickButtonLeft,
      onClickButtonRight,
      isLoadingButtonRight,
      isLoadingButtonLeft,
      isDisabledButtonRight,
      isDisabledButtonLeft,
      colorButtonRight,
      colorButtonLeft,
      variantButtonRight,
      variantButtonLeft,
      children,
      sxButtonLeft,
      sxButtonRight,
      sx,
      sxHeader,
      sxContent,
      preventCloseButtonLeft,
      preventCloseButtonRight,
      ...rest
    } = this.props;
    const { background, border } = getColorsFromType(iconButtontype);

    return (
      <Dialog
        {...rest}
        aria-describedby="alert-dialog-slide"
        open={this.state.open}
        TransitionComponent={Transition}
        onClose={this.hide}
        sx={{
          "& .MuiDialog-paper": { borderRadius: 2, p: 2, minWidth: 400 },
          ...sx,
        }}
      >
        <Row alignItems="center" sx={sxHeader}>
          {icon && (
            <ContainerIcon sx={{ background, border: `8px solid ${border}` }}>
              {icon}
            </ContainerIcon>
          )}
          <Stack flex={1}>
            <Row>
              <Stack flex={1}>
                <DialogTitle
                  sx={{ p: 0, flex: 1 }}
                  fontSize={18}
                  fontWeight="600"
                >
                  {title}
                </DialogTitle>

                <DialogContentText id="alert-dialog-slide-description">
                  {message}
                </DialogContentText>
              </Stack>
              {/* <IconButton onClick={this.hide} sx={{ height: "fit-content" }}>
                <Svgs.IconXClose fontSize="small" sx={{ color: "grey.500" }} />
              </IconButton> */}
            </Row>
          </Stack>
        </Row>

        <DialogContent
          sx={{ ...sxContent, fontSize: 14, color: "text.secondary" }}
        >
          {children}
        </DialogContent>
        {(textButtonLeft || textButtonRight) && (
          <DialogActions>
            {textButtonLeft && (
              <Button
                fullWidth
                size="large"
                variant={variantButtonLeft || "outlined"}
                loading={isLoadingButtonLeft}
                disabled={isDisabledButtonLeft}
                color={colorButtonLeft}
                sx={sxButtonLeft}
                onClick={this.onClickLeft.bind(this)}
              >
                {textButtonLeft}
              </Button>
            )}
            {textButtonRight && (
              <Button
                fullWidth
                size="large"
                variant={variantButtonRight || "contained"}
                loading={isLoadingButtonRight}
                disabled={isDisabledButtonRight}
                color={colorButtonRight}
                sx={sxButtonRight}
                onClick={this.onClickRight.bind(this)}
              >
                {textButtonRight}
              </Button>
            )}
          </DialogActions>
        )}
      </Dialog>
    );
  }
}

export { ModalConfirmation };
