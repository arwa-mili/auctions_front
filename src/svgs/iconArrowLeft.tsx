import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

function IconArrowLeft(props: SvgIconProps) {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        stroke={props.stroke ?? "currentColor"}
        fill={props.fill ?? "none"}
        strokeWidth={props.strokeWidth ?? "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 12H5m0 0 7 7m-7-7 7-7"
      ></path>
    </SvgIcon>
  );
}

export default IconArrowLeft;
