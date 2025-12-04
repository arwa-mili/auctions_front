import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconExpand01 = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        stroke={props.stroke ?? "currentColor"}
        fill={props.fill ?? "none"}
        strokeWidth={props.strokeWidth ?? "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 10l7-7m0 0h-6m6 0v6m-11 5l-7 7m0 0h6m-6 0v-6"
      ></path>
    </SvgIcon>
  );
};
export default IconExpand01;
