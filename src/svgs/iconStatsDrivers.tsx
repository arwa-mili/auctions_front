import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconStatsDrivers = (props: SvgIconProps) => {
  return (
    <SvgIcon
      width="49"
      height="48"
      fill="none"
      viewBox="0 0 49 48"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="48" height="48" x="0.2" fill="#F3F7E4" rx="12"></rect>
      <g
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.6"
        clipPath="url(#clip0_11088_69425)"
        fill="none"
      >
        <path
          stroke="#84AB16"
          d="M22.71 24.567v1.538c0 .714.577 1.29 1.29 1.29s1.29-.576 1.29-1.29v-1.538"
        ></path>
        <path stroke="#475467" d="M25.719 34.356H22.28L24 27.394z"></path>
        <path
          stroke="#84AB16"
          d="m22.71 26.106-3.681.734a3.44 3.44 0 0 0-2.763 3.369v4.147h15.468v-4.143a3.43 3.43 0 0 0-2.763-3.369l-3.682-.739M20.563 17.263v4.116a3.437 3.437 0 1 0 6.875 0v-4.116M28.727 15.793c0-1.186-2.114-2.148-4.727-2.148s-4.727.962-4.727 2.148c0 .572.49 1.087 1.29 1.47h6.875c.799-.383 1.289-.899 1.289-1.47"
        ></path>
        <path
          stroke="#84AB16"
          d="M24.86 19.84h-1.72a2.58 2.58 0 0 1-2.578-2.578h6.875a2.577 2.577 0 0 1-2.578 2.579"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_11088_69425">
          <path fill="#fff" d="M13 13h22v22H13z"></path>
        </clipPath>
      </defs>
    </SvgIcon>
  );
};
export default IconStatsDrivers;
