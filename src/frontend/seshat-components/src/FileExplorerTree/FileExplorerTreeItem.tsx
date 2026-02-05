// import {
//   FlatTreeItem,
//   TreeItemLayout,
//   type TreeItemOpenChangeData,
//   type TreeItemOpenChangeEvent,
// } from "@fluentui/react-components";
// import { type FC, use, useState } from "react";

// import type { FileTreeItem } from "./FileExplorerTree.types";

// import { FileExplorerContext } from "../FileExplorerProvider";

// export type FileExplorerTreeItemProps = FileTreeItem & {
//   level: number;
//   numSibilings: number;
//   position: number;
// };

// export const FlieExplorerTreeItem: FC<FileExplorerTreeItemProps> = ({
//   fullPath,
//   isDirectory,
//   itemName,
//   level,
//   numSibilings,
//   position,
// }: FileExplorerTreeItemProps) => {
//   const fileExplorerContext = use(FileExplorerContext);
//   fileExplorerContext.const[(open, setOpen)] = useState(false);

//   const parentValue = () => {
//     const i = fullPath.lastIndexOf(itemName);
//     return fullPath.slice(0, i - 1);
//   };

//   const openChangeHandler = (
//     _: TreeItemOpenChangeEvent,
//     data: TreeItemOpenChangeData
//   ) => {
//     setOpen(data.open);
//   };

//   return (
//     <>
//       <FlatTreeItem
//         aria-level={level}
//         aria-posinset={position}
//         aria-setsize={numSibilings}
//         itemType="branch"
//         onOpenChange={openChangeHandler}
//         open={open}
//         parentValue={parentValue()}
//         value={fullPath}
//       >
//         <TreeItemLayout>{itemName}</TreeItemLayout>
//       </FlatTreeItem>
//     </>
//   );
// };
