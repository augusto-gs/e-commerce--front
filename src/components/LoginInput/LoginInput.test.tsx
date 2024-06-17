import { render, screen } from "@testing-library/react";
import LoginInput from "./LoginInput";
import userEvent from "@testing-library/user-event";

describe("Given a LoginInput component", () => {
  describe("When it is rendered on screen and the user inputs their username", () => {
    test("Then it should show their username", async () => {
      const username = "testuser";

      render(<LoginInput />);

      const input = screen.getByRole("textbox");

      await userEvent.type(input, username);

      expect(input).toHaveValue(username);
    });
  });
});
