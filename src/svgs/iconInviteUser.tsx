import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconInviteUser = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props} fill="none">
      <path
        stroke={props.stroke ?? "currentColor"}
        strokeLinecap="round"
        fill="none"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 15.5H7.5c-1.396 0-2.093 0-2.661.172a4 4 0 0 0-2.667 2.667C2 18.907 2 19.604 2 21m17 0v-6m-3 3h6M14.5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0"
      ></path>
    </SvgIcon>
  );
};
export default IconInviteUser;
