import React from "react";
import { headerProps } from "../header";

export default function H1(props: headerProps) {
    const { children } = props;
    return (
        <h1 className="text-center text-5xl mb-5">
            {children}
        </h1>
    );
}
