import { Component, forwardRef } from "react";
//Material UI
import { Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
//Styles
import { Dialog } from "./modalFullScreen.styles";
//Types
import {
  ModalFullScreenProps,
  ModalFullScreenState,
} from "./modalFullScreen.types";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class ModalFullScreen extends Component<
  ModalFullScreenProps,
  ModalFullScreenState
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
  };

  setVisibility = (visibility: boolean) => {
    this.setState({ open: visibility });
  };
  onClickLeft = () => {
    this.hide();
  };
  onClickRight = () => {
    this.hide();
  };
  render() {
    const { open } = this.state;
    const {
      fullScreen = true,
      visible,
      children,
      radius,
      padding,
      height,
      width,
      maxWidth,
      fullWidth,
      sx,
      onClose,
    } = this.props;
    return (
      <Dialog
        sx={sx}
        fullScreen={fullScreen}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={visible || open}
        height={height}
        width={width}
        padding={padding}
        radius={radius}
        onClose={onClose}
        TransitionComponent={Transition}
      >
        {children}
      </Dialog>
    );
  }
}

export { ModalFullScreen };
