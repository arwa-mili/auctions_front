import { GridSize, SxProps, Theme } from "@mui/material";

export type DataListProps<T> = {
  data: Array<T>;
  loading?: boolean;
  placeholderLoader?: React.ReactNode;
  numberPlaceholder?: number;
  sx?: SxProps<Theme>;
  renderListHeaderComponent?: () => React.ReactNode;
  renderItem: (params: RenderItemDataListProps<T>) => React.ReactNode;
  renderListEmptyComponent?: () => React.ReactNode;
  renderListFooterComponent?: () => React.ReactNode;
} & (ListProps | GridProps);

type ListProps = { mode: "LIST" } & {
  gap?: number;
  sxContentList?: SxProps<Theme>;
};

type GridProps = { mode: "GRID" } & {
  spacing?: number;
  p?: number;
  sxContentGrid?: SxProps<Theme>;
  breakpoints?: {
    xl?: boolean | GridSize;
    lg?: boolean | GridSize;
    md?: boolean | GridSize;
    sm?: boolean | GridSize;
    xs?: boolean | GridSize;
  };
};

export type RenderItemDataListProps<T> = {
  item: T;
  index: number;
};
