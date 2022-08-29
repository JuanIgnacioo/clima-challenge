import React from "react"
import { screen } from "@testing-library/react"
import { render } from "./test-utils"
import { Home } from "./Pages/Home/Home"

test("renders learn react link", () => {
  render(<Home />)
  const linkElement = screen.getByText(/learn chakra/i)
  expect(linkElement).toBeInTheDocument()
})