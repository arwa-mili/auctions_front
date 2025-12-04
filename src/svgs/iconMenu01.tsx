import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconMenu01 = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        stroke={props.stroke ?? "currentColor"}
        fill={props.fill ?? "none"}
        strokeWidth={props.strokeWidth ?? "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 12h18M3 6h18M3 18h18"
      ></path>
    </SvgIcon>
  );
};
export default IconMenu01;
