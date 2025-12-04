import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconMessageDotsCircle = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" width="24" height="24" fill="none" {...props}>
      <path
        stroke={props.stroke ?? "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        strokeWidth={props.strokeWidth ?? "2"}
        d="M7.5 12h.01M12 12h.01m4.49 0h.01M12 21a9 9 0 10-8.342-5.616c.081.2.122.3.14.381a.907.907 0 01.024.219c0 .083-.015.173-.045.353l-.593 3.558c-.062.373-.093.56-.035.694a.5.5 0 00.262.262c.135.058.321.027.694-.035l3.558-.593c.18-.03.27-.045.353-.045.081 0 .14.006.219.024.08.018.18.059.38.14A8.973 8.973 0 0012 21zm-4-9a.5.5 0 11-1 0 .5.5 0 011 0zm4.5 0a.5.5 0 11-1 0 .5.5 0 011 0zm4.5 0a.5.5 0 11-1 0 .5.5 0 011 0z"
      ></path>
    </SvgIcon>
  );
};
export default IconMessageDotsCircle;
