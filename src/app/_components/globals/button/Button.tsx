import React from "react";
import { ButtonProps } from "./button";

export default function Button(props: ButtonProps) {
    const {
        extendClassName = "",
        title,
        onClick,
        disabled = false,
        children,
    } = props;
    const className = `px-6 py-2 border-2 border-black rounded-full hover:font-bold hover:border-3 dark:text-wheat dark:border-wheat ${extendClassName}`;

    return (
        <button
            className={className}
            title={title}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
