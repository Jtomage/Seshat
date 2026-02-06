import type { FC } from "react";

import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField, type TextFieldProps } from "@mui/material";

export type SearchBoxProps = Omit<
  TextFieldProps,
  | "FormHelplerTextProps"
  | "fullWidth"
  | "InputLabelProps"
  | "inputProps"
  | "InputProps"
  | "maxRows"
  | "minRows"
  | "multiline"
  | "rows"
  | "SelectProps"
  | "type"
>;

export const SearchBox: FC<SearchBoxProps> = (props: SearchBoxProps) => {
  return (
    <TextField
      fullWidth
      type="search"
      {...props}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        },
      }}
    />
  );
};
