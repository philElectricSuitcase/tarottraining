import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders landing page headline", () => {
  render(<App />);
  const heading = screen.getByText(/leadership pause/i);
  expect(heading).toBeInTheDocument();
});
