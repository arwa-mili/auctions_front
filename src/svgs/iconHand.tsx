import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

function IconHand(props: SvgIconProps) {
  return (
    <SvgIcon
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        stroke={props.stroke ?? "currentColor"}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
        d="M4.025 6.675v1.62m0-1.62V2.786c0-.537.444-.972.992-.972.547 0 .991.435.991.972m-1.983 3.89a.98.98 0 0 0-.992-.973.98.98 0 0 0-.991.972v1.297c0 2.684 2.22 4.86 4.958 4.86s4.958-2.176 4.958-4.86V4.73a.98.98 0 0 0-.991-.972.98.98 0 0 0-.992.972M6.008 2.786v3.565m0-3.565v-.648c0-.537.444-.972.992-.972s.992.435.992.972v.648m0 0v3.565m0-3.565c0-.537.444-.972.991-.972.548 0 .992.435.992.972v1.945m0 0v1.62"
      ></path>
    </SvgIcon>
  );
}

export default IconHand;
