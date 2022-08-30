import React from "react";
import { screen, render } from "@testing-library/react";

import { Header } from "./Header";

test("renders tittle application", () => {
  render(<Header />);
  const linkElement = screen.getByText(/Weather App/i);
  expect(linkElement).toBeInTheDocument();
});
