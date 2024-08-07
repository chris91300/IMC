import React from "react";
import Ten from "./Ten";
import Unit from "./Unit";
import Comma from "./Comma";
import Tenth from "./Tenth";
import getImcSplitted from "../utils/getImcSplitted";

export default function ImcSplitted({
    imcAnimated,
    imcAnimation,
}: {
    imcAnimated: number;
    imcAnimation: string;
}) {
    const [ten, unit, comma, tenth] = getImcSplitted(imcAnimated);

    return (
        <p
            className={`flex items-center justify-center w-20 h-20 m-3 border border-denutrition rounded-full shadow-full text-denutrition shadow-denutrition ${imcAnimation}`}
        >
            <Ten ten={ten} />
            <Unit unit={unit} />
            <Comma />
            <Tenth tenth={tenth} />
        </p>
    );
}
