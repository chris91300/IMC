import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ImcCalculator from "../ImcCalculator";


const weightLabelText = "Votre poids en kg";
const tallLabelText = "Votre taille en cm";

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
        const weightLabel = screen.getByText(weightLabelText)
        const weightInput = screen.getByRole("spinbutton", {name: weightLabelText})
        const tallLabel = screen.getByText(tallLabelText)
        const tallInput = screen.getByRole("spinbutton", {name: tallLabelText})
        const submitButton = screen.getByRole("button", {name: "calculer"})

        expect(textInformations).toBeInTheDocument()
        expect(picture).toBeInTheDocument()
        expect(weightLabel).toBeInTheDocument()
        expect(weightInput).toBeInTheDocument()
        expect(weightInput).toHaveValue(60)
        expect(tallLabel).toBeInTheDocument()
        expect(tallInput).toBeInTheDocument()
        expect(tallInput).toHaveValue(165)
        expect(submitButton).toBeInTheDocument()
    })

    it('should change the weight n value when user write a valid weight', async () => {
        const user = userEvent.setup();
        render(<ImcCalculator />)

        const weightLabel = screen.getByText(weightLabelText)
        const weightInput = screen.getByRole("spinbutton", {name: weightLabelText})

        expect(weightLabel).toBeInTheDocument()
        expect(weightInput).toBeInTheDocument()

        //  user want to change the weight value by 90
        await user.dblClick(weightInput)
        await user.keyboard("90");
        const weightInput90 = await screen.findByRole("spinbutton", {name: weightLabelText})
        
        expect(weightInput90).toHaveValue(90)


    })

    it('should show the error message when user write an unvalid weight', async () => {
        const user = userEvent.setup();
        render(<ImcCalculator />)

        const weightLabel = screen.getByText(weightLabelText)
        const weightInput = screen.getByRole("spinbutton", {name: weightLabelText})

        expect(weightLabel).toBeInTheDocument()
        expect(weightInput).toBeInTheDocument()

        //  user want to change the weight value by 0
        await user.dblClick(weightInput)
        await user.keyboard("0");

        const errorMessage = await screen.findByText("un nombre entre 1 et 300.");
        expect(errorMessage).toBeInTheDocument()

        const weightInput60 = await screen.findByRole("spinbutton", {name: weightLabelText})        
        expect(weightInput60).toHaveValue(60)

    })

    it('should change the tall input value when user write a valid tall', async () => {
        const user = userEvent.setup();
        render(<ImcCalculator />)

        const tallLabel = screen.getByText(tallLabelText)
        const tallInput = screen.getByRole("spinbutton", {name: tallLabelText})

        expect(tallLabel).toBeInTheDocument()
        expect(tallInput).toBeInTheDocument()

        //  user want to change the tall value by 180
        await user.dblClick(tallInput)
        await user.keyboard("180");
        const tallInput180 = await screen.findByRole("spinbutton", {name: tallLabelText})
        
        expect(tallInput180).toHaveValue(180)


    })

    it('should show the error message when user write an unvalid tall', async () => {
        const user = userEvent.setup();
        render(<ImcCalculator />)

        const tallLabel = screen.getByText(tallLabelText)
        const tallInput = screen.getByRole("spinbutton", {name: tallLabelText})

        expect(tallLabel).toBeInTheDocument()
        expect(tallInput).toBeInTheDocument()

        //  user want to change the tall value by 4000
        await user.dblClick(tallInput)
        await user.keyboard("4000");

        const errorMessage = await screen.findByText("un nombre entre 1 et 300.");
        expect(errorMessage).toBeInTheDocument()

        const tallInput60 = await screen.findByRole("spinbutton", {name: tallLabelText})        
        expect(tallInput60).toHaveValue(40)

    })
})