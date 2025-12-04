const IconAddress = ({ stroke = "#000", width = 26, height = 26 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 26 26"
  >
    <rect
      width="25"
      height="25"
      x="0.5"
      y="0.5"
      stroke={stroke}
      rx="12.5"
    ></rect>
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 13.583a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5"
    ></path>
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 18.833c2.334-2.333 4.667-4.422 4.667-7a4.667 4.667 0 1 0-9.333 0c0 2.578 2.333 4.667 4.667 7"
    ></path>
  </svg>
);

export default IconAddress;
