import { FC, useMemo } from "react";
//Material UI
import { Checkbox } from "@mui/material";
//Components
import { DataTableColumn } from "../dataTableColumn/dataTableColumn";
//Styles
import { CustomTableCell } from "./rowDataTable.styles";
//Types
import { RowDataTableProps } from "./rowDataTable.types";

const RowDataTable: FC<RowDataTableProps> = (props) => {
  const { fields, hideCheckbox, checked, onChangeCheckBox } = props;
  //memos
  const spacing = useMemo(
    () => (hideCheckbox ? "4px 16px" : "4px 8px 4px 0"),
    [hideCheckbox]
  );

  //functions
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChangeCheckBox) {
      onChangeCheckBox(event.target.checked);
    }
  };
  //render
  const renderCheckbox = () => {
    if (hideCheckbox) {
      return null;
    }
    return (
      <CustomTableCell padding="none" width={42} align="center" sx={{ pr: 2 }}>
        <Checkbox
          edge="end"
          checked={checked}
          onChange={handleChange}
          onClick={(e) => e.stopPropagation()}
        />
      </CustomTableCell>
    );
  };
  return (
    <>
      {renderCheckbox()}
      {fields
        .filter((o) => o.displayed)
        .map((item, index) => (
          <CustomTableCell
            key={index}
            spacing={spacing}
            component="td"
            align={item.align || "left"}
            sx={(theme) => ({
              ...item.style,
              borderLeft: item.isNew
                ? `4px solid ${theme.palette.success.main}`
                : undefined,
              minWidth: item.minWidth,
            })}
          >
            <DataTableColumn {...item} />
          </CustomTableCell>
        ))}
    </>
  );
};
export { RowDataTable };
