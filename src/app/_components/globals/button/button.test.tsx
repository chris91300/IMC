import { render, screen } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

describe("TEST OF BUTTON COMPONENT", () => {
    it("should display correctly", async () => {
        const user = userEvent.setup();
        const onClick = jest.fn();
        render(<Button onClick={onClick}>valider</Button>);

        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();

        await user.click(button);
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
