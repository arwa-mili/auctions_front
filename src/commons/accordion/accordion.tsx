import { AccordionDetails, AccordionSummary } from "@mui/material";
import { FC } from "react";
// styles
import { MuiAccordion } from "./accordion.styles";
// types
import { AccordionProps } from "./accordion.types";

const Accordion: FC<AccordionProps> = (props) => {
  const {
    summary,
    details,
    endIcon,
    sx,
    defaultExpanded,
    expanded,
    bgColorSelected,
    contrastTextSelected,
    onChange,
  } = props;
  return (
    <MuiAccordion
      variant="outlined"
      disableGutters
      defaultExpanded={defaultExpanded}
      bgcolorselected={bgColorSelected}
      contrasttextselected={contrastTextSelected}
      onChange={onChange}
      expanded={expanded}
      sx={sx}
    >
      <AccordionSummary
        expandIcon={endIcon}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        {summary}
      </AccordionSummary>
      <AccordionDetails>{details}</AccordionDetails>
    </MuiAccordion>
  );
};

export { Accordion };
