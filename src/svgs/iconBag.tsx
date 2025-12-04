import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

function IconBag(props: SvgIconProps) {
  return (
    <SvgIcon
      viewBox="0 0 20 20"
      width={props.width ?? "20"}
      height={props.height ?? "20"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_7782_96047)">
        <path
          d="M18.4272 5.38184H1.57268C1.1604 5.38184 0.826172 5.71606 0.826172 6.12835V17.4094C0.826172 17.8217 1.1604 18.1559 1.57268 18.1559H18.4272C18.8395 18.1559 19.1737 17.8217 19.1737 17.4094V6.12835C19.1737 5.71606 18.8395 5.38184 18.4272 5.38184Z"
          stroke={props.stroke ?? "currentColor"}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M13.8177 1.84277H6.18213V5.38209H13.8177V1.84277Z"
          stroke={props.stroke ?? "currentColor"}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M11.725 9.86816H8.27515V13.8037H11.725V9.86816Z"
          stroke={props.stroke ?? "currentColor"}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M19.1864 8.69824C19.1864 10.5407 18.2177 12.0342 15.8989 12.0342H12.4409"
          stroke={props.stroke ?? "currentColor"}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M0.813721 8.69824C0.813721 10.5407 1.78235 12.0342 4.10122 12.0342H7.55917"
          stroke={props.stroke ?? "currentColor"}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
      <defs>
        <clipPath id="clip0_7782_96047">
          <rect
            width="20"
            height="17.9407"
            fill="white"
            transform="translate(0 1.0293)"
          />
        </clipPath>
      </defs>
    </SvgIcon>
  );
}

export default IconBag;
