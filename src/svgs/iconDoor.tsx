import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

function IconDoor(props: SvgIconProps) {
  return (
    <SvgIcon
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill={props.fill ?? "currentColor"}
        fillRule="evenodd"
        clipPath="url(#clip0_10004_79915)"
        clipRule="evenodd"
      >
        <path d="m1.982 9.616 5.772-5.559c.634-.61 1.93-1.133 2.81-1.133h8.178v14.153H3.643c-.417 0-.898-.357-1.02-.757l-1.285-4.224c-.235-.77.065-1.922.644-2.48M.134 12.462l1.286 4.224c.283.93 1.253 1.649 2.223 1.649h15.728a.63.63 0 0 0 .629-.63V2.296a.63.63 0 0 0-.629-.629h-8.806c-1.206 0-2.815.649-3.683 1.485L1.109 8.71c-.92.886-1.347 2.529-.975 3.752"></path>
        <path d="M10.565 5.125h5.975v4.718H4.964l4.93-4.46a1.3 1.3 0 0 1 .671-.258M9.049 4.45l-6.14 5.555a.629.629 0 0 0 .422 1.096H17.17a.63.63 0 0 0 .63-.63V4.497a.63.63 0 0 0-.63-.629h-6.604c-.502 0-1.144.246-1.516.583m8.12 7.594h-1.886a.629.629 0 1 0 0 1.258h1.886a.629.629 0 1 0 0-1.258"></path>
      </g>
      <defs>
        <clipPath id="clip0_10004_79915">
          <path fill="#fff" d="M0 0h20v20H0z"></path>
        </clipPath>
      </defs>
    </SvgIcon>
  );
}

export default IconDoor;
