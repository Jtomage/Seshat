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

import type { SelectableSystemItem } from "./FileList.types";

import { listItemIconSx } from "./FileList.styles";

export interface FileListItemProps {
  enableCheckbox: boolean;
  item: SelectableSystemItem;
  onCheckboxChange: (id: string) => void;
}

export const FileListItem: FC<FileListItemProps> = ({
  enableCheckbox = false,
  item,
  onCheckboxChange,
}) => {
  const wrapCheckbox = (itemInternals: ReactElement): ReactElement => {
    if (enableCheckbox)
      return (
        <ListItemButton dense selected={item.selected}>
          <ListItemIcon sx={listItemIconSx}>
            <Checkbox
              aria-labelledby={item.id}
              checked={item.selected}
              disableRipple
              onChange={() => {
                onCheckboxChange(item.id);
              }}
              size="small"
              sx={{ padding: 0 }}
            />
          </ListItemIcon>
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
