import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconViewPayment = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <mask
        id="mask0_9995_51350"
        width="20"
        height="20"
        x="2"
        y="2"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "luminance" }}
      >
        <path fill="#fff" d="M2 2h20v20H2z"></path>
      </mask>
      <g
        stroke={props.stroke ?? "currentColor"}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.1"
        mask="url(#mask0_9995_51350)"
      >
        <path d="M13.172 8.445a1.172 1.172 0 1 0 1.172-1.172 1.172 1.172 0 1 1 1.172-1.171M14.344 3.758V4.93M14.344 9.617v1.211M6.14 20.242H2.587V12.04h2.383c.647 0 1.172.525 1.172 1.172z"></path>
        <path d="m6.14 13.713 2.177-.622a2.34 2.34 0 0 1 1.692.158l4.859 2.43a1.172 1.172 0 1 1-1.048 2.096l-2.9-1.45a1.17 1.17 0 0 0-1.442.32"></path>
        <path d="m15.206 17.52 4.665-1.541a1.17 1.17 0 0 1 1.083.18c.157.114.283.272.365.463a1.17 1.17 0 0 1-.615 1.538l-6.744 2.874a4.68 4.68 0 0 1-3.942-.115L6.14 18.98M19.031 7.273c0 2.59-2.098 4.727-4.687 4.727S9.656 9.862 9.656 7.273a4.688 4.688 0 0 1 9.375 0"></path>
      </g>
    </SvgIcon>
  );
};
export default IconViewPayment;
