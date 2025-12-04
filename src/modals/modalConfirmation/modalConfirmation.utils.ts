import { IconButtonTypeProps } from "./modalConfirmation.types";

export const getColorsFromType = (type?: IconButtonTypeProps) => {
  switch (type) {
    case "info":
      return { background: "#D5E5FE", border: "#E8F2FF" };

    case "error":
      return { background: "#FEE4E2", border: "#FEF3F2" };

    case "success":
      return { background: "#D1FADF", border: "#ECFDF3" };

    case "warning":
      return { background: "#FEF0C7", border: "#FFFAEB" };

    case "primary": {
      return { background: "#CBDD8F", border: "#E0EABC" };
    }

    default:
      return { background: "#D5E5FE", border: "#E8F2FF" };
  }
};
