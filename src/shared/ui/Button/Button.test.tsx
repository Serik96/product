import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("", () => {
  test("with only first param", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });
});
