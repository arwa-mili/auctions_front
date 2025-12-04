import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconReverseRight = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        stroke={props.stroke ?? "currentColor"}
        fill={props.fill ?? "none"}
        strokeWidth={props.strokeWidth ?? "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 7H10a6 6 0 100 12h10m0-12l-4-4m4 4l-4 4"
      ></path>
    </SvgIcon>
  );
};
export default IconReverseRight;
