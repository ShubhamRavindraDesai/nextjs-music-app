import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import Nav from ".";

describe("display  nav component", () => {
  it("renders a nav", () => {
    render(<Nav />);
    // check if all components are rendered
    expect(screen.getByTestId("nav")).toBeInTheDocument();
  });
});
