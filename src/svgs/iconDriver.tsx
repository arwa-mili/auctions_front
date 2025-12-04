import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

function IconDriver(props: SvgIconProps) {
  return (
    <SvgIcon
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.6"
        clipPath="url(#clip0_9929_58085)"
        fill="none"
      >
        <path
          stroke="#84AB16"
          d="M10.71 13.067v1.539c0 .713.577 1.289 1.29 1.289s1.29-.576 1.29-1.29v-1.538"
        ></path>
        <path stroke="#84AB16" d="M13.719 22.856H10.28L12 15.894z"></path>
        <path
          stroke="#84AB16"
          d="m10.71 14.606-3.681.734a3.44 3.44 0 0 0-2.763 3.369v4.147h15.468v-4.143a3.43 3.43 0 0 0-2.763-3.369l-3.682-.739M8.563 5.763v4.116a3.437 3.437 0 1 0 6.875 0V5.763"
        ></path>
        <path
          stroke="#fff"
          d="M16.727 4.293c0-1.186-2.114-2.148-4.727-2.148s-4.727.962-4.727 2.148c0 .571.49 1.087 1.29 1.47h6.874c.8-.383 1.29-.899 1.29-1.47M12.86 8.34h-1.72a2.58 2.58 0 0 1-2.578-2.577h6.876a2.577 2.577 0 0 1-2.579 2.578"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_9929_58085">
          <path fill="#fff" d="M1 1.5h22v22H1z"></path>
        </clipPath>
      </defs>
    </SvgIcon>
  );
}

export default IconDriver;
