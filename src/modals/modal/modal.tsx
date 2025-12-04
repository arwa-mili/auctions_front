import React, { Component, forwardRef } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Slide,
  Typography,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
//
import { IconButton } from "../../commons";
//styles
import { DialogHeader, DialogHeaderLeft } from "./modal.styles";
//types
import { Svgs } from "../../svgs";
import { ModalProps, ModalState } from "./modal.types";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class Modal extends Component<ModalProps, ModalState> {
  constructor(props: any) {
    super(props);
    this.state = { open: false };
  }
  show = () => {
    this.setState({ open: true });
  };

  hide = () => {
    this.setState({ open: false });
    if (this.props.onClose) {
      this.props.onClose();
    }
  };
  onClickLeft = () => {
    this.hide();
    if (this.props.onClickButtonLeft) {
      this.props.onClickButtonLeft();
    }
  };
  onClickRight = () => {
    this.hide();
    if (this.props.onClickButtonRight) {
      this.props.onClickButtonRight();
    }
  };
  renderTitle = () => {
    const { title } = this.props;
    if (!title) return null;
    if (typeof title === "string") {
      return (
        <Typography fontSize={18} fontWeight="600" color="grey.900">
          {title}
        </Typography>
      );
    }
    return title;
  };
  renderDescription = () => {
    const { description } = this.props;
    if (!description) return null;
    if (typeof description === "string") {
      return (
        <Typography fontSize={14} color="grey.500">
          {description}
        </Typography>
      );
    }
    return description;
  };

  render() {
    const { open } = this.state;
    const {
      visible,
      fullScreen,
      fullWidth,
      maxWidth,
      textButtonLeft,
      textButtonRight,
      children,
      sx,
    } = this.props;

    return (
      <Dialog
        open={visible || open}
        maxWidth={maxWidth}
        fullScreen={fullScreen}
        fullWidth={fullWidth}
        onClose={this.hide}
        sx={sx}
        aria-labelledby="Modal"
        aria-describedby="Modal-dialog"
        TransitionComponent={Transition}
      >
        <DialogHeader id="dialog-title">
          <DialogHeaderLeft>
            {this.renderTitle()}
            {this.renderDescription()}
          </DialogHeaderLeft>
          <IconButton size="small" height={36} onClick={this.hide}>
            <Svgs.IconXClose fontSize="medium" />
          </IconButton>
        </DialogHeader>

        <DialogContent dividers>{children}</DialogContent>
        {(textButtonLeft || textButtonRight) && (
          <DialogActions>
            {textButtonLeft && (
              <Button variant="outlined" onClick={this.onClickLeft}>
                {textButtonLeft}
              </Button>
            )}
            {textButtonRight && (
              <Button variant="contained" onClick={this.onClickRight}>
                {textButtonRight}
              </Button>
            )}
          </DialogActions>
        )}
      </Dialog>
    );
  }
}

export { Modal };
