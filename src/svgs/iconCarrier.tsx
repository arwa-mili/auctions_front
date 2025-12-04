import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

function IconCarrier(props: SvgIconProps) {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      width={props.width ?? "24"}
      height={props.height ?? "24"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        stroke={props.stroke ?? "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        strokeWidth="2"
        d="M16 16V6.2c0-1.12 0-1.68-.218-2.108a2 2 0 00-.874-.874C14.48 3 13.92 3 12.8 3H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 00-.874.874C2 4.52 2 5.08 2 6.2v6.6c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874C3.52 16 4.08 16 5.2 16H16zm0 0h4.4c.56 0 .84 0 1.054-.109a1 1 0 00.437-.437C22 15.24 22 14.96 22 14.4v-2.737c0-.245 0-.367-.028-.482a.998.998 0 00-.12-.29c-.061-.1-.148-.187-.32-.36L19.468 8.47c-.173-.173-.26-.26-.36-.322a1 1 0 00-.29-.12C18.704 8 18.582 8 18.337 8H16M9 18.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm11 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
      ></path>
    </SvgIcon>
  );
}

export default IconCarrier;
