import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconDuplicate = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        fill={props.stroke ?? "currentColor"}
        d="M15 21.75H4.5a2.25 2.25 0 0 1-2.25-2.25V9A2.25 2.25 0 0 1 4.5 6.75H15A2.25 2.25 0 0 1 17.25 9v10.5A2.25 2.25 0 0 1 15 21.75M4.5 8.25a.75.75 0 0 0-.75.75v10.5a.75.75 0 0 0 .75.75H15a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75zM7.5 6a.75.75 0 0 1-.75-.75V4.5A2.25 2.25 0 0 1 9 2.25h.75a.75.75 0 1 1 0 1.5H9a.75.75 0 0 0-.75.75v.75A.75.75 0 0 1 7.5 6M19.5 17.25h-.75a.75.75 0 1 1 0-1.5h.75a.75.75 0 0 0 .75-.75v-.75a.75.75 0 1 1 1.5 0V15a2.25 2.25 0 0 1-2.25 2.25M21 6a.75.75 0 0 1-.75-.75V4.5a.75.75 0 0 0-.75-.75h-.75a.75.75 0 1 1 0-1.5h.75a2.25 2.25 0 0 1 2.25 2.25v.75A.75.75 0 0 1 21 6M21 12a.75.75 0 0 1-.75-.75v-3a.75.75 0 1 1 1.5 0v3A.75.75 0 0 1 21 12M15.75 3.75h-3a.75.75 0 1 1 0-1.5h3a.75.75 0 1 1 0 1.5"
      ></path>
      <path
        fill={props.stroke ?? "currentColor"}
        d="M12 15H7.5a.75.75 0 1 1 0-1.5H12a.75.75 0 1 1 0 1.5"
      ></path>
      <path
        fill={props.stroke ?? "currentColor"}
        d="M9.75 17.25A.75.75 0 0 1 9 16.5V12a.75.75 0 1 1 1.5 0v4.5a.75.75 0 0 1-.75.75"
      ></path>
    </SvgIcon>
  );
};
export default IconDuplicate;
