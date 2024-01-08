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
    const className = `p-2 my-2 mx-auto rounded-xl font-bold border border-[wheat] text-[wheat] ${extendClassName}`;

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
