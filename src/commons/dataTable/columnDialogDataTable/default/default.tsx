import { useMemo } from "react";
import { Checkbox, Grid } from "@mui/material";
//styles
import { Container, FormControlLabel } from "./defalut.styles";
//types
import { DefaultProps } from "./default.types";

function Default<T>(props: DefaultProps<T>): JSX.Element {
  const { t, columns, onChangeColumns } = props;

  const totalChecked = useMemo(() => {
    let total = 0;
    columns.forEach((element) => {
      if (element.displayed && element.type !== "reactNode") {
        total = total + 1;
      }
    });
    return total;
  }, [columns]);

  const onClickCheckbox =
    (id?: keyof T) =>
    (_event: React.SyntheticEvent<Element, Event>, checked: boolean) => {
      const newColumns = columns.map((column) =>
        column.id === id ? { ...column, displayed: checked } : column
      );
      onChangeColumns(newColumns);
    };

  //render
  const renderColumnCheckboxes = () => {
    return columns.map((column, index) => {
      if (column.type !== "label") {
        return null;
      }
      const disabled = totalChecked === 2 && column.displayed;
      return (
        <Grid key={index} item xs={4}>
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                disabled={disabled}
                checked={column.displayed}
                color="secondary"
              />
            }
            label={t(column.label)}
            onChange={onClickCheckbox(column.id)}
          />
        </Grid>
      );
    });
  };
  return (
    <Container container spacing={2}>
      {renderColumnCheckboxes()}
    </Container>
  );
}

export default Default;
