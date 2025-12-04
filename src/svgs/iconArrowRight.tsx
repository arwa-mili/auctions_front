import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

function IconArrowRigth(props: SvgIconProps) {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 12H20M20 12L14 6M20 12L14 18"
        stroke={props.stroke ?? "currentColor"}
        strokeWidth={props.strokeWidth ?? "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
}

export default IconArrowRigth;
