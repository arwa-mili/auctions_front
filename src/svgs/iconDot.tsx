import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

function IconDot(props: SvgIconProps) {
  return (
    <SvgIcon
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="4" cy="4" r="3" fill={props.fill} />
      </svg>
    </SvgIcon>
  );
}

export default IconDot;
