import { render, screen } from "@testing-library/react";
import ImcCalculator from "../ImcCalculator";
import ImcForm from "./ImcForm";
import calculImc from "../utils/calculImc";

import userEvent from "@testing-library/user-event";

// tall, setTall, tallIsValid, weight, setWeight, weightIsValid, submit
/*let tall: number = 165;
let weight: number = 60;
const setTall = jest.fn((tall: number) => { tall = tall });
const setWeight = jest.fn((weight: number) => { weight = weight });
const submit = jest.fn(() => calculImc(tall, weight));*/

beforeEach(()=>{
    jest.clearAllMocks();
})

describe("test of ImcForm component", () => {
    it('should display html elements', () => {
        render(
            <ImcCalculator />
        )

        const textInformations = screen.getByText("Merci de renseigner votre poids et votre taille :")
        const picture = screen.getByAltText("dessin représentant le corps d'une personne")
        const weightLabel = screen.getByText("Votre poids en kg")
        const weightInput = screen.getByRole("spinbutton", {name: "Votre poids en kg"})
        const tallLabel = screen.getByText("Votre taille en cm")
        const tallInput = screen.getByRole("spinbutton", {name: "Votre taille en cm"})
        const submitButton = screen.getByRole("button", {name: "calculer"})

        expect(textInformations).toBeInTheDocument()
        expect(picture).toBeInTheDocument()
        expect(weightLabel).toBeInTheDocument()
        expect(weightInput).toBeInTheDocument()
        expect(tallLabel).toBeInTheDocument()
        expect(tallInput).toBeInTheDocument()
        expect(submitButton).toBeInTheDocument()
    })

    it('should return weight when user write a valid weight', async () => {
        const user = userEvent.setup();
        render(<ImcCalculator />)

        const weightLabel = screen.getByText("Votre poids en kg")
        const weightInput = screen.getByRole("spinbutton", {name: "Votre poids en kg"})

        expect(weightLabel).toBeInTheDocument()
        expect(weightInput).toBeInTheDocument()

        //  user want to change the weight value by 90
        await user.dblClick(weightInput)
        await user.keyboard("90");
        const weightInput90 = await screen.findByRole("spinbutton", {name: "Votre poids en kg"})
        
        expect(weightInput90).toHaveValue(90)


    })

    it('should show the error message when user write an unvalid weight', async () => {
        const user = userEvent.setup();
        render(<ImcCalculator />)

        const weightLabel = screen.getByText("Votre poids en kg")
        const weightInput = screen.getByRole("spinbutton", {name: "Votre poids en kg"})

        expect(weightLabel).toBeInTheDocument()
        expect(weightInput).toBeInTheDocument()

        //  user want to change the weight value by 0
        await user.dblClick(weightInput)
        await user.keyboard("0");

        const errorMessage = await screen.findByText("un nombre entre 1 et 300.");
        expect(errorMessage).toBeInTheDocument()

        const weightInput60 = await screen.findByRole("spinbutton", {name: "Votre poids en kg"})        
        expect(weightInput60).toHaveValue(60)

    })
})