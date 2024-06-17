import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import userEvent from "@testing-library/user-event";

describe("Given a LoginForm component", () => {
  const userText = "test1234";

  describe("When it is rendered on screen and the user inputs 'test1234' on username field and 'test1234' on the the password field", () => {
    test("Then it show that text on a form input", async () => {
      render(<LoginForm actionOnClick={() => {}} />);

      const loginButton = screen.getByRole("button", { name: "Log in" });
      const usernameField = screen.getByRole("textbox", { name: "Username" });
      const passwordField = screen.getByLabelText(/password/i);

      const inputs = [usernameField, passwordField];

      for (const inputElement of inputs) {
        await userEvent.type(inputElement, userText);
      }

      expect(loginButton).not.toBeDisabled();

      inputs.forEach((input) => {
        expect(input).toHaveValue(userText);
      });
    });
  });
});
