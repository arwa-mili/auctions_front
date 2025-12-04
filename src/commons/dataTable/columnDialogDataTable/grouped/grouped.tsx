import { useMemo } from "react";
import { Checkbox, Typography } from "@mui/material";
//components
import { ColumnCell } from "../../headDataTable/headDataTable.types";
//styles
import { Column, Container, FormControlLabel } from "./grouped.styles";
//types
import { GroupedProps } from "./grouped.types";
import { groupColumnList } from "./grouped.utils";


function Grouped<T>(props: GroupedProps<T>): JSX.Element {
  const { t, columns, onChangeColumns } = props;

  const cataColumnGrouped = useMemo(() => groupColumnList(columns), [columns]);

  const totalChecked = useMemo(() => {
    let total = 0;
    columns.forEach(element => {
      if (element.displayed && element.type !== "reactNode") {
        total = total + 1;
      }
    });
    return total;
  }, [columns]);

  const onClickCheckbox = (id?: keyof T) => (_event: React.SyntheticEvent<Element, Event>, checked: boolean) => {
    const newColumns = columns.map(column => (column.id === id ? { ...column, displayed: checked } : column));
    onChangeColumns(newColumns);
  };

  //render
  const renderColumnCheckboxes = (data: Array<ColumnCell<T>>) => {
    return data.map((column, index) => {
      if (column.type !== "label") {
        return null;
      }
      const disabled = totalChecked === 2 && column.displayed;
      return (
        <FormControlLabel
          key={index}
          control={<Checkbox disabled={disabled} checked={column.displayed} color="secondary" />}
          label={t(column.label)}
          onChange={onClickCheckbox(column.id)}
        />
      );
    });
  };
  const renderGroups = () => {
    return cataColumnGrouped.map(group => {
      return (
        <Column key={group.group} flex={1} gap={1}>
          <Typography fontSize={16} mb={1} fontWeight="600" color="grey.800">
            {t(group.label)}
          </Typography>
          {renderColumnCheckboxes(group.data)}
        </Column>
      );
    });
  };
  return <Container>{renderGroups()}</Container>;
}

export default Grouped;
