import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconPdf = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <mask
        id="mask0_10004_55098"
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.2"
        mask="url(#mask0_10004_55098)"
        fill="none"
      >
        <path d="M15.125 2.586H6.141c-.648 0-1.172.525-1.172 1.172v16.484c0 .647.524 1.172 1.172 1.172h11.718c.648 0 1.172-.525 1.172-1.172V6.492z"></path>
        <path d="M15.125 2.586v3.906h3.906zM12 11.803l-1.893 3.278h3.786zM12 11.803l.874-1.513a1.009 1.009 0 1 0-1.747 0zM13.893 15.081l.873 1.513a1.009 1.009 0 1 0 .874-1.513zM10.107 15.081l-.874 1.513a1.009 1.009 0 1 1-.873-1.513z"></path>
      </g>
    </SvgIcon>
  );
};
export default IconPdf;
