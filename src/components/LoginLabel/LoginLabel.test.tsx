import { render, screen } from "@testing-library/react";
import LoginLabel from "./LoginLabel";

describe("Given a LoginLabel component", () => {
  describe("When it is rendered on screen and given the Username text label", () => {
    test("Then it should show the label Username", () => {
      render(<LoginLabel role="region" />);

      const label = screen.getByRole("region");

      expect(label).toBeInTheDocument();
    });
  });
});
