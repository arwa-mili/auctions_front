import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconChevronRight = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        stroke={props.stroke ?? "currentColor"}
        fill={"none"}
        strokeWidth={props.strokeWidth ?? "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 18l6-6-6-6"
      ></path>
    </SvgIcon>
  );
};
export default IconChevronRight;
