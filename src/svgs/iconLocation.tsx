import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

function IconLocation(props: SvgIconProps) {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      fill="none"
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill={props.fill ?? "currentColor"}
        fillRule="evenodd"
        clipPath="url(#clip0_3178_2015)"
        clipRule="evenodd"
      >
        <path d="M12 5.759L7.504 3.136a1 1 0 00-1.008 0l-6 3.5A1 1 0 000 7.5V23a1 1 0 001.504.864L7 20.658l5.496 3.206a1 1 0 00.951.03l7-3.5A1 1 0 0021 19.5V16h-2v2.882l-5 2.5V16h-2v5.259l-4-2.333V5.74l4 2.333V5.76zm-6-.018L2 8.074V21.26l4-2.333V5.74z"></path>
        <path d="M19 14s5-6.2 5-9-2.2-5-5-5-5 2.2-5 5 5 9 5 9zm2-9a2 2 0 11-4 0 2 2 0 014 0z"></path>
      </g>
      <defs>
        <clipPath id="clip0_3178_2015">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </SvgIcon>
  );
}

export default IconLocation;
