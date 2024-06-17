import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given an App component", () => {
  describe("When it is rendered on screen", () => {
    test("Then it should show a title 'Log in to your account' on a heading", () => {
      const headingTitle = "Log in to your account";

      render(<App />);

      const title = screen.getByRole("heading", { name: headingTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
