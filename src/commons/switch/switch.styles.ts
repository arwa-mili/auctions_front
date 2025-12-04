import { styled, Switch } from "@mui/material";

export const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 36,
  height: 20,
  padding: 0,
  borderRadius: 12,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 16,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
    "& .MuiSwitch-track": {
      boxShadow: "0px 0px 0px 4px #F4EBFF",
    },
  },

  "&:hover .MuiSwitch-track": {
    color: "#fff",
    background: theme.palette.grey[200],
    borderRadius: 12,
  },

  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow:
      "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)",
    width: 16,
    height: 16,
    borderRadius: 12,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 12,
    opacity: 1,
    backgroundColor: theme.palette.grey[100],
    boxSizing: "border-box",
  },
}));
