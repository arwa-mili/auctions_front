import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

function IconContact(props: SvgIconProps) {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_7367_119276)">
        <ellipse
          cx="8.00402"
          cy="7.4401"
          rx="4.04211"
          ry="3.84"
          stroke={props.stroke ?? "currentColor"}
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M15.4149 22.8001V19.1201C15.4149 16.911 13.6241 15.1201 11.4149 15.1201H5.2002C2.99106 15.1201 1.2002 16.911 1.2002 19.1201V22.8001"
          stroke={props.stroke ?? "currentColor"}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M16.5596 4.87988L22.9596 4.87988"
          stroke={props.stroke ?? "currentColor"}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M16.5596 8.71997L22.9596 8.71997"
          stroke={props.stroke ?? "currentColor"}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M16.5596 12.5598L20.3996 12.5598"
          stroke={props.stroke ?? "currentColor"}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_7367_119276">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
}

export default IconContact;
