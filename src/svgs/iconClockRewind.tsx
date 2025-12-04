import { SvgIcon, SvgIconProps } from "@mui/material";

const IconClockRewind = (props: SvgIconProps) => {
  return (
    <SvgIcon
      viewBox="0 0 16 16"
      {...props}
      width={props.width ?? "16"}
      height={props.height ?? "16"}
    >
      <g clipPath="url(#clip0_11440_14378)">
        <g
          fill={props.fill ?? "currentColor"}
          clipPath="url(#clip1_11440_14378)"
        >
          <path d="M7.273 15.272a7.273 7.273 0 0 1 0-14.545.727.727 0 1 1 0 1.454A5.818 5.818 0 1 0 13.09 8a.727.727 0 0 1 1.454 0 7.28 7.28 0 0 1-7.272 7.273"></path>
          <path d="M15.273 10.544a.73.73 0 0 1-.569-.273l-1.037-1.297-1.627 1.084a.728.728 0 1 1-.807-1.21l2.182-1.454a.73.73 0 0 1 .971.15l1.455 1.819a.727.727 0 0 1-.568 1.181M4.364 10.907a.727.727 0 0 1-.436-1.31l2.618-1.963V5.089a.727.727 0 1 1 1.454 0v2.909a.73.73 0 0 1-.291.581l-2.91 2.182a.72.72 0 0 1-.435.146M13.092 5.728a.73.73 0 0 1-.647-.393 5.82 5.82 0 0 0-3.266-2.83.727.727 0 0 1 .479-1.373 7.27 7.27 0 0 1 4.079 3.534.728.728 0 0 1-.645 1.062"></path>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_11440_14378">
          <path fill="#fff" d="M0 0h16v16H0z"></path>
        </clipPath>
        <clipPath id="clip1_11440_14378">
          <path fill="#fff" d="M0 0h16v16H0z"></path>
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

export default IconClockRewind;
