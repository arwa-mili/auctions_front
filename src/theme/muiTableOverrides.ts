import { Components } from "@mui/material";

export const getMuiTableContainerOverrides = (): Pick<
  Components,
  "MuiTableContainer"
> => ({
  MuiTableContainer: {
    styleOverrides: {
      root: ({ theme }: any) => ({
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: theme.spacing(1.5),
      }),
    },
  },
});

export const getMuiTableOverrides = (): Pick<Components, "MuiTable"> => ({
  MuiTable: {
    styleOverrides: {
      root: ({ theme }: any) => ({}),
    },
  },
});

export const getMuiTableHeadOverrides = (): Pick<
  Components,
  "MuiTableHead"
> => ({
  MuiTableHead: {
    styleOverrides: {
      root: ({ theme }: any) => ({
        // background: theme.palette.grey[50],
      }),
    },
  },
});

export const getMuiTableSortLabelOverrides = (): Pick<
  Components,
  "MuiTableSortLabel"
> => ({
  MuiTableSortLabel: {
    styleOverrides: {
      root: ({ theme }: any) => ({
        height: 44,
        fontSize: 14,
        fontWeight: "600",
        color: theme.palette.grey[600],
        textWrap: "nowrap",
      }),
    },
  },
});

export const getMuiTableBodyOverrides = (): Pick<
  Components,
  "MuiTableBody"
> => ({
  MuiTableBody: {
    styleOverrides: {
      root: {},
    },
  },
});

export const getMuiTableRowOverrides = (): Pick<Components, "MuiTableRow"> => ({
  MuiTableRow: {
    styleOverrides: {
      root: () => ({}),
    },
  },
});

export const getMuiTableCellOverrides = (): Pick<
  Components,
  "MuiTableCell"
> => ({
  MuiTableCell: {
    styleOverrides: {
      root: ({ theme }: any) => ({
        borderBottom: `1px solid ${theme.palette.divider}`,
      }),
    },
  },
});

export const getMuiTablePaginationOverrides = (): Pick<
  Components,
  "MuiTablePagination"
> => ({
  MuiTablePagination: {
    styleOverrides: {
      root: {
        border: "none !important",
        padding: "0px !important",
      },
      toolbar: {
        padding: "8px 16px !important",
        gap: 8,
      },
      spacer: {
        display: "none",
      },
      displayedRows: {
        flex: 1,
        textAlign: "center",
      },
      selectIcon: {
        width: 20,
      },
    },
  },
});
