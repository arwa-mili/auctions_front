import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconRefreshCw05 = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        stroke={props.stroke ?? "currentColor"}
        fill={props.fill ?? "none"}
        strokeWidth={props.strokeWidth ?? "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.453 12.893A8.5 8.5 0 014.638 16.25l-.25-.433m-.842-4.71A8.5 8.5 0 0119.361 7.75l.25.433M3.493 18.066l.732-2.732 2.732.732m10.085-8.132l2.732.732.732-2.732"
      ></path>
    </SvgIcon>
  );
};
export default IconRefreshCw05;
