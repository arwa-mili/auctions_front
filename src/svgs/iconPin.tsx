const IconPin = ({ stroke = "#000", width = 26, height = 26 }) => (
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
    <g clipPath="url(#clip0_8845_68244)">
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 14.083a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5"
      ></path>
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 19.333c2.334-2.334 4.667-4.423 4.667-7a4.667 4.667 0 1 0-9.333 0c0 2.577 2.333 4.666 4.667 7"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_8845_68244">
        <path fill="#fff" d="M6 6h14v14H6z"></path>
      </clipPath>
    </defs>
  </svg>
);

export default IconPin;
