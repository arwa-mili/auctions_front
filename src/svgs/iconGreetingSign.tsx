import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconGreetingSign = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <mask
        id="mask0_9759_23230"
        width="24"
        height="24"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "luminance" }}
      >
        <path fill="#fff" d="M0 0h24v24H0z"></path>
      </mask>
      <g
        stroke={props.stroke ?? "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.2"
        mask="url(#mask0_9759_23230)"
        fill="none"
      >
        <path d="M13.417 11.553v.898a2.675 2.675 0 0 1-2.663 2.675h-.01a2.677 2.677 0 0 1-2.676-2.677v-.854c0-1.482 1.186-2.713 2.667-2.717a2.67 2.67 0 0 1 1.9.783c.483.484.782 1.153.782 1.892M13.976 23.297v-3.844M3.516 10.463v1.65a.002.002 0 0 1-.003.003H.705l-.002-.002v-1.62c0-.77.606-1.42 1.375-1.436a1.402 1.402 0 0 1 1.438 1.406M23.297 1.944V6.11a1.24 1.24 0 0 1-1.239 1.239h-2.594l-3.502 3.478q-.003.002-.004-.001V7.35l-.002-.002h-1.572a1.24 1.24 0 0 1-1.238-1.24V1.945c0-.685.555-1.24 1.24-1.24h7.67c.685 0 1.24.555 1.24 1.24M20.953 4.025h-1.56M17.05 4.025h-1.56"></path>
        <path d="M16.6 19.986v3.308a.002.002 0 0 1-.002.003H5.885l-.002-.003.049-3.508q-.002 0-.003-.002l-1.922.609a2.477 2.477 0 0 1-3.304-2.334v-5.94q0-.003.002-.003h2.808q.003 0 .003.002v5.185l.002.002 5.06-1.81.01-.004a6.5 6.5 0 0 1 2.154-.365h.999a4.86 4.86 0 0 1 4.86 4.86"></path>
      </g>
    </SvgIcon>
  );
};
export default IconGreetingSign;
