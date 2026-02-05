import type { FC } from "react";

import { TextField, type TextFieldProps } from "@mui/material";

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

export const SearchBox: FC<SearchBoxProps> = ({ ...rest }: SearchBoxProps) => {
  return <TextField fullWidth type="search" {...rest} />;
};
