import { Collapse } from "@mui/material";
//types
import { HeaderDataTableProps } from "./headerDataTable.types";

const HeaderDataTable: React.FC<HeaderDataTableProps> = (props) => {
  const { isDisplayFront, isDisplayBack, children } = props;
  if (children.length !== 2) {
    return null;
  }
  return (
    <>
      <Collapse in={isDisplayFront}>{children[0]}</Collapse>
      <Collapse in={isDisplayBack}>{children[1]}</Collapse>
    </>
  );
};

export { HeaderDataTable };
