import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconStatsTotalIncome = (props: SvgIconProps) => {
  return (
    <SvgIcon
      width="48"
      height="48"
      fill="none"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="48" height="48" fill="#F3F7E4" rx="12"></rect>
      <path
        fill="#84AB16"
        d="M31.5 22.635v-.885a2.25 2.25 0 0 0-2.25-2.25h-1.5a.75.75 0 1 0 0 1.5h1.5a.75.75 0 0 1 .75.75v.75H17.25a.75.75 0 1 1 0-1.5h1.5a.75.75 0 1 0 0-1.5h-1.5A2.25 2.25 0 0 0 15 21.75v10.5a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 33 32.25v-7.5a2.25 2.25 0 0 0-1.5-2.115M30.75 33h-13.5a.75.75 0 0 1-.75-.75v-8.385c.24.087.494.133.75.135h13.5a.75.75 0 0 1 .75.75v1.5h-2.25a2.25 2.25 0 0 0 0 4.5h2.25v1.5a.75.75 0 0 1-.75.75m.75-5.25v1.5h-2.25a.75.75 0 1 1 0-1.5z"
      ></path>
      <path
        fill="#475467"
        d="M22.718 20.783a.75.75 0 0 0 1.064 0l2.25-2.25a.753.753 0 0 0-1.064-1.065l-.968.974V14.25a.75.75 0 1 0-1.5 0v4.192l-.968-.974a.752.752 0 1 0-1.064 1.064z"
      ></path>
    </SvgIcon>
  );
};
export default IconStatsTotalIncome;
