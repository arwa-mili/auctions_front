import { styled, TableRow } from "@mui/material";
import { AlignItems } from "./sortableItem.types";

const SIZE_CURSOR = 24;

export const ItemListLi = styled("li")(({ theme }) => ({
  listStyle: "none",
}));

export const ItemListTr = styled(TableRow)(({ theme }) => ({
  cursor: "auto",
}));

export const Cursor = styled("div")<{ cursor?: string; alignItems?: AlignItems }>(({ theme, cursor, alignItems }) => ({
  cursor: cursor || "grab",
  height: SIZE_CURSOR,
  width: SIZE_CURSOR,
  display: "flex",
  justifyContent: "center",
  alignItems: alignItems || "center",
}));
