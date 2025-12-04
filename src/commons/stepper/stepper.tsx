import {
  Stepper as MuiStepper,
  Step,
  StepIconProps,
  Typography,
  useTheme,
} from "@mui/material";
import { FC, useMemo } from "react";
//constants
import { Svgs } from "../../svgs";
//styles
import {
  ConnectorHorizontal,
  ConnectorVertical,
  StepContent,
  StepIconComponentRoot,
  StepLabel,
} from "./stepper.styles";
//types
import { StepperProps } from "./stepper.types";

function StepIconComponent(props: StepIconProps) {
  const { active, completed, className } = props;
  const theme = useTheme();
  return (
    <StepIconComponentRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {completed ? (
        <Svgs.IconCheck
          width={16}
          height={16}
          stroke={theme.palette.common.white}
        />
      ) : (
        props.icon
      )}
    </StepIconComponentRoot>
  );
}

const Stepper: FC<StepperProps> = (props) => {
  const {
    data,
    orientation = "horizontal",
    directionLabel = "column",
    sxConnector,
    ...rest
  } = props;

  const Connector = useMemo(
    () =>
      orientation === "vertical" ? ConnectorVertical : ConnectorHorizontal,
    [orientation]
  );

  return (
    <MuiStepper
      orientation={orientation}
      connector={<Connector directionlabel={directionLabel} sx={sxConnector} />}
      {...rest}
    >
      {data.map((step, index) => (
        <Step key={index}>
          <StepLabel
            direction={directionLabel}
            StepIconComponent={StepIconComponent}
          >
            {step.label}
          </StepLabel>
          {orientation === "vertical" && step.description && (
            <StepContent>
              <Typography fontSize={14} color="text.secondary">
                {step.description}
              </Typography>
            </StepContent>
          )}
        </Step>
      ))}
    </MuiStepper>
  );
};

export { Stepper };
