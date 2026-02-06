import type { FC } from "react";

import {
  RichTreeView,
  type RichTreeViewProps,
  type TreeViewDefaultItemModelProperties,
} from "@mui/x-tree-view";

export type FolderExplorerTreeProps = Omit<
  RichTreeViewProps<TreeViewDefaultItemModelProperties, false>,
  "checkboxSelection"
>;

export const FolderExplorerTree: FC<FolderExplorerTreeProps> = (
  props: FolderExplorerTreeProps
) => {
  return <RichTreeView {...props}></RichTreeView>;
};
