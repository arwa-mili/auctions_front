import { FC, forwardRef, memo } from "react";
import { Dialog, Stack, Grow } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
//types
import { DialogFullScreenProps } from "./dialogFullScreen.types";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Grow ref={ref} {...props} />;
});

const DialogFullScreen: FC<DialogFullScreenProps> = memo(props => {
  const { children, fullScreen, p, onClose } = props;
  //render
  if (fullScreen) {
    return (
      <Dialog fullScreen open onClose={onClose} TransitionComponent={Transition}>
        <Stack p={p}>{children}</Stack>
      </Dialog>
    );
  }
  return children;
});
export { DialogFullScreen };
