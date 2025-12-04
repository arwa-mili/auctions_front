import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconDuplicateTrip = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <g
        fill={props.stroke ?? "currentColor"}
        clipPath="url(#clip0_9995_51410)"
      >
        <path d="M20.923 3.078a.83.83 0 0 0-.899-.185L3.358 9.559a.833.833 0 0 0-.064 1.524l6.417 3.209 3.208 6.416a.83.83 0 0 0 .748.459h.035a.83.83 0 0 0 .74-.523l6.666-16.666a.83.83 0 0 0-.185-.9M13.583 18.3l-2.5-5.007a.83.83 0 0 0-.373-.373l-5.006-2.5 13.13-5.254zM4.5 7.833h1.666V6.167h1.667V4.5H6.166V2.833H4.5V4.5H2.833v1.667H4.5z"></path>
      </g>
      <defs>
        <clipPath id="clip0_9995_51410">
          <path fill="#fff" d="M2 2h20v20H2z"></path>
        </clipPath>
      </defs>
    </SvgIcon>
  );
};
export default IconDuplicateTrip;
