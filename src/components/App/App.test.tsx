import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("Given an App component", () => {
  describe("When it is rendered on screen on the Login Page", () => {
    test("Then it should show a title 'Log in to your account' on a heading", () => {
      const headingTitle = "Log in to your account";

      render(<App />);

      const title = screen.getByRole("heading", { name: headingTitle });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When it is rendered on screen on the Login Page and the user inputs correct credentials and clicks the submit button", () => {
    test("Then it should show a message 'You have logged in' in the console", async () => {
      const buttonText = "Log in";

      render(<App />);

      const spy = vi.spyOn(console, "log");

      const inputs = [
        screen.getByRole("textbox", { name: "Username" }),
        screen.getByLabelText(/password/i),
      ];
      const logInButton = screen.getByRole("button", { name: buttonText });

      for (const inputElement of inputs) {
        await userEvent.type(inputElement, "testuser");
      }

      await userEvent.click(logInButton);

      expect(spy).toHaveBeenCalledWith("You have logged in");
    });
  });
});
