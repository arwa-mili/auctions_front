import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconChevronLeftDouble = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        stroke={props.stroke ?? "currentColor"}
        fill={props.fill ?? "none"}
        strokeWidth={props.strokeWidth ?? "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 17l-5-5 5-5m-7 10l-5-5 5-5"
      ></path>
    </SvgIcon>
  );
};
export default IconChevronLeftDouble;
