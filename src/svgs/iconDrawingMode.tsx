import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

function IconDrawingMode(props: SvgIconProps) {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 9C16 5.13401 12.866 2 9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16"
        stroke={props.stroke ?? "currentColor"}
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        d="M22 20C22 21.1046 21.1046 22 20 22H11C9.89543 22 9 21.1046 9 20V11C9 9.89543 9.89543 9 11 9H20C21.1046 9 22 9.89543 22 11V20Z"
        stroke={props.stroke ?? "currentColor"}
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
}

export default IconDrawingMode;
