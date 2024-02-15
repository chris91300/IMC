import React from "react";
import Char from "./Char";

export default function Unit({ unit }: { unit: string }) {
    return <Char>{unit}</Char>;
}
