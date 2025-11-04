import type { FC } from "react";

import {
  Field,
  type FieldProps as FluentFieldProps,
  SearchBox as FluentSearchBox,
  type SearchBoxProps as FluentSearchBoxProps,
} from "@fluentui/react-components";

export type SearchBoxProps = FluentFieldProps &
  FluentSearchBoxProps & {
    fieldClassName?: string;
    fieldName: string;
  };

export const SearchBox: FC<SearchBoxProps> = ({
  fieldClassName,
  fieldName,
  hint,
  orientation,
  size,
  ...rest
}: SearchBoxProps) => {
  return (
    <Field
      className={fieldClassName}
      hint={hint}
      label={fieldName}
      orientation={orientation}
      size={size}
    >
      <FluentSearchBox size={size} {...rest} />
    </Field>
  );
};
