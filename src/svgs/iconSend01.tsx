import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconSend01 = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        stroke={props.stroke ?? "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        strokeWidth={props.strokeWidth ?? "2"}
        d="M10.5 13.5L21 3M10.627 13.828l2.628 6.758c.232.596.347.893.514.98a.5.5 0 00.462 0c.167-.086.283-.384.515-.979L21.336 3.7c.21-.537.315-.805.258-.977a.5.5 0 00-.316-.316c-.172-.057-.44.048-.978.257L3.413 9.253c-.595.233-.893.349-.98.516a.5.5 0 000 .461c.087.167.385.283.98.514l6.758 2.629c.121.047.182.07.233.106a.5.5 0 01.116.117c.037.051.06.111.107.232z"
      ></path>
    </SvgIcon>
  );
};
export default IconSend01;
