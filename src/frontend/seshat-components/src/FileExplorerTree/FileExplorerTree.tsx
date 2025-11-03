import {
  FlatTree,
  FlatTreeItem,
  TreeItemLayout,
  type TreeItemValue,
} from "@fluentui/react-components";
// import { FlieExplorerSubTree } from "./FileExplorerSubTree";
import type { FC } from "react";

export const FileExplorerTree: FC = () => {
  return (
    <FlatTree>
      <FlatTreeItem
        value="0"
        aria-level={1}
        aria-setsize={2}
        aria-posinset={1}
        itemType="branch"
      >
        <TreeItemLayout>0</TreeItemLayout>
      </FlatTreeItem>
    </FlatTree>
  );
};
