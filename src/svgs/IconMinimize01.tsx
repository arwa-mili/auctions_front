import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

function IconMinimize01(props: SvgIconProps) {
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
        d="M3.333 11.667h5m0 0v5m0-5L2.5 17.5m14.167-9.167h-5m0 0v-5m0 5L17.5 2.5"
      ></path>
    </SvgIcon>
  );
}

export default IconMinimize01;
