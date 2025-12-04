import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

function IconDollar01(props: SvgIconProps) {
  return (
    <SvgIcon
      viewBox="0 0 21 20"
      fill="none"
      width="21"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_11724_71532)">
        <path
          stroke={props.stroke ?? "currentColor"}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeWidth="1.3"
          d="M10 13.75a3.75 3.75 0 1 0 7.5 0 3.75 3.75 0 0 0-7.5 0m0 0c0-.844.28-1.624.75-2.25V4.75m-.75 9c0 .619.15 1.203.416 1.718-.632.533-2.092.907-3.791.907-2.278 0-4.125-.672-4.125-1.5V4.75m8.25 0c0 .828-1.847 1.5-4.125 1.5S2.5 5.578 2.5 4.75m8.25 0c0-.828-1.847-1.5-4.125-1.5S2.5 3.922 2.5 4.75m0 6.75c0 .828 1.847 1.5 4.125 1.5 1.642 0 3.06-.349 3.723-.854m.402-4.021c0 .828-1.847 1.5-4.125 1.5S2.5 8.953 2.5 8.125"
        ></path>
        <path
          fill={props.stroke ?? "currentColor"}
          d="M15.104 14.229a1.07 1.07 0 0 0-1.034-.781.504.504 0 1 1 0-1.008c.279 0 .506.227.506.505 0 .156.127.284.284.284a.285.285 0 0 0 .284-.284c0-.48-.318-.903-.781-1.033v-.128a.285.285 0 0 0-.284-.284.285.285 0 0 0-.284.284v.122a1.072 1.072 0 0 0 .275 2.107.504.504 0 1 1-.502.505.285.285 0 0 0-.284-.284.285.285 0 0 0-.284.284c.003.486.326.909.795 1.036v.247c0 .157.128.284.284.284a.285.285 0 0 0 .284-.284v-.25c.57-.161.903-.752.74-1.322"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_11724_71532">
          <path fill="#fff" d="M.5 0h20v20H.5z"></path>
        </clipPath>
      </defs>
    </SvgIcon>
  );
}

export default IconDollar01;
