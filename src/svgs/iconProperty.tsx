const IconProperty = ({ stroke = "#000", width = 26, height = 26 }) => (
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
      d="M14.75 18.25V15.1c0-.327 0-.49-.064-.615a.6.6 0 0 0-.255-.255c-.124-.063-.288-.063-.614-.063h-1.634c-.326 0-.49 0-.614.063a.6.6 0 0 0-.255.255c-.064.125-.064.288-.064.615v3.15m5.833 0V9.617c0-.654 0-.98-.127-1.23a1.17 1.17 0 0 0-.51-.51c-.25-.127-.576-.127-1.23-.127h-4.433c-.653 0-.98 0-1.23.127-.219.112-.397.29-.51.51-.126.25-.126.576-.126 1.23v8.633m9.333 0H7.75m3.792-7.583h.005m2.911 0h.006m-2.63 0a.292.292 0 1 1-.584 0 .292.292 0 0 1 .583 0m2.916 0a.292.292 0 1 1-.583 0 .292.292 0 0 1 .583 0"
    ></path>
  </svg>
);

export default IconProperty;
