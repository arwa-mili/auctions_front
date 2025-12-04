import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconSocialAccounts = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        stroke={props.stroke ?? "currentColor"}
        strokeWidth="2"
        fill="none"
        d="M8.18 10.2c2.092 0 3.789-1.612 3.789-3.6S10.272 3 8.179 3C6.087 3 4.39 4.612 4.39 6.6s1.697 3.6 3.79 3.6z"
      ></path>
      <path
        stroke={props.stroke ?? "currentColor"}
        strokeLinecap="round"
        strokeWidth="2"
        fill="none"
        d="M15.126 21v-2.105a5.094 5.094 0 00-5.094-5.095H6.894A5.094 5.094 0 001.8 18.895V21M16.2 4.199h6M16.2 7.8h6M16.2 11.398h3.6"
      ></path>
    </SvgIcon>
  );
};
export default IconSocialAccounts;
