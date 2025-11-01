import {
  Field,
  SearchBox as FluentSearchBox,
  type SearchBoxProps as FluentSearchBoxProps,
  type FieldProps as FluentFieldProps,
} from "@fluentui/react-components";
import type { FC } from "react";

export type SearchBoxProps = FluentSearchBoxProps &
  FluentFieldProps & {
    fieldName: string;
  };

export const SearchBox: FC<SearchBoxProps> = ({
  fieldName,
  orientation,
  hint,
  size,
  ...rest
}: SearchBoxProps) => {
  return (
    <Field label={fieldName} size={size} orientation={orientation} hint={hint}>
      <FluentSearchBox size={size} {...rest} />
    </Field>
  );
};
