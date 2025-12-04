import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconSwitchHorizontal = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        d="M4 17H20M20 17L16 13M20 17L16 21M20 7H4M4 7L8 3M4 7L8 11"
        stroke={props.stroke ?? "currentColor"}
        fill={props.fill ?? "none"}
        strokeWidth={props.strokeWidth ?? "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};
export default IconSwitchHorizontal;
