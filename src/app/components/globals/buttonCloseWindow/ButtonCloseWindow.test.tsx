import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ButtonCloseWindow from "./ButtonCloseWindow";

describe("TEST OF BUTTONCLOSEWINDOW COMPONENT", () => {
    it("should display correctly", () => {
        const onClick = () => {};
        render(<ButtonCloseWindow onClick={onClick} />);

        const button = screen.getByRole("button", { name: "X" });
        expect(button).toBeInTheDocument();
    });

    it("should display the onClick function correctly", async () => {
        const user = userEvent.setup();
        const onClick = jest.fn();
        render(<ButtonCloseWindow onClick={onClick} />);

        const button = screen.getByRole("button", { name: "X" });
        await user.click(button);
        expect(onClick).toBeCalledTimes(1);
    });
});
