import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconSearchLg = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        stroke={props.stroke ?? "currentColor"}
        fill={props.fill ?? "none"}
        strokeWidth={props.strokeWidth ?? "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-3.5-3.5m2.5-6a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0z"
      ></path>
    </SvgIcon>
  );
};
export default IconSearchLg;
