import type { FC } from "react";

import { List } from "@mui/material";

import type { FileListModes, SelectableSystemItem } from "./FileList.types";

import { FileListItem } from "./FileListItem";

export interface FileListProps {
  fileListMode: FileListModes;
  items: SelectableSystemItem[];
  /**
   * on checkbox change call back
   * @param id the id of the item of the checkbox that changed
   * @returns
   */
  onCheckboxChange?: (id: string) => void;
  /**
   * on item clicked to handle when item / row is clicked
   * @param id
   * @returns
   */
  onItemClicked?: (id: string) => void;
}

export const FileList: FC<FileListProps> = ({
  fileListMode = "readonly",
  items,
  onCheckboxChange,
  onItemClicked,
}) => {
  return (
    <List dense sx={{ bgcolor: `background.paper` }}>
      {items.map((item) => {
        return (
          <FileListItem
            fileListMode={fileListMode}
            item={item}
            key={item.id}
            onCheckboxChange={onCheckboxChange}
            onItemClicked={onItemClicked}
          />
        );
      })}
    </List>
  );
};
