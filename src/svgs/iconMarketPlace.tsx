import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconMarketPlace = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        fill={props.fill ?? "currentColor"}
        fillRule="evenodd"
        d="M2 1a1 1 0 0 0 0 2h1.133l1.632 11.424A3 3 0 0 0 7.735 17h9.66a3 3 0 0 0 2.93-2.35l.318-1.433a1 1 0 0 0-1.953-.434l-.318 1.434a1 1 0 0 1-.976.783H7.735a1 1 0 0 1-.99-.859L5.725 7H12a1 1 0 1 0 0-2H5.439L4.99 1.859A1 1 0 0 0 4 1zm17 1a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0V7h-2a1 1 0 1 1 0-2h2V3a1 1 0 0 1 1-1m-9 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0m7 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        clipRule="evenodd"
      ></path>
    </SvgIcon>
  );
};
export default IconMarketPlace;
