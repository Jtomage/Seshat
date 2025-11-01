import {
  Field,
  SearchBox as FluentSearchBox,
  type SearchBoxProps as FluentSearchBoxProps,
} from "@fluentui/react-components";

export type SearchBoxProps = Omit<FluentSearchBoxProps, "apperance"> & {
  fieldName: string;
};

export const SearchBox = ({ fieldName, ...props }: SearchBoxProps) => {
  return (
    <Field label={fieldName}>
      <FluentSearchBox appearance="outline" placeholder="hawaii" {...props} />
    </Field>
  );
};
