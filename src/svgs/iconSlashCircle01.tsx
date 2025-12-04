import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconSlashCircle01 = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        stroke={props.stroke ?? "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.strokeWidth ?? "2"}
        d="M4.93 4.93l14.14 14.14M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
        fill="none"
      ></path>
    </SvgIcon>
  );
};
export default IconSlashCircle01;
