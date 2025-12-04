import {
  Checkbox,
  Stack,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  useTheme,
} from "@mui/material";
import { useMemo } from "react";
//
import { Svgs } from "../../../svgs";
//Types
import { ColumnCell, HeadTableProps } from "./headDataTable.types";

function HeadDataTable<T>(props: HeadTableProps<T>): JSX.Element {
  const {
    t,
    alignHead,
    columns,
    checkboxValues,
    hideCheckbox,
    order,
    orderBy,
    onRequestSort,
    onChangeCheckBox,
  } = props;
  const theme = useTheme();
  const spacing = useMemo(() => (hideCheckbox ? "0 16px" : 0), [hideCheckbox]);
  //functions
  const createSortHandler =
    (property?: keyof T) => (event: React.MouseEvent<unknown>) => {
      event.stopPropagation();
      onRequestSort(event, property);
    };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    if (onChangeCheckBox) {
      onChangeCheckBox({ value: event.target.checked });
    }
  };
  //render
  const renderConent = (headCell: ColumnCell<T>) => {
    if (headCell.type === "reactNode") {
      return headCell.node || null;
    } else if (headCell.type === "label") {
      return (
        <TableSortLabel
          active={orderBy === headCell.id}
          direction={orderBy === headCell.id ? order : "asc"}
          onClick={createSortHandler(headCell.id)}
          title={t(headCell.label)}
        >
          {headCell.label && t(headCell.label)}
          {headCell.tooltip && (
            <Tooltip arrow placement="top-start" title={t(headCell.tooltip)}>
              <Stack justifyContent="center" alignItems="center" ml={1}>
                <Svgs.IconInfoCircle
                  fontSize="small"
                  stroke={theme.palette.grey[500]}
                />
              </Stack>
            </Tooltip>
          )}
        </TableSortLabel>
      );
    }
    return null;
  };
  const renderColumns = () => {
    return columns.map((headCell, index) => {
      return (
        <TableCell
          key={index}
          align={headCell.align || alignHead || "left"}
          sx={{ padding: spacing }}
          sortDirection={orderBy === headCell.id ? order : false}
        >
          {renderConent(headCell)}
        </TableCell>
      );
    });
  };
  const renderCheckbox = () => {
    if (hideCheckbox) {
      return null;
    }
    return (
      <TableCell width={42} padding="none" align="center" sx={{ pr: 2 }}>
        <Checkbox
          edge="end"
          indeterminate={checkboxValues?.indeterminate}
          checked={checkboxValues?.checked || false}
          onChange={handleChange}
          inputProps={{ "aria-label": "select all" }}
        />
      </TableCell>
    );
  };
  return (
    <TableHead>
      <TableRow>
        {renderCheckbox()}
        {renderColumns()}
      </TableRow>
    </TableHead>
  );
}

export { HeadDataTable };
