import { Box, BoxProps, styled } from "@mui/material";
import { ColorInputProps } from "./inputEditor.types";

export const InputEditorContainer = styled(Box)<
  BoxProps & {
    minHeight?: number | string;
    isdisabled: "true" | "false";
    bordercolor?: ColorInputProps;
  }
>`
  border-radius: 8px;
  border: ${({ theme }) => `1px solid ${theme.palette?.grey[50]}`};
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  background: #ffffff;
  margin-top: 8px;
  word-break: break-all;
  .ql-toolbar.ql-snow {
    border: ${({ theme, bordercolor }) =>
      `1px solid ${bordercolor ? theme.palette?.[bordercolor].light : "#ccc"}`};
    background: ${({ isdisabled, theme }) =>
      isdisabled === "true"
        ? theme.palette.grey[50]
        : theme.palette.background.paper};
    box-sizing: border-box;
    /* font-family: "Inter", "Roboto", "Noto Kufi Arabic"; */
    padding: 8px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }

  .ql-toolbar.ql-snow + .ql-container.ql-snow {
    background: ${({ isdisabled, theme }) =>
      isdisabled === "true"
        ? theme.palette.grey[50]
        : theme.palette.background.paper};
    border-top: 0px;
    border-right: ${({ theme, bordercolor }) =>
      `1px solid ${bordercolor ? theme.palette?.[bordercolor].light : "#ccc"}`};
    border-left: ${({ theme, bordercolor }) =>
      `1px solid ${bordercolor ? theme.palette?.[bordercolor].light : "#ccc"}`};
    border-bottom: ${({ theme, bordercolor }) =>
      `1px solid ${bordercolor ? theme.palette?.[bordercolor].light : "#ccc"}`};
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    /* min-height: ${({ minHeight }) => minHeight || "60px"}; */
  }

  .ql-editor {
    font-family: Inter;
    min-height: ${({ minHeight }) => minHeight || "60px"};
  }
`;
