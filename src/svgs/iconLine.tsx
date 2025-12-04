import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconLine = (props: SvgIconProps) => {
  return (
    <SvgIcon width="51" height="6" fill="none" viewBox="0 0 51 6" {...props}>
      <path
        fill="#95A1A9"
        d="M.113 3 3 5.887 5.887 3 3 .113zm50.774 0L48 .113 45.113 3 48 5.887zM3 3.5h45v-1H3z"
      ></path>
    </SvgIcon>
  );
};
export default IconLine;
