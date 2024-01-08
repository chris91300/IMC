import { render, screen } from "@testing-library/react";
import Container from "./Container";

describe("test Container", () => {
    it("should render the text 'Un text'", () => {
        render(
            <Container>
                <p>Un text</p>
            </Container>
        );

        const text = screen.getByText("Un text");
        expect(text).toBeInTheDocument();
    });
});
