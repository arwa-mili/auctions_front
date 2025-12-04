import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

function IconList(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        stroke={props.stroke ?? "currentColor"}
        fill={props.fill ?? "none"}
        strokeWidth={props.strokeWidth ?? "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12H9m12-6H9m12 12H9m-4-6a1 1 0 11-2 0 1 1 0 012 0zm0-6a1 1 0 11-2 0 1 1 0 012 0zm0 12a1 1 0 11-2 0 1 1 0 012 0z"
      ></path>
    </SvgIcon>
  );
}

export default IconList;
