export type InputProps = {
    label: string,
    name: string,
    defaultValue: number,
    setValue: (number) => void,
    step?: number,
    min?: number,
    max?: number,
    error: boolean,
    errorText: string,
};
