import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconXClose = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        stroke={props.stroke ?? "currentColor"}
        fill={props.fill ?? "none"}
        strokeWidth={props.strokeWidth ?? "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 6L6 18M6 6l12 12"
      ></path>
    </SvgIcon>
  );
};

export default IconXClose;
