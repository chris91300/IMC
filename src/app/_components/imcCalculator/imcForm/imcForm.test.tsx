import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ImcForm from "./ImcForm";
import calculImc from "../utils/calculImc";


const weightLabelText = "Votre poids en kg";
const tallLabelText = "Votre taille en cm";
const submit = jest.fn((tall: string, weight: string) => {
    const tallAsNumber = parseFloat(tall);
    const weightAsNumber = parseFloat(weight)
    const imcCalculated = calculImc(tallAsNumber, weightAsNumber);
    return imcCalculated;
})

beforeEach(()=>{
    jest.clearAllMocks();
})

describe("test of ImcForm component", () => {
    it('should display html elements', () => {
        render(
            <ImcForm submit={submit}/>
        )

        const textInformations = screen.getByText("Merci de renseigner votre poids et votre taille :")
        const picture = screen.getByAltText("dessin représentant le corps d'une personne")
        const weightLabel = screen.getByText(weightLabelText)
        const weightInput = screen.getByRole("spinbutton", {name: weightLabelText})
        const tallLabel = screen.getByText(tallLabelText)
        const tallInput = screen.getByRole("spinbutton", {name: tallLabelText})
        const submitButton = screen.getByRole("button", {name: "calculer"})

        expect(textInformations).toBeInTheDocument()
        expect(picture).toBeInTheDocument()
        expect(weightLabel).toBeInTheDocument()
        expect(weightInput).toBeInTheDocument()
        expect(weightInput).toHaveValue(0.1)
        expect(tallLabel).toBeInTheDocument()
        expect(tallInput).toBeInTheDocument()
        expect(tallInput).toHaveValue(0.01)
        expect(submitButton).toBeInTheDocument()
    })

    it('should change the weight value when user write a valid weight', async () => {
        const user = userEvent.setup();
        render(<ImcForm submit={submit}/>)

        const weightLabel = screen.getByText(weightLabelText)
        const weightInput = screen.getByRole("spinbutton", {name: weightLabelText})

        expect(weightLabel).toBeInTheDocument()
        expect(weightInput).toBeInTheDocument()

        //  user want to change the weight value by 90
        await user.tripleClick(weightInput)
        await user.keyboard("90");
        const weightInput90 = await screen.findByRole("spinbutton", {name: weightLabelText})
        
        expect(weightInput90).toHaveValue(90)


    })

    it('should show the error message when user write an unvalid weight', async () => {
        const user = userEvent.setup();
        render(<ImcForm submit={submit}/>)

        const weightLabel = screen.getByText(weightLabelText)
        const weightInput = screen.getByRole("spinbutton", {name: weightLabelText})

        expect(weightLabel).toBeInTheDocument()
        expect(weightInput).toBeInTheDocument()

        //  user want to change the weight value by 0
        await user.tripleClick(weightInput)
        await user.keyboard("0");

        const errorMessage = await screen.findByText("un poids valide svp (ex: 75,2)");
        expect(errorMessage).toBeInTheDocument()

        const weightInput60 = await screen.findByRole("spinbutton", {name: weightLabelText})        
        expect(weightInput60).toHaveValue(0)

    })

    it('should change the tall input value when user write a valid tall', async () => {
        const user = userEvent.setup();
        render(<ImcForm submit={submit}/>)

        const tallLabel = screen.getByText(tallLabelText)
        const tallInput = screen.getByRole("spinbutton", {name: tallLabelText})

        expect(tallLabel).toBeInTheDocument()
        expect(tallInput).toBeInTheDocument()

        //  user want to change the tall value by 1,80
        await user.tripleClick(tallInput)
        await user.keyboard(1.80.toString());
        const tallInput180 = await screen.findByRole("spinbutton", {name: tallLabelText})
        
        expect(tallInput180).toHaveValue(1.80)


    })

    it('should show the error message when user write an unvalid tall', async () => {
        const user = userEvent.setup();
        render(<ImcForm submit={submit}/>)

        const tallLabel = screen.getByText(tallLabelText)
        const tallInput = screen.getByRole("spinbutton", {name: tallLabelText})

        expect(tallLabel).toBeInTheDocument()
        expect(tallInput).toBeInTheDocument()

        //  user want to change the tall value by 4000
        await user.tripleClick(tallInput)
        await user.keyboard("4000");

        const errorMessage = await screen.findByText("une taille valide (ex: 1,70)");
        expect(errorMessage).toBeInTheDocument()

        const tallInput60 = await screen.findByRole("spinbutton", {name: tallLabelText})        
        expect(tallInput60).toHaveValue(4000)

    })


    it("should calcul the imc if tall or weight are both valid", async () =>{
        const user = userEvent.setup();
        render(<ImcForm submit={submit}/>)

        const weightInput = screen.getByRole("spinbutton", {name: weightLabelText})
        const tallInput = screen.getByRole("spinbutton", {name: tallLabelText})
        const submitButton = screen.getByRole("button", { name: "calculer"})

        expect(weightInput).toBeInTheDocument()
        expect(tallInput).toBeInTheDocument()

        await user.tripleClick(weightInput)
        await user.keyboard("82");

        await user.tripleClick(tallInput)
        await user.keyboard(1.85.toString());

        await user.click(submitButton)

        expect(submit).toHaveBeenCalledTimes(1);
        expect(submit.mock.results[0].value).toEqual(23.96)
    });

    it("should not calcul the imc if tall or weight is not valid", async () =>{
        const user = userEvent.setup();
        render(<ImcForm submit={submit}/>)

        const weightInput = screen.getByRole("spinbutton", {name: weightLabelText})
        const tallInput = screen.getByRole("spinbutton", {name: tallLabelText})
        const submitButton = screen.getByRole("button", { name: "calculer"})

        expect(weightInput).toBeInTheDocument()
        expect(tallInput).toBeInTheDocument()

        await user.tripleClick(weightInput)
        await user.keyboard("82");

        await user.tripleClick(tallInput)
        await user.keyboard(5.85.toString()); // value not valid

        await user.click(submitButton)

        expect(submit).toHaveBeenCalledTimes(0);
    })
})