import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconMinus = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        stroke={props.stroke ?? "currentColor"}
        fill={props.fill ?? "none"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.strokeWidth ?? "2"}
        d="M5 12h14"
      ></path>
    </SvgIcon>
  );
};
export default IconMinus;
