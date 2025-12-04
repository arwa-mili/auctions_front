import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconChevronRightDouble = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        stroke={props.stroke ?? "currentColor"}
        fill={props.fill ?? "none"}
        strokeWidth={props.strokeWidth ?? "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 17l5-5-5-5m7 10l5-5-5-5"
      ></path>
    </SvgIcon>
  );
};
export default IconChevronRightDouble;
