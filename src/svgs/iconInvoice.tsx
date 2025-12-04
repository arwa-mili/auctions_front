import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconInvoice = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <g
        stroke={props.stroke ?? "currentColor"}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.6"
        clipPath="url(#clip0_8495_42535)"
      >
        <path d="M2.969 19.219c-.86 0-1.563-.703-1.563-1.563V2.344c0-.86.703-1.563 1.563-1.563h12.5c.86 0 1.562.703 1.562 1.563v10.625"></path>
        <path d="M17.031 19.219a1.563 1.563 0 0 0 0-3.125H6.094c-.863 0-1.563.7-1.563 1.562 0 .86-.703 1.563-1.562 1.563zM10.781 3.75h3.125M13.906 6.875h-3.125M10.781 10h3.125M10.781 13.125h3.125M6.094 3.75v1.563M7.656 6.875a1.563 1.563 0 1 0-1.562 1.563A1.562 1.562 0 1 1 4.53 10M6.094 11.563v1.562"></path>
      </g>
      <defs>
        <clipPath id="clip0_8495_42535">
          <path fill="#fff" d="M0 0h20v20H0z"></path>
        </clipPath>
      </defs>
    </SvgIcon>
  );
};
export default IconInvoice;
