import NoDataFound from "@/src/components/NoDataFound";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

describe("No data found component", () => {
  test("renders No data found component with all inner components", () => {
    const { getByTestId } = render(<NoDataFound />);

    const rootElement = getByTestId("no-data-found");
    const textElement = getByTestId("info-text");
    const svgElement = getByTestId("no-data-svg");

    const elements = [rootElement, textElement, svgElement];
    elements.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });
});
