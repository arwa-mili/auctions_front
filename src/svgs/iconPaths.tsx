import { SvgIconProps } from "@mui/material/SvgIcon";

function IconPaths(props: SvgIconProps) {
    return (
        <svg
            {...props}
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M6.39667 13.5478L10.5992 19.1506C10.9184 19.5762 11.427 19.8516 12 19.8516C12.5729 19.8516 13.0816 19.5762 13.4008 19.1506L17.6033 13.5478C18.4804 12.3785 19 10.9257 19 9.35156C19 5.4856 15.866 2.35156 12 2.35156C8.13399 2.35156 5 5.4856 5 9.35156C5 10.9257 5.51966 12.3785 6.39667 13.5478Z"
                stroke="#8FB31A"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round" />
            <path d="M13.75 9.35156C13.75 10.318 12.9665 11.1016 12 11.1016C11.0335 11.1016 10.25 10.318 10.25 9.35156C10.25 8.38508 11.0335 7.60156 12 7.60156C12.9665 7.60156 13.75 8.38508 13.75 9.35156Z"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round" />
            <path d="M8.5 23H15.5"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round" />
        </svg>
    );
}

export default IconPaths;
