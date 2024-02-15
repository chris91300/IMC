import React from "react";

export default function Char({ children }: { children: string }) {
    return <span className="w-[10.3px] text-right">{children}</span>;
}
