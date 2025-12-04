import { FC } from "react";
import { TablePagination, useTheme } from "@mui/material";
import { Svgs } from "../../../svgs";
import { IconButton } from "../../iconButton/iconButton";
//styles
import { PaginationActions, MuiPagination } from "./pagination.styles";
//types
import { PaginationProps } from "./pagination.types";

const Pagination: FC<PaginationProps> = (props) => {
  const {
    component,
    language,
    count,
    page = 0,
    limit = 10,
    sx,
    labelRowsPerPage,
    labelDisplayedRows,
    onRowsPerPageChange,
    onChangePage,
  } = props;
  const theme = useTheme();

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (onRowsPerPageChange) {
      const rows = parseInt(event.target.value, 10);
      onRowsPerPageChange({ page: 1, limit: rows });
    }
  };
  const handleChangePage = (event: any, newPage: number) => {
    if (onChangePage) {
      onChangePage({ page: newPage, limit });
    }
  };

  return (
    <TablePagination
      component={component}
      sx={sx}
      count={count || 0}
      page={page - 1}
      rowsPerPage={limit}
      rowsPerPageOptions={[5, 10, 25, 50, 100]}
      labelRowsPerPage={labelRowsPerPage}
      labelDisplayedRows={labelDisplayedRows}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      ActionsComponent={({ page, count, rowsPerPage, ...params }) => {
        let newPage = page + 1;
        const pageSize = Math.ceil(count / rowsPerPage);
        const strokeLeft =
          newPage === 1 ? theme.palette.grey[300] : theme.palette.grey[700];
        const strokeRight =
          newPage >= pageSize
            ? theme.palette.grey[300]
            : theme.palette.grey[700];
        return (
          <PaginationActions language={language}>
            <IconButton
              color="standard"
              size="small"
              disabled={newPage === 1}
              onClick={(event) => params.onPageChange(event, 1)}
            >
              <Svgs.IconChevronLeftDouble stroke={strokeLeft} />
            </IconButton>
            <IconButton
              color="standard"
              size="small"
              disabled={newPage === 1}
              onClick={(event) => params.onPageChange(event, newPage - 1)}
            >
              <Svgs.IconChevronLeft stroke={strokeLeft} />
            </IconButton>
            <MuiPagination
              hidePrevButton
              hideNextButton
              variant="outlined"
              shape="rounded"
              count={pageSize}
              page={newPage}
              onChange={handleChangePage}
            />
            <IconButton
              color="standard"
              size="small"
              disabled={newPage >= pageSize}
              onClick={(event) => params.onPageChange(event, newPage + 1)}
            >
              <Svgs.IconChevronRight stroke={strokeRight} />
            </IconButton>
            <IconButton
              color="standard"
              size="small"
              disabled={newPage >= pageSize}
              onClick={(event) =>
                params.onPageChange(event, Math.max(0, pageSize))
              }
            >
              <Svgs.IconChevronRightDouble stroke={strokeRight} />
            </IconButton>
          </PaginationActions>
        );
      }}
    />
  );
};

export { Pagination };
