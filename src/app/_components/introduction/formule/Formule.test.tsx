import { render, screen } from "@testing-library/react";
import Formule from "./Formule";

describe("TEST OF THE COMPONENT FORMULE", () => {
    it("should display the BMI formula", () => {
        render(<Formule />);

        const firstPart = screen.getByText(/IMC = Poids/);
        const firstSub = screen.getByText(/\(kg\)/);
        const secondPart = screen.getByText(/\/ Taille/);
        const sup = screen.getByText(/2/);
        const secondSub = screen.getByText(/\(m\)/);

        expect(firstPart).toBeInTheDocument();
        expect(firstSub).toBeInTheDocument();
        expect(secondPart).toBeInTheDocument();
        expect(sup).toBeInTheDocument();
        expect(secondSub).toBeInTheDocument();
    });
});
