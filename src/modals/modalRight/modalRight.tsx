import { Component, forwardRef } from "react";
//Material UI
import { Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
//Styles
import { Dialog } from "./modalRight.styles";
//Types
import { ModalRightProps, ModalRightState } from "./modalRight.types";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return (
    <Slide
      direction={document.body.dir == "rtl" ? "right" : "left"}
      ref={ref}
      {...props}
    />
  );
});

class ModalRight extends Component<ModalRightProps, ModalRightState> {
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
    const { isVisible, children, width, size, sx, onClickClose } = this.props;
    return (
      <Dialog
        width={width}
        size={size}
        open={isVisible || open}
        fullScreen
        TransitionComponent={Transition}
        sx={sx}
        onClose={onClickClose}
      >
        {children}
      </Dialog>
    );
  }
}

export { ModalRight };
