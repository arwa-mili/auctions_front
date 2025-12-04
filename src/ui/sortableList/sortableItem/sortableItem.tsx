import { FC, createContext, useContext, useMemo } from "react";
import type { CSSProperties, PropsWithChildren } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
//constants
import { Svgs } from "../../../svgs";
//styles
import { Cursor, ItemListLi, ItemListTr } from "./sortableItem.styles";
//types
import {
  Context,
  DragHandleProps,
  SortableItemProps,
} from "./sortableItem.types";

const SortableItemContext = createContext<Context>({
  attributes: {},
  isDragging: false,
  listeners: undefined,
  ref() {},
});

export const SortableItem: FC<PropsWithChildren<SortableItemProps>> = ({
  children,
  id,
  component,
  disabled,
  onClick,
  sx,
}) => {
  const {
    attributes,
    isDragging,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
  } = useSortable({ id, disabled });
  const context = useMemo(
    () => ({
      attributes,
      listeners,
      isDragging,
      ref: setActivatorNodeRef,
    }),
    [attributes, listeners, setActivatorNodeRef]
  );
  const style: CSSProperties = {
    opacity: isDragging ? 0.4 : undefined,
    transform: CSS.Translate.toString(transform),
    transition,
  };
  const onClickItemTr = (
    event: React.MouseEvent<HTMLTableRowElement, MouseEvent>
  ) => {
    event.stopPropagation();
    onClick?.();
  };
  const onClickItemLi = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    event.stopPropagation();
    onClick?.();
  };
  const renderContent = () => {
    if (component === "tr") {
      return (
        <ItemListTr
          ref={setNodeRef}
          style={{ ...style, height: 50 }}
          hover
          tabIndex={-1}
          onClick={onClickItemTr}
        >
          {children}
        </ItemListTr>
      );
    }
    return (
      <ItemListLi
        ref={setNodeRef}
        style={style}
        sx={sx}
        onClick={onClickItemLi}
      >
        {children}
      </ItemListLi>
    );
  };
  return (
    <SortableItemContext.Provider value={context}>
      {renderContent()}
    </SortableItemContext.Provider>
  );
};

export const DragHandle: FC<DragHandleProps> = ({
  alignItems,
  disableChangeIconDragging,
  children,
}) => {
  const { attributes, listeners, isDragging, ref } =
    useContext(SortableItemContext);
  const renderContent = () => {
    if (children) return children;
    else if (isDragging && !disableChangeIconDragging)
      return <Svgs.IconMove sx={{ fontSize: 16 }} stroke="#173BB6" />;
    return (
      <Svgs.IconDragIndicator fontSize="small" sx={{ color: "grey.400" }} />
    );
  };
  return (
    <Cursor
      cursor="move"
      {...attributes}
      {...listeners}
      ref={ref}
      alignItems={alignItems}
    >
      {renderContent()}
    </Cursor>
  );
};
