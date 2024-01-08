import { render, screen } from "@testing-library/react";
import Logo from "./Logo";

describe("TEST OF LOGO COMPONENT", () => {
    it("should rener the logo", () => {
        render(<Logo />);

        const logo = screen.getByText("IMC")
        expect(logo).toBeInTheDocument();
    });
});
