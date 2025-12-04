import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconPauseCircle = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        stroke={props.stroke ?? "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.strokeWidth ?? "2"}
        d="M9.5 15V9m5 6V9m7.5 3c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
        fill="none"
      ></path>
    </SvgIcon>
  );
};
export default IconPauseCircle;
