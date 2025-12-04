import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconHome = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        stroke={props.stroke ?? "currentColor"}
        strokeWidth={props.strokeWidth ?? "1.5"}
        fill={props.fill ?? "none"}
        d="M4.25 11.5a2 2 0 0 1 .8-1.6l6-4.5a2 2 0 0 1 2.4 0l6 4.5a2 2 0 0 1 .8 1.6v6a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3z"
      ></path>
    </SvgIcon>
  );
};
export default IconHome;
