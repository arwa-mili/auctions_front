import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconEraser = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        stroke={props.stroke ?? "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.667"
        fill={props.fill ?? "none"}
        d="M15 10.834L9.167 5M17.5 17.5H6.667m2.448-.78l7.223-7.225c.99-.99 1.486-1.485 1.671-2.056a2.5 2.5 0 000-1.545c-.185-.57-.68-1.065-1.67-2.055l-.177-.177c-.99-.99-1.485-1.485-2.056-1.67a2.5 2.5 0 00-1.545 0c-.57.185-1.066.68-2.056 1.67l-6.843 6.843c-.99.99-1.485 1.485-1.67 2.056a2.5 2.5 0 000 1.545c.185.571.68 1.066 1.67 2.056l.557.557c.288.288.433.433.6.536.15.091.312.158.483.2.191.045.395.045.803.045h1.124c.408 0 .612 0 .803-.046.17-.04.333-.108.482-.2.168-.102.312-.247.6-.535z"
      ></path>
    </SvgIcon>
  );
};
export default IconEraser;
