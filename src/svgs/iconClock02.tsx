import { SvgIcon, SvgIconProps } from "@mui/material";

const IconClock02 = (props: SvgIconProps) => {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      {...props}
      width={props.width ?? "24"}
      height={props.height ?? "24"}
    >
      <path
        fill={props.stroke ?? "currentColor"}
        d="M22.135 7.718a11.03 11.03 0 00-5.853-5.853 11.033 11.033 0 00-8.564 0 11.03 11.03 0 00-5.853 5.853 11.033 11.033 0 000 8.564 11.029 11.029 0 005.853 5.853 11.033 11.033 0 008.564 0 11.03 11.03 0 005.853-5.853 11.033 11.033 0 000-8.564zM12 21c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9z"
      ></path>
      <path
        fill={props.stroke ?? "currentColor"}
        d="M13 11.586V6a1 1 0 10-2 0v6a.999.999 0 00.293.707l3 3a1.001 1.001 0 001.71-.707 1 1 0 00-.296-.707L13 11.586z"
      ></path>
    </SvgIcon>
  );
};

export default IconClock02;
