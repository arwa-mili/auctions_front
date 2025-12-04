import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

function IconThumbsUp(props: SvgIconProps) {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      {...props}
    >
      <path fill="none" d="M7 10v12" />
      <path
        fill="none"
        d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"
      />
    </SvgIcon>
  );
}

export default IconThumbsUp;
