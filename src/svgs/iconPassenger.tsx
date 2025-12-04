import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconPassanger = (props: SvgIconProps) => {
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 22 22"
      {...props}
    >
      <mask
        id="mask0_9825_112490"
        style={{ maskType: "luminance" }}
        width="22"
        height="22"
        x="0"
        y="0"
        fill="none"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#fff"
          stroke="#fff"
          strokeWidth="1.8"
          d="M21.1 21.1V.9H.9v20.2h20.2z"
        ></path>
      </mask>
      <g
        stroke="#98A2B3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.8"
        mask="url(#mask0_9825_112490)"
      >
        <path d="M6.774 11.92a10.142 10.142 0 00-5.915 9.22h20.282c0-4.091-2.425-7.617-5.915-9.22"></path>
        <path d="M17.338 7.197a6.338 6.338 0 11-12.676 0 6.338 6.338 0 0112.676 0zM18.17 13.97L11 21.14"></path>
      </g>
    </SvgIcon>
  );
};
export default IconPassanger;
