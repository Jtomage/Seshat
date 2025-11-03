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
    fieldClassName: string;
  };

export const SearchBox: FC<SearchBoxProps> = ({
  fieldName,
  fieldClassName,
  orientation,
  hint,
  size,
  ...rest
}: SearchBoxProps) => {
  return (
    <Field
      className={fieldClassName}
      label={fieldName}
      size={size}
      orientation={orientation}
      hint={hint}
    >
      <FluentSearchBox size={size} {...rest} />
    </Field>
  );
};
