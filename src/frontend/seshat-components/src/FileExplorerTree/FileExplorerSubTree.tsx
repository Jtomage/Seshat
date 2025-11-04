import {
  FlatTreeItem,
  TreeItemLayout,
  type TreeItemOpenChangeData,
  type TreeItemOpenChangeEvent,
  type TreeItemValue,
} from "@fluentui/react-components";
import { type FC, useState } from "react";

export interface FlieExplorerSubTreeProps {
  onDataLoaded?: () => void;
  onDataLoading?: () => void;
  value: TreeItemValue;
}

export const FlieExplorerSubTree: FC<FlieExplorerSubTreeProps> = ({
  onDataLoaded,
  onDataLoading,
  value,
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
        aria-level={1}
        aria-posinset={1}
        aria-setsize={3}
        itemType="branch"
        onOpenChange={openChangeHandler}
        open={open}
        value={value}
      >
        <TreeItemLayout>{value.toString()}</TreeItemLayout>
      </FlatTreeItem>
    </>
  );
};
