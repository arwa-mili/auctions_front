import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconPrice = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 16 16" fill="none" {...props}>
      <g clipPath="url(#clip0_11798_227584)">
        <path
          fill={props.fill ?? "currentColor"}
          d="M8 0C3.589 0 0 3.589 0 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8m0 14.667A6.674 6.674 0 0 1 1.333 8 6.674 6.674 0 0 1 8 1.333 6.674 6.674 0 0 1 14.667 8 6.674 6.674 0 0 1 8 14.667m-1.333-8c0 .252.18.465.429.506l2.027.338a1.84 1.84 0 0 1 1.544 1.822c0 1.103-.898 2-2 2v1.334H7.333v-1.334c-1.102 0-2-.897-2-2h1.334c0 .368.298.667.666.667h1.334a.667.667 0 0 0 .666-.667.51.51 0 0 0-.429-.506l-2.027-.338a1.84 1.84 0 0 1-1.544-1.822c0-1.103.898-2 2-2V3.333h1.334v1.334c1.102 0 2 .897 2 2H9.333A.667.667 0 0 0 8.667 6H7.333c-.368 0-.666.3-.666.667"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_11798_227584">
          <path fill="#fff" d="M0 0h16v16H0z"></path>
        </clipPath>
      </defs>
    </SvgIcon>
  );
};
export default IconPrice;
