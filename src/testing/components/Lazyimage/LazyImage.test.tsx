import LazyImage from "@/src/components/LazyImage";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

const url = "";

describe("The Lazy image component tests", () => {
  it("The Lazy image should be in the document", () => {
    render(<LazyImage url={url} />);
    expect(screen.getByTestId("card-media")).toBeInTheDocument();
  });
});
