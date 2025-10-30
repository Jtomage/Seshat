import { Field, SearchBox as FluentSearchBox, type SearchBoxProps as FluentSearchBoxProps } from "@fluentui/react-components";


export type SearchBoxProps = FluentSearchBoxProps & {
    fieldName: string;
}

export const SearchBox = ({fieldName, ...props}: SearchBoxProps) => {
    return (
        <Field label={fieldName}>
            <FluentSearchBox {...props} />
        </Field>
    )
}