import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconDataTransfer = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        stroke={props.stroke ?? "currentColor"}
        strokeWidth={props.strokeWidth ?? "1.5"}
        fill={props.fill ?? "none"}
        d="M19 9H6.659c-1.006 0-1.51 0-1.634-.309-.125-.308.23-.672.941-1.398L8.211 5M5 15h12.341c1.006 0 1.51 0 1.634.309.125.308-.23.672-.941 1.398L15.789 19"
      ></path>
    </SvgIcon>
  );
};
export default IconDataTransfer;
