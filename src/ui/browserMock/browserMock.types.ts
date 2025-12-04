import { UploadFile } from "../../commons";

export type BrowserMockProps = {
  title?: string;
  url?: string;
  favicon?: UploadFile | string | null;
  children?: React.ReactNode;
  mode?: "LIGHT" | "DARK";
};
