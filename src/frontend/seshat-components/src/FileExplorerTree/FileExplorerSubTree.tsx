import {
  FlatTreeItem,
  TreeItemLayout,
  type TreeItemOpenChangeData,
  type TreeItemOpenChangeEvent,
  type TreeItemValue,
} from "@fluentui/react-components";
import { useState, type FC } from "react";

export interface FlieExplorerSubTreeProps {
  value: TreeItemValue;
  onDataLoading?: () => void;
  onDataLoaded?: () => void;
}

export const FlieExplorerSubTree: FC<FlieExplorerSubTreeProps> = ({
  value,
  onDataLoading,
  onDataLoaded,
}: FlieExplorerSubTreeProps) => {
  const [open, setOpen] = useState(false);

  const openChangeHandler = (
    e: TreeItemOpenChangeEvent,
    data: TreeItemOpenChangeData,
  ) => {
    setOpen(data.open);
  };

  return (
    <>
      <FlatTreeItem
        itemType="branch"
        value={value}
        aria-level={1}
        aria-setsize={3}
        aria-posinset={1}
        open={open}
        onOpenChange={openChangeHandler}
      >
        <TreeItemLayout>{value.toString()}</TreeItemLayout>
      </FlatTreeItem>
    </>
  );
};
