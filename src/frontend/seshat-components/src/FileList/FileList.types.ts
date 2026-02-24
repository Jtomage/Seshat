import type { SystemItemInfo } from "../models";

export type FileListModes = "multiSelect" | "readonly" | "singleSelect";

export interface SelectableSystemItem extends SystemItemInfo {
  selected: boolean;
}
