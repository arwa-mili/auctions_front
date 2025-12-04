import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

function IconLinks(props: SvgIconProps) {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        stroke={props.stroke ?? "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.strokeWidth ?? "2"}
        fill="none"
        d="M7.5 7H7a5 5 0 0 0 0 10h2a5 5 0 0 0 5-5m2.5 5h.5a5 5 0 0 0 0-10h-2a5 5 0 0 0-5 5"
      ></path>
    </SvgIcon>
  );
}

export default IconLinks;
