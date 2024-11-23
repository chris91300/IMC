"use client";

import React from "react";
import { useDialogStore } from "./store/useDialogStore";

type Props = {};

function Dialog({}: Props) {
    const { text, removeDialog } = useDialogStore();

    return (
        <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full backdrop-blur-md">
            <div className="relative flex flex-col gap-5 justify-center items-center p-5 border-2 rounded-lg border-[#EB8E90] text-[#CE2C31] bg-[#FFF7F7] max-w-lg w-11/12">
                <h2 className="font-bold">ATTENTION</h2>
                <p>{text}</p>
                <button onClick={removeDialog}>fermer</button>
                <button
                    onClick={removeDialog}
                    className="absolute top-3 right-3 font-bold"
                >
                    X
                </button>
            </div>
        </div>
    );
}

export default Dialog;
