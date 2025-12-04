import type { UniqueIdentifier } from "@dnd-kit/core";
import { SxProps, Theme } from "@mui/material";
import type { ReactNode } from "react";

export interface BaseItem {
  id: UniqueIdentifier;
}

type GridProps = { type: "GRID" } & {
  renderFixedItem?: () => ReactNode;
  size?: { xl?: number; lg?: number; md?: number; sm?: number; xs?: number };
};
type ListProps = { type: "LIST" } & {
  renderFixedItem?: () => ReactNode;
};
type TableProps = { type: "TABLE" } & {
  loading?: boolean;
  columnsCount?: number;
  size?: "medium" | "small";
  renderHeadTable: () => ReactNode;
};

export type SortableListProps<T extends BaseItem> = {
  type: "LIST" | "GRID" | "TABLE";

  items: T[];
  sx?: SxProps<Theme>;
  onChange: (items: T[], activeIndex: number, overIndex: number) => void;
  renderItem: (item: T, index: number) => ReactNode;
} & (GridProps | ListProps | TableProps);
