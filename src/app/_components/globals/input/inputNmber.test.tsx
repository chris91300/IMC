import { render, screen } from "@testing-library/react";
import React from 'react'
import userEvent from "@testing-library/user-event";
import config from "@/app/_config/config";
import InputNumber from "./InputNumber";



describe("TEST OF BUTTON COMPONENT", () => {
    it("should display defaultValue", () => {
        const ref = React.createRef<HTMLInputElement>()
        render(
            <InputNumber
                label="Votre poids en kg"
                name="weight"
                step={0.1}
                min={0.1}
                max={250}
                pattern={config.weightRegex}
                defaultValue={config.weightDefaultValue}
                errorText={config.weightErrorText}
                ref={ref}
            />
        );

        const numberDefaultValue = Number(config.weightDefaultValue);
        const input = screen.getByRole("spinbutton", {name: "Votre poids en kg"});
        expect(input).toBeInTheDocument();
        expect(input).toHaveValue(numberDefaultValue);
    });

    it("should change the value of the input", async () => {
        const user = userEvent.setup();

        const ref = React.createRef<HTMLInputElement>()
        render(
            <InputNumber
                label="Votre poids en kg"
                name="weight"
                step={0.1}
                min={0.1}
                max={250}
                pattern={config.weightRegex}
                defaultValue={config.weightDefaultValue}
                errorText={config.weightErrorText}
                ref={ref}
            />
        );

        const input = screen.getByRole("spinbutton", {name: "Votre poids en kg"});

        await user.tripleClick(input)
        await user.keyboard("80")

        const errorText = screen.queryByText(config.weightErrorText)
        expect(input).toHaveValue(80);
        expect(errorText).not.toBeInTheDocument()

    });

    it("should display the error text", async () => {
        const user = userEvent.setup();

        const ref = React.createRef<HTMLInputElement>()
        render(
            <InputNumber
                label="Votre poids en kg"
                name="weight"
                step={0.1}
                min={0.1}
                max={250}
                pattern={config.weightRegex}
                defaultValue={config.weightDefaultValue}
                errorText={config.weightErrorText}
                ref={ref}
            />
        );

        const input = screen.getByRole("spinbutton", {name: "Votre poids en kg"});

        await user.tripleClick(input)
        await user.keyboard("80000")

        const errorText = screen.queryByText(config.weightErrorText)
        expect(input).toHaveValue(80000);
        expect(errorText).toBeInTheDocument()

    });
});
