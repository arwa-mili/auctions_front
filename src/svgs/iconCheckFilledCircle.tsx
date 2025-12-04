import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

function IconCheckFilledCircle(props: SvgIconProps) {
  return (
    <SvgIcon
      viewBox="0 0 32 32"
      width={props.width ?? "24"}
      height={props.height ?? "24"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width}
        height={props.height}
        fill="none"
        viewBox="0 0 32 32"
      >
        <rect
          width="32"
          height="32"
          fill={props.fill ?? "#039855"}
          rx="16"
        ></rect>
        <path
          stroke={props.stroke ?? "#D1FADF"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.333"
          d="M21.333 12L14 19.333 10.666 16"
        ></path>
      </svg>
    </SvgIcon>
  );
}

export default IconCheckFilledCircle;
