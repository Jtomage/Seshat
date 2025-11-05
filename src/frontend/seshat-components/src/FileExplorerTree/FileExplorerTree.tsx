import {
  FlatTree,
  FlatTreeItem,
  TreeItemLayout,
  type TreeItemOpenChangeData,
} from "@fluentui/react-components";
import { type FC, useState } from "react";
import { type FileTreeItem } from "./FileExplorerTree.types";
import { FlieExplorerTreeItem } from "./FileExplorerTreeItem";

export const FileExplorerTree: FC = () => {
  const fileItems: FileTreeItem[] = [
    {
      fullPath: "home",
      isDirectory: true,
      itemName: "home",
      level: 0,
    },
    {
      fullPath: "usr",
      isDirectory: true,
      itemName: "usr",
      level: 0,
    },
    {
      fullPath: "bin",
      isDirectory: true,
      itemName: "bin",
      level: 0,
    },
  ];

  const [openItems, setOpenItems] = useState<boolean>(false);

  const handlerOpenItem = (_: unknown, data: TreeItemOpenChangeData) => {
    setOpenItems(data.open);
  };

  return (
    <FlatTree>
      {fileItems.map((v, i) => (
        <FlieExplorerTreeItem
          {...v}
          numSibilings={fileItems.length}
          position={i}
        />
      ))}
    </FlatTree>
  );

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
