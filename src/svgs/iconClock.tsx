import { SvgIcon, SvgIconProps } from "@mui/material";

const IconClock = (props: SvgIconProps) => {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      {...props}
      width={props.width ?? "24"}
      height={props.height ?? "24"}
    >
      <path
        stroke={props.stroke ?? "currentColor"}
        fill={props.fill ?? "none"}
        strokeWidth={props.strokeWidth ?? 2}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
      />
    </SvgIcon>
  );
};

export default IconClock;
