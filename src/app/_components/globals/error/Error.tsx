import React from "react";
import Button from "../button/Button";

export default function Error() {
    const refresh = () => {
        location.reload();
    };

    return (
        <div className="flex justify-center gap-5">
            <div className="flex justify-center items-center shrink-0 w-32 h-32 rounded-full border-red-500 border-4 text-red-500 text-8xl bg-red-100">
                X
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
                <p className=" text-red-500 text-center">
                    Désolé une erreur est survenue
                </p>
                <Button title="rafraîchir la page" onClick={refresh}>
                    Rafraichir la page
                </Button>
            </div>
        </div>
    );
}
