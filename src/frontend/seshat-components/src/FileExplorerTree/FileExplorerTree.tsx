import {
  FlatTree,
  FlatTreeItem,
  TreeItemLayout,
  type TreeItemOpenChangeData,
  type TreeItemValue,
} from "@fluentui/react-components";
// import { FlieExplorerSubTree } from "./FileExplorerSubTree";
import { type FC, useState } from "react";

export const FileExplorerTree: FC = () => {
  const [openItems, setOpenItems] = useState<boolean>(false);

  const handlerOpenItem = (_: unknown, data: TreeItemOpenChangeData) => {
    setOpenItems(data.open);
  };

  return (
    <FlatTree>
      <FlatTreeItem
        aria-level={1}
        aria-posinset={1}
        aria-setsize={2}
        itemType="branch"
        onOpenChange={handlerOpenItem}
        open={openItems}
        value="0"
      >
        <TreeItemLayout>0</TreeItemLayout>
      </FlatTreeItem>
      {openItems && (
        <>
          <FlatTreeItem
            aria-level={2}
            aria-posinset={1}
            aria-setsize={2}
            itemType="branch"
            parentValue="0"
            value="1"
          >
            <TreeItemLayout>1</TreeItemLayout>
          </FlatTreeItem>
        </>
      )}
    </FlatTree>
  );
};
