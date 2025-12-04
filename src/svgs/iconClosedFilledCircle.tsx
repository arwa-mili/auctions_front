import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

function IconCloseFilledCircle(props: SvgIconProps) {
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
        <rect width="32" height="32" fill="#FEE4E2" rx="16"></rect>
        <path
          stroke="#D92D20"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.333"
          d="M20 12l-8 8m0-8l8 8"
        ></path>
      </svg>
    </SvgIcon>
  );
}

export default IconCloseFilledCircle;
