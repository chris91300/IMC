import React from "react";
import { imcProps } from "../imcResult";
import Container from "@/app/_components/globals/container/Container";
import ImcSplitted from "./imcSplitted/ImcSplitted";
import ImcStatus from "./imcStatus/ImcStatus";
import Advice from "./advice/Advice";

export default function Imc({
    imcAnimated,
    imcAnimation,
    imcStatus,
    incrementationIsOver,
    weightToAchieve,
}: imcProps) {
    return (
        <Container className="flex flex-col items-center gap-4 m-5">
            <ImcSplitted
                imcAnimated={imcAnimated}
                imcAnimation={imcAnimation}
            />

            <ImcStatus
                incrementationIsOver={incrementationIsOver}
                imcStatus={imcStatus}
            />
            {incrementationIsOver && (
                <Advice weight={weightToAchieve} imcStatus={imcStatus.text} />
            )}
        </Container>
    );
}
