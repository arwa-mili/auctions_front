import { styled } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  "& .rbc-month-view": {
    borderRadius: theme.spacing(1),
    overflow: "hidden",
    border: `1px solid ${theme.palette.divider}`,
  },
  "& .rbc-toolbar": {
    "& .rbc-btn-group": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: theme.spacing(1),
      "& > button": {
        cursor: "pointer",
        height: "40px",
        background: theme.palette.background.paper,
        borderRadius: theme.spacing(1),
        boxShadow: "none",
        fontSize: 14,
        fontWeight: "600",
        color: theme.palette.grey[700],
        borderColor: theme.palette.divider,
        "&:hover": {
          color: theme.palette.primary[800],
          borderColor: theme.palette.primary[800],
        },
      },
      "& .rbc-active": {
        color: theme.palette.primary[800],
        borderColor: theme.palette.primary[800],
      },
    },
    "& .rbc-toolbar-label": {
      fontSize: 16,
      fontWeight: "700",
      color: theme.palette.grey[600],
    },
  },
  "& .rbc-header": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(1),
    fontSize: "14px !important",
    fontWeight: "600",
    color: theme.palette.grey[700],
  },
  "& .rbc-month-row": {
    borderColor: theme.palette.divider,
    "& .rbc-row-bg": {
      "& .rbc-day-bg": {
        borderColor: theme.palette.divider,
        cursor: "pointer",
      },
      "& .rbc-off-range-bg": {
        background: theme.palette.grey[100],
        cursor: "auto",
      },
    },
    "& .rbc-row-content": {
      "& .rbc-row": {
        "& .rbc-date-cell": {
          "& .rbc-button-link": {
            fontSize: 12,
            fontWeight: "400",
            fontFamily: "Inter Tight",
          },
        },
      },
    },
  },
  "& .rbc-event": {
    background: theme.palette.success[500],
    fontSize: 12,
    fontWeight: "500",
    "& .rbc-event-content": {
      margin: "0 6px",
    },
  },
}));
