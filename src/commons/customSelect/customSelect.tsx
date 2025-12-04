import { Box, InputAdornment, InputLabel, Popover } from "@mui/material";
import { Component } from "react";
//core
import { Svgs } from "../../svgs";
import { Input } from "../input/input";
//styles
import { Container } from "./customSelect.styles";
//types
import { CustomSelectProps } from "./customSelect.types";

class CustomSelect extends Component<CustomSelectProps, any> {
  constructor(props: any) {
    super(props);
    this.state = { anchorEl: null };
  }

  hide = () => {
    this.setState({ anchorEl: null });
    if (this.props.onClose) {
      this.props.onClose();
    }
  };

  show = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  render() {
    const { anchorEl } = this.state;
    const {
      children,
      sxContainer,
      label,
      name,
      placeholder,
      sxInput,
      rules,
      startAdornment,
      endAdornment,
      getFieldValue,
    } = this.props;

    const open = Boolean(anchorEl);
    const id = open ? `input-popover-${name}` : undefined;

    return (
      <>
        <Box component="span" sx={sxContainer}>
          <InputLabel sx={{ mb: 0.5 }}>{label}</InputLabel>
          <Container onClick={this.show}>
            <Input
              sxContainer={{ flex: 1 }}
              hideLabel
              name={name || ""}
              placeholder={placeholder}
              getFieldValue={getFieldValue}
              sx={{ ...sxInput, pointerEvents: "none" }}
              endAdornment={
                endAdornment || (
                  <InputAdornment position="start" sx={{ mr: "0 !important" }}>
                    <Svgs.IconChevronDown />
                  </InputAdornment>
                )
              }
              startAdornment={startAdornment}
              rules={rules}
            />
          </Container>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={this.hide}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            slotProps={{
              root: { sx: { mt: 0.5 } },
              paper: {
                variant: "outlined",
                elevation: 0,
                sx: { borderRadius: 2, width: "auto" },
              },
            }}
          >
            {children}
          </Popover>
        </Box>
      </>
    );
  }
}
export { CustomSelect };
