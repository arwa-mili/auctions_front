import { SxProps, Theme } from "@mui/material";
import type {
  DraggableSyntheticListeners,
  UniqueIdentifier,
} from "@dnd-kit/core";

export interface SortableItemProps {
  id: UniqueIdentifier;
  component?: "tr" | "li";
  disabled?: boolean;
  sx?: SxProps<Theme>;
  onClick?: () => void;
}

export interface Context {
  isDragging?: boolean;
  attributes: Record<string, any>;
  listeners: DraggableSyntheticListeners;
  ref(node: HTMLElement | null): void;
}

export type DragHandleProps = {
  alignItems?: AlignItems;
  children?: React.ReactNode;
  disableChangeIconDragging?: boolean;
};
export type AlignItems =
  | "center"
  | "end"
  | "flex-end"
  | "flex-start"
  | "self-end"
  | "self-start"
  | "start";
