import { Skeleton, Stack, TableCell, TableRow } from "@mui/material";
//types
import { LoaderRowDataTableProps } from "./loaderRowDataTable.types";

const LoaderRowDataTable: React.FC<LoaderRowDataTableProps> = (props) => {
  const { limit, hideCheckbox, columns } = props;

  return new Array(limit).fill(limit).map((_, index) => {
    return (
      <TableRow key={index}>
        {!hideCheckbox && (
          <TableCell>
            <Stack
              direction="row"
              alignItems="flex-end"
              justifyContent="flex-end"
            >
              <Skeleton animation="wave" width="100%" />
            </Stack>
          </TableCell>
        )}
        {columns.map((_, i) => (
          <TableCell key={i} align="left">
            <Skeleton animation="wave" width="50%" />
          </TableCell>
        ))}
      </TableRow>
    );
  });
};

export { LoaderRowDataTable };
