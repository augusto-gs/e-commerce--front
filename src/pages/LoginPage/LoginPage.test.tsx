import { render, screen } from "@testing-library/react";
import LoginPage from "./LoginPage";

describe("Given a LoginPage", () => {
  describe("When it is rendered on screen", () => {
    test("Then it should show a 'Login to your account' title within a heading", () => {
      const headingTitle = "Log in to your account";

      render(<LoginPage />);

      const title = screen.getByRole("heading", { name: headingTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
