import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import CustomSlider from "..";
describe("CustomSlider test cases", () => {
  it("should render the component", () => {
    const mockProps = {
      value: 2,
      onChange: jest.fn(() => (event: Event, value: number | number[]) => {
        ("");
      }),
      dataTestId: "slider",
      min: 0,
      max: 100,
    };
    const { getByTestId } = render(<CustomSlider {...mockProps} />);
    const sliderEl = getByTestId("slider");
    expect(sliderEl).toBeInTheDocument();
  });
});
