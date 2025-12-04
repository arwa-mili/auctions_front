import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconSun = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        stroke={props.stroke ?? "currentColor"}
        fill={props.fill ?? "none"}
        strokeWidth={props.strokeWidth ?? "2"}
        strokeLinecap="round"
        d="M12 4v1m0 14v1m5.657-13.657-.707.707m-9.9 9.9-.707.707M20 12h-1M5 12H4m13.657 5.657-.707-.707m-9.9-9.9-.707-.707M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
      ></path>
    </SvgIcon>
  );
};
export default IconSun;
