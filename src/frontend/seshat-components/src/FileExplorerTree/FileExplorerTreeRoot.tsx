import {
  FlatTree,
  FlatTreeItem,
  TreeItemLayout,
  type TreeItemOpenChangeData,
} from "@fluentui/react-components";
import { type FC, useContext } from "react";

import { FileExplorerContext } from "../FileExplorerProvider";
import { type FileTreeItem } from "./FileExplorerTree.types";
import { FlieExplorerTreeItem } from "./FileExplorerTreeItem";

export const FileExplorerTreeRoot: FC = () => {
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

  const fileExplorerService = useContext(FileExplorerContext);

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
};
