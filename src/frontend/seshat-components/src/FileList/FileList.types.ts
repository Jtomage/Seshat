import type { SystemItemInfo } from "../models";

export interface SelectableSystemItem extends SystemItemInfo {
  selected: boolean;
}
