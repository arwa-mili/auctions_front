import { Fragment } from "react";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
//material
import {
  Grid,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Skeleton,
} from "@mui/material";
//components
import { DragHandle, SortableItem } from "./sortableItem/sortableItem";
//styles
import { List } from "./sortableList.styles";
//types
import { BaseItem, SortableListProps } from "./sortableList.types";

export function SortableList<T extends BaseItem>(props: SortableListProps<T>) {
  const { type, items, onChange, renderItem } = props;

  //functions
  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over?.id) {
      const activeIndex = items.findIndex(({ id }) => id === active.id);
      const overIndex = items.findIndex(({ id }) => id === over.id);
      const newItems = arrayMove(items, activeIndex, overIndex);
      onChange(newItems, activeIndex, overIndex);
    }
  };

  //render
  if (type === "GRID") {
    const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));
    const {
      renderFixedItem,
      sx,
      size = { xl: 3, lg: 4, md: 6, sm: 6, xs: 12 },
    } = props;
    return (
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={onDragEnd}
      >
        <SortableContext items={items} strategy={rectSortingStrategy}>
          <Grid container spacing={2} sx={sx}>
            {renderFixedItem && (
              <Grid item {...size}>
                {renderFixedItem()}
              </Grid>
            )}
            {items.map((item, index) => (
              <Grid item {...size}>
                {renderItem(item, index)}
              </Grid>
            ))}
          </Grid>
        </SortableContext>
      </DndContext>
    );
  } else if (type === "TABLE") {
    const sensors = useSensors(
      useSensor(PointerSensor),
      useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates,
      })
    );
    const {
      size = "medium",
      renderHeadTable,
      loading,
      columnsCount,
      sx,
    } = props;

    const renderContent = () => {
      if (loading && columnsCount) {
        return new Array(10).fill(10).map((_, index) => {
          return (
            <TableRow key={index} sx={{ height: 72 }}>
              {new Array(columnsCount).fill(columnsCount).map((_, i) => (
                <TableCell key={i} align="left">
                  <Skeleton animation="wave" width="50%" />
                </TableCell>
              ))}
            </TableRow>
          );
        });
      }
      return items.map((item, index) => renderItem(item, index));
    };

    return (
      <DndContext sensors={sensors} onDragEnd={onDragEnd}>
        <SortableContext items={items}>
          <TableContainer sx={sx}>
            <Table size={size}>
              <TableHead>
                <TableRow>{renderHeadTable()}</TableRow>
              </TableHead>
              <TableBody>{renderContent()}</TableBody>
            </Table>
          </TableContainer>
        </SortableContext>
      </DndContext>
    );
  }
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  const { renderFixedItem, sx } = props;
  return (
    <DndContext sensors={sensors} onDragEnd={onDragEnd}>
      <SortableContext items={items}>
        <List sx={sx}>
          {renderFixedItem?.()}
          {items.map((item, index) => (
            <Fragment key={item.id}>{renderItem(item, index)}</Fragment>
          ))}
        </List>
      </SortableContext>
    </DndContext>
  );
}

SortableList.Item = SortableItem;
SortableList.DragHandle = DragHandle;
