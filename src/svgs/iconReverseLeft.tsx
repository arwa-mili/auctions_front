import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconReverseLeft = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        stroke={props.stroke ?? "currentColor"}
        fill={props.fill ?? "none"}
        strokeWidth={props.strokeWidth ?? "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 7h10a6 6 0 010 12H4M4 7l4-4M4 7l4 4"
      ></path>
    </SvgIcon>
  );
};
export default IconReverseLeft;
