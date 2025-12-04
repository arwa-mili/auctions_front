import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconFeature = (props: SvgIconProps) => {
  return (
    <SvgIcon width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <g clipPath="url(#clip0_9886_96644)">
        <path
          fill={props.fill ?? "currentColor"}
          d="m24 5.917-3.3 1.909 1.326 4.029-.75.523-3.261-2.521-3.275 2.532-.721-.543 1.304-4.076L12 5.922V5h4.35L17.528.5h.97L19.674 5H24zM5 5v2h5V5zm7 4H5v2h7zm-7 6h7v-2H5zm14 3h3v3c0 1.654-1.346 3-3 3H3.5C1.57 24 0 22.43 0 20.5V3c0-1.654 1.346-3 3-3h11.13a8 8 0 0 0-2.366 2H3c-.551 0-1 .448-1 1v17.5c0 .827.673 1.5 1.5 1.5S5 21.327 5 20.5V18h12v-3.067q.491.066 1 .067c.339 0 .672-.028 1-.069zm1 2H7v.5a3.5 3.5 0 0 1-.338 1.5H19c.551 0 1-.448 1-1z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_9886_96644">
          <path fill="#fff" d="M0 0h24v24H0z"></path>
        </clipPath>
      </defs>
    </SvgIcon>
  );
};
export default IconFeature;
