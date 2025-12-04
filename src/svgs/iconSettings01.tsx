import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconSettings01 = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        stroke={props.stroke ?? "currentColor"}
        fill={props.fill ?? "none"}
        strokeWidth={props.strokeWidth ?? "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 15a3 3 0 100-6 3 3 0 000 6z"
      ></path>
      <path
        stroke={props.stroke ?? "currentColor"}
        fill={props.fill ?? "none"}
        strokeWidth={props.strokeWidth ?? "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.727 14.727a1.5 1.5 0 00.3 1.655l.055.054a1.816 1.816 0 010 2.573 1.818 1.818 0 01-2.573 0l-.055-.055a1.5 1.5 0 00-1.654-.3 1.5 1.5 0 00-.91 1.373v.155a1.818 1.818 0 11-3.636 0V20.1a1.5 1.5 0 00-.981-1.373 1.5 1.5 0 00-1.655.3l-.054.055a1.818 1.818 0 01-3.106-1.287 1.818 1.818 0 01.533-1.286l.054-.055a1.5 1.5 0 00.3-1.654 1.5 1.5 0 00-1.372-.91h-.155a1.818 1.818 0 110-3.636H3.9a1.5 1.5 0 001.373-.981 1.5 1.5 0 00-.3-1.655l-.055-.054A1.818 1.818 0 117.491 4.99l.054.054a1.5 1.5 0 001.655.3h.073a1.5 1.5 0 00.909-1.372v-.155a1.818 1.818 0 013.636 0V3.9a1.499 1.499 0 00.91 1.373 1.5 1.5 0 001.654-.3l.054-.055a1.817 1.817 0 012.573 0 1.819 1.819 0 010 2.573l-.055.054a1.5 1.5 0 00-.3 1.655v.073a1.5 1.5 0 001.373.909h.155a1.818 1.818 0 010 3.636H20.1a1.499 1.499 0 00-1.373.91z"
      ></path>
    </SvgIcon>
  );
};
export default IconSettings01;
