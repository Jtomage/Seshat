import type { FC, ReactElement } from "react";

import FolderOpenOutlinedIconOutlined from "@mui/icons-material/FolderOpenOutlined";
import InsertDriveFileIconOutlined from "@mui/icons-material/InsertDriveFileOutlined";
import {
  Checkbox,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import type { FileListModes, SelectableSystemItem } from "./FileList.types";

import { listItemIconSx } from "./FileList.styles";

export interface FileListItemProps {
  fileListMode: FileListModes;
  item: SelectableSystemItem;
  /**
   * on checkbox change callback to handle when checkbox is clicked
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

export const FileListItem: FC<FileListItemProps> = ({
  fileListMode,
  item,
  onCheckboxChange,
  onItemClicked,
}) => {
  const wrapCheckbox = (itemInternals: ReactElement): ReactElement => {
    if (fileListMode !== "readonly")
      return (
        <ListItemButton
          dense
          onClick={() => {
            if (onItemClicked) onItemClicked(item.id);
          }}
          selected={fileListMode === "multiSelect" ? item.selected : false}
        >
          {fileListMode === "multiSelect" && (
            <ListItemIcon sx={listItemIconSx}>
              <Checkbox
                aria-labelledby={item.id}
                checked={item.selected}
                disableRipple
                onChange={() => {
                  if (onCheckboxChange) onCheckboxChange(item.id);
                }}
                size="small"
                sx={{ padding: 0 }}
              />
            </ListItemIcon>
          )}
          {itemInternals}
        </ListItemButton>
      );
    else return itemInternals;
  };

  return (
    <ListItem component="div" disablePadding divider>
      {wrapCheckbox(
        <>
          <ListItemIcon sx={listItemIconSx}>
            {item.isDirectory && (
              <FolderOpenOutlinedIconOutlined fontSize="small" />
            )}
            {!item.isDirectory && (
              <InsertDriveFileIconOutlined fontSize="small" />
            )}
          </ListItemIcon>
          <ListItemText primary={item.label} />
        </>
      )}
    </ListItem>
  );
};
