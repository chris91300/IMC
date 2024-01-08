export type ButtonProps = {
    extendClassName?: string;
    title?: string;
    onClick: () => void;
    disabled?: boolean;
    children: ReactNode;
};
