import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconMove = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        d="M5 9L2 12M2 12L5 15M2 12H22M9 5L12 2M12 2L15 5M12 2V22M15 19L12 22M12 22L9 19M19 9L22 12M22 12L19 15"
        stroke={props.stroke ?? "currentColor"}
        fill={props.fill ?? "none"}
        strokeWidth={props.strokeWidth ?? "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};
export default IconMove;
