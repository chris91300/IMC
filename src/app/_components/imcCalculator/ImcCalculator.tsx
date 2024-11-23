"use client";

import React, { useState } from "react";
import ImcForm from "./imcForm/ImcForm";
import ImcResult from "./imcResult/ImcResult";
import calculImc from "./utils/calculImc";
import H2 from "../globals/headers/h2/H2";
import config from "@/app/_config/config";
import { userType } from "@/app/_types/types";
import { ErrorBoundary } from "react-error-boundary";
import Error from "../globals/error/Error";
import { useDialogStore } from "../dialog/store/useDialogStore";
import Dialog from "../dialog/Dialog";

export default function ImcCalculator() {
    const newUser: userType = {
        tall: Number(config.tallDefaultValue),
        weight: Number(config.weightDefaultValue),
        imc: 0,
    };

    const [user, setUser] = useState(newUser);
    const [getResult, setGetResult] = useState(false);
    const { dialogIsVisible, showDialog } = useDialogStore();

    const calculateIMC = (tall: string, weight: string) => {
        const tallAsNumber = parseFloat(tall);
        const weightAsNumber = parseFloat(weight);
        const imcCalculated = calculImc(tallAsNumber, weightAsNumber);
        if (imcCalculated <= 60) {
            setUser({
                tall: tallAsNumber,
                weight: weightAsNumber,
                imc: imcCalculated,
            });

            setGetResult(true);
        } else {
            showDialog(
                "IMC supérieur à 60. Merci de donner des valeurs réalistes."
            );
        }
    };

    const restart = () => {
        setGetResult(false);
    };

    return (
        <section className="mt-20">
            <H2>Calculer votre IMC</H2>
            <ErrorBoundary fallback={<Error />}>
                <ImcForm blockSubmit={getResult} submit={calculateIMC} />
                {getResult && <ImcResult user={user} restart={restart} />}
            </ErrorBoundary>
            {dialogIsVisible && <Dialog />}
        </section>
    );
}
