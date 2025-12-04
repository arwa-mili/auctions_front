import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconPosition = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        stroke={props.stroke ?? "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        strokeWidth="2"
        d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
      ></path>
      <path
        stroke={props.stroke ?? "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        fill="none"
        d="M12 22c4-4 8-7.582 8-12a8 8 0 1 0-16 0c0 4.418 4 8 8 12"
      ></path>
    </SvgIcon>
  );
};
export default IconPosition;
