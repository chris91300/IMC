import { render, screen } from "@testing-library/react";
import TitleH1 from "./TitleH1";

describe("TEST OF TITLEH1 COMPONENT", () => {
    it("should display the title h1", () => {
        render(<TitleH1>titre</TitleH1>);

        const title = screen.getByRole("heading");
        expect(title).toBeInTheDocument();
    });
});
