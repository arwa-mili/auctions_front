import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

function IconArrowReturn(props: SvgIconProps) {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_9995_51352)">
        <path
          fill={props.stroke ?? "currentColor"}
          d="M17.79 8.138H3.578L6.486 5.23a1.048 1.048 0 1 0-1.482-1.482L.306 8.445c-.41.41-.41 1.073 0 1.482l4.696 4.697a1.045 1.045 0 0 0 1.483 0c.409-.41.409-1.073 0-1.483l-2.908-2.907H17.79a4.12 4.12 0 0 1 4.114 4.114 4.12 4.12 0 0 1-4.114 4.115H9.144a1.048 1.048 0 1 0 0 2.096h8.646a6.217 6.217 0 0 0 6.21-6.21 6.217 6.217 0 0 0-6.21-6.211"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_9995_51352">
          <path fill="#fff" d="M0 0h24v24H0z"></path>
        </clipPath>
      </defs>
    </SvgIcon>
  );
}

export default IconArrowReturn;
