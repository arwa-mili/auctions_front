import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconPhoto = (props: SvgIconProps) => {
  return (
    <SvgIcon width="49" height="49" fill="none" viewBox="0 0 49 49" {...props}>
      <rect
        width="48"
        height="48"
        x="0.25"
        y="0.5"
        fill="#F2F4F7"
        rx="24"
      ></rect>
      <path
        stroke="#344054"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        strokeWidth="2"
        d="M28.45 33.5h-9.269c-.605 0-.908 0-1.049-.12a.5.5 0 0 1-.173-.42c.014-.183.228-.397.657-.826l8.503-8.503c.396-.396.594-.594.822-.668a1 1 0 0 1 .618 0c.228.074.426.272.822.668L33.25 27.5v1.2m-4.8 4.8c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311c.327-.642.327-1.482.327-3.162m-4.8 4.8h-8.4c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311c-.327-.642-.327-1.482-.327-3.162v-8.4c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311c.642-.327 1.482-.327 3.162-.327h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311c.327.642.327 1.482.327 3.162v8.4M22.75 21a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      ></path>
    </SvgIcon>
  );
};
export default IconPhoto;
