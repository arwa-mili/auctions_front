import {
  StepContent as MuiStepContent,
  StepLabel as MuiStepLabel,
  StepConnector,
  stepConnectorClasses,
  styled,
} from "@mui/material";

export const StepLabel = styled(MuiStepLabel)<{ direction?: "row" | "column" }>(
  ({ theme, direction }) => ({
    flexDirection: direction,
    gap: theme.spacing(0.5),
    "& .MuiStepIcon-text": {
      fontSize: 12,
      fontWeight: "400",
      color: theme.palette.primary.main,
    },
    "& .MuiStepLabel-label": {
      fontSize: 14,
      fontWeight: "500",
      color: theme.palette.grey[700],
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  })
);

export const StepIconComponentRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.common.white,
  zIndex: 1,
  fontSize: 14,
  fontWeight: "500",
  color: theme.palette.primary.main,
  width: 36,
  height: 36,
  border: ownerState.active
    ? `1px solid ${theme.palette.primary.main}`
    : `1px solid ${theme.palette.primary.main}`,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage: `linear-gradient(95deg,${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 100%)`,
    border: "none",
    color: theme.palette.common.white,
  }),
  ...(ownerState.completed && {
    backgroundImage: `linear-gradient(95deg,${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 100%)`,
    border: "none",
    color: theme.palette.common.white,
  }),
}));

export const ConnectorVertical = styled(StepConnector)<{
  directionlabel?: "row" | "column";
}>(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: `linear-gradient(95deg,${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 100%)`,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: `linear-gradient(95deg,${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 100%)`,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    width: 1,
    border: 0,
    backgroundColor: theme.palette.grey[200],
    borderRadius: 1,
    marginLeft: 4,
  },
}));

export const ConnectorHorizontal = styled(StepConnector)<{
  directionlabel?: "row" | "column";
}>(({ theme, directionlabel }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: `linear-gradient(95deg,${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 100%)`,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: `linear-gradient(95deg,${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 100%)`,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 1,
    border: 0,
    backgroundColor: theme.palette.grey[200],
    borderRadius: 1,
    marginBottom: directionlabel === "column" ? 22 : 0,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 0,
    },
  },
}));

export const StepContent = styled(MuiStepContent)<{
  orientation?: "vertical" | "horizontal";
}>(({ theme, orientation }) => ({
  marginLeft: theme.spacing(2),
  paddingLeft: 30,
  borderColor: theme.palette.divider,
}));
