import { Box, Typography } from "@mui/material";
//constants
import { Svgs } from "../../svgs";
//components
import { SortableList } from "../sortableList/sortableList";
import { DataTableColumn } from "../../commons";
//styles
import { CustomTableCell, HeadTableCell } from "./sortableTable.styles";
//types
import { BaseItem } from "../sortableList/sortableList.types";
import {
  SortableTableProps,
  ColumnCellSortableTable,
} from "./sortableTable.types";

function SortableTable<T extends BaseItem>(
  props: SortableTableProps<T>
): JSX.Element {
  const {
    t,
    size,
    sx,
    columns,
    loading,
    data,
    onChange,
    onClickItemRow,
    getFields,
    renderListEmpty,
  } = props;

  //functions
  const onClickItem = (item: T, index: number) => () => {
    onClickItemRow?.({ item, index });
  };
  //render
  const renderColumns = () => {
    return columns.map((headCell, index) => {
      if (index === 0) {
        return (
          <HeadTableCell key={index} align={headCell.align || "left"}>
            <Box display="flex" alignItems="center" gap={1}>
              <Svgs.IconDragIndicator
                fontSize="small"
                sx={{ color: "grey.400" }}
              />
              <Typography
                fontSize={12}
                fontWeight={500}
                color="grey.600"
                ml={1}
              >
                {t(headCell.label || "")}
              </Typography>
            </Box>
          </HeadTableCell>
        );
      }
      return (
        <HeadTableCell key={index} align={headCell.align || "left"}>
          <Typography variant="inherit">{t(headCell.label || "")}</Typography>
        </HeadTableCell>
      );
    });
  };

  const renderRowItem = (item: T, iterator: number) => {
    const isLast = iterator + 1 === data.length;
    return (
      <SortableList.Item
        key={item.id}
        id={item.id}
        component="tr"
        onClick={onClickItem(item, iterator)}
      >
        {getFields(item, iterator).map((o, index) => (
          <CustomTableCell
            key={index}
            component="td"
            align={o.align || "left"}
            sx={{ borderBottom: isLast ? "none" : undefined }}
          >
            <Box
              justifyContent={o.align}
              display="flex"
              alignItems="center"
              gap={1}
            >
              {index === 0 && <SortableList.DragHandle />}

              <DataTableColumn {...o} />
            </Box>
          </CustomTableCell>
        ))}
      </SortableList.Item>
    );
  };

  if (data.length === 0 && !loading && renderListEmpty) {
    return <>{renderListEmpty()}</>;
  }
  return (
    <SortableList
      type="TABLE"
      size={size}
      sx={sx}
      loading={loading}
      columnsCount={columns.length}
      items={data}
      onChange={onChange}
      renderItem={renderRowItem}
      renderHeadTable={renderColumns}
    />
  );
}

export { SortableTable, type ColumnCellSortableTable };
