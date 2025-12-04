import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconFlag = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke={props.stroke ?? "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.strokeWidth ?? "1.6"}
        d="M3.334 12.5s.833-.833 3.333-.833 4.167 1.667 6.667 1.667 3.333-.834 3.333-.834V3.334s-.833.833-3.333.833S9.167 2.5 6.667 2.5s-3.333.834-3.333.834m0 15V1.667"
      ></path>
    </SvgIcon>
  );
};
export default IconFlag;
