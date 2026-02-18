import type { FC } from "react";

import { List } from "@mui/material";

import type { SelectableSystemItem } from "./FileList.types";

import { FileListItem } from "./FileListItem";

export interface FileListProps {
  enableCheckboxes: boolean;
  items: SelectableSystemItem[];
  onChange: (id: string) => void;
}

export const FileList: FC<FileListProps> = ({
  enableCheckboxes = false,
  items,
  onChange,
}) => {
  return (
    <List dense sx={{ bgcolor: `background.paper` }}>
      {items.map((item) => {
        return (
          <FileListItem
            enableCheckbox={enableCheckboxes}
            item={item}
            key={item.id}
            onCheckboxChange={(id: string) => {
              onChange(id);
            }}
          />
        );
      })}
    </List>
  );
};
