import { FC, forwardRef, Fragment } from "react";
import { Box, TableBody, TableRow, Typography, useTheme } from "@mui/material";
//styles
import { Table, TableCell, TableHead } from "./tooltipTable.styles";

//types
export type TooltipTableProps = {
  columns: Array<any>;
  data: Array<any>;
  renderItem: (params: {
    item: any;
    index: number;
    last?: boolean;
  }) => React.ReactNode;
};
export type TooltipRowDataTableProps = {
  fields: Array<{ node: React.ReactNode }>;
  last?: boolean;
};

const TooltipTable = forwardRef((props: TooltipTableProps, ref) => {
  const { columns, data, renderItem } = props;
  const theme = useTheme();
  //render
  return (
    <Box ref={ref} maxHeight={320} overflow="auto">
      <Table size="small" aria-label="tooltip table">
        <TableHead sx={{ background: "transparent" }}>
          <TableRow>
            {columns.map((item, index) => (
              <TableCell component="th" key={index}>
                <Typography
                  fontSize={12}
                  fontWeight="600"
                  color={theme.palette.common.white}
                >
                  {item}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <Fragment key={index}>
              {renderItem({ item, index, last: data.length === index + 1 })}
            </Fragment>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
});

const TooltipRowDataTable: FC<TooltipRowDataTableProps> = (props) => {
  const { fields, last } = props;
  return (
    <TableRow>
      {fields.map((field, index) => (
        <TableCell key={index} sx={{ borderBottom: last ? "none" : undefined }}>
          {field.node}
        </TableCell>
      ))}
    </TableRow>
  );
};

export { TooltipTable, TooltipRowDataTable };
