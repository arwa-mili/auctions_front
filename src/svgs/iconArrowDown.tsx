import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

function IconArrowDown(props: SvgIconProps) {
  return (
    <SvgIcon
      viewBox="0 0 8 21"
      width={props.width ?? "8"}
      height={props.height ?? "21"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        stroke={props.stroke ?? "currentColor"}
        fill={props.fill ?? "none"}
        strokeWidth={props.strokeWidth ?? 1}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.25 1.00033L4.25 19.667M4.25 19.667L7.5 16.417M4.25 19.667L1 16.417"
      />
    </SvgIcon>
  );
}

export default IconArrowDown;
