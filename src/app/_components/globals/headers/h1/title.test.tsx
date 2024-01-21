import { render, screen } from "@testing-library/react";
import H1 from "./H1";

describe("TEST OF H1 COMPONENT", () => {
    it("should display the title h1", () => {
        render(<H1>titre</H1>);

        const title = screen.getByRole("heading");
        expect(title).toBeInTheDocument();
    });
});
