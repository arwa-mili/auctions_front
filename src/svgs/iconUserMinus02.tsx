import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconUserMinus02 = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        stroke={props.stroke ?? "currentColor"}
        strokeLinecap="round"
        fill="none"
        strokeLinejoin="round"
        strokeWidth={props.strokeWidth ?? "2"}
        d="M16 7h6m-6 14v-1.2c0-1.68 0-2.52-.327-3.162a3 3 0 00-1.311-1.311C13.72 15 12.88 15 11.2 15H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 00-1.311 1.311C2 17.28 2 18.12 2 19.8V21M12.5 7.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"
      ></path>
    </SvgIcon>
  );
};
export default IconUserMinus02;
