import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconPayment = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <g
        stroke={props.stroke ?? "currentColor"}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.8"
        clipPath="url(#clip0_8495_42534)"
      >
        <path d="M16.094 16.25c0 .863-.7 1.563-1.563 1.563H2.344c-.863 0-1.563-.7-1.563-1.563V8.438c0-.863.7-1.563 1.563-1.563H14.53c.863 0 1.563.7 1.563 1.563zM16.094 10H.78M9.844 14.688h3.125"></path>
        <path d="M3.906 6.875V3.75c0-.863.7-1.562 1.563-1.562h12.187c.863 0 1.563.7 1.563 1.562v7.813c0 .862-.7 1.562-1.563 1.562h-1.562"></path>
      </g>
      <defs>
        <clipPath id="clip0_8495_42534">
          <path fill="#fff" d="M0 0h20v20H0z"></path>
        </clipPath>
      </defs>
    </SvgIcon>
  );
};
export default IconPayment;
