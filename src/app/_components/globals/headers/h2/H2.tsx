import React from "react";
import { headerProps } from "../header";

export default function H2(props: headerProps) {
    const { children } = props;
    return <h2 className="text-center text-2xl mb-10">{children}</h2>;
}
