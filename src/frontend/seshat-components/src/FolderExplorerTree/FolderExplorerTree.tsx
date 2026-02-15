import { RichTreeView, type RichTreeViewProps } from "@mui/x-tree-view";
import { type FC, useMemo } from "react";

import { type SystemItemNode, SystemItemTree } from "../models";

export type FolderExplorerTreeProps = Omit<
  RichTreeViewProps<SystemItemNode, false>,
  "checkboxSelection" | "items"
> & {
  tree: SystemItemTree;
};

export const FolderExplorerTree: FC<FolderExplorerTreeProps> = ({
  tree,
  ...rest
}: FolderExplorerTreeProps) => {
  const directories = useMemo(() => {
    return tree.getOnlyFolders();
  }, [tree]);

  return <RichTreeView items={directories} {...rest}></RichTreeView>;
};
