import React from "react";
import { ButtonCloseWindowPropsType } from "./buttonCloseWindow";
import Button from "../button/Button";

export default function ButtonCloseWindow(props: ButtonCloseWindowPropsType) {
    const { onClick } = props;
    return (
        <Button
            extendClassName="flex justify-center items-center w-6 h-6 rounded-full absolute top-1 right-1"
            title="fermer"
            onClick={onClick}
        >
            X
        </Button>
    );
}
