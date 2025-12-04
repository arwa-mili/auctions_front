import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

function IconMaximize01(props: SvgIconProps) {
  return (
    <SvgIcon
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        stroke={props.stroke ?? "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.667"
        d="M11.667 8.333 17.5 2.5m0 0h-5m5 0v5m-9.167 4.167L2.5 17.5m0 0h5m-5 0v-5"
      ></path>
    </SvgIcon>
  );
}

export default IconMaximize01;
