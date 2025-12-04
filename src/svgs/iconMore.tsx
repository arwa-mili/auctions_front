import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconMore = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 20 20" {...props}>
      <path
        fill={props.stroke ?? "currentColor"}
        d="M10.5 1C5.813 1 2 4.813 2 9.5S5.813 18 10.5 18 19 14.187 19 9.5 15.187 1 10.5 1m0 15.583A7.09 7.09 0 0 1 3.417 9.5 7.09 7.09 0 0 1 10.5 2.417 7.09 7.09 0 0 1 17.583 9.5a7.09 7.09 0 0 1-7.083 7.083M7.667 9.5a1.063 1.063 0 1 1-2.126 0 1.063 1.063 0 0 1 2.126 0m7.791 0a1.063 1.063 0 1 1-2.125 0 1.063 1.063 0 0 1 2.125 0m-3.895 0a1.063 1.063 0 1 1-2.126 0 1.063 1.063 0 0 1 2.126 0"
      ></path>
    </SvgIcon>
  );
};
export default IconMore;
