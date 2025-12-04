import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconFilter = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 20 20" {...props}>
      <g
        stroke={props.stroke ?? "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth={props.strokeWidth ?? "1.6"}
        fill="none"
        clipPath="url(#clip0_10976_134592)"
      >
        <path d="M.781 3.75h3.125M11.719 3.75h7.5M.781 10H11.72M16.406 10h2.813M.781 16.25h3.125M8.594 16.25h10.625M7.031 5.313H5.47a1.563 1.563 0 0 1 0-3.125H7.03a1.563 1.563 0 0 1 0 3.125M7.031 17.813H5.47a1.563 1.563 0 0 1 0-3.125H7.03a1.563 1.563 0 0 1 0 3.124M14.844 11.563H13.28a1.562 1.562 0 0 1 0-3.126h1.563a1.562 1.562 0 0 1 0 3.126"></path>
      </g>
      <defs>
        <clipPath id="clip0_10976_134592">
          <path fill="#fff" d="M0 0h20v20H0z"></path>
        </clipPath>
      </defs>
    </SvgIcon>
  );
};
export default IconFilter;
