import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import InputField from "..";
import "@testing-library/jest-dom";

describe("Input field test cases", () => {
  it("should render on screen", () => {
    const mockProps = {
      id: "email",
      placeholder: "Email",
      type: "text",
      value: "",
      dataTestId: "email-input",
      onChange: jest.fn(),
    };
    render(<InputField {...mockProps} />);

    const inputEl = screen.getByTestId("email-input");
    expect(inputEl).toBeInTheDocument();
  });
  it("should render passed value", () => {
    const mockProps = {
      id: "email",
      placeholder: "Email",
      type: "text",
      value: "shubham",
      dataTestId: "email-input",
      onChange: jest.fn(),
    };
    render(<InputField {...mockProps} />);

    const inputEl = screen.getByPlaceholderText("Email");
    expect(inputEl.value).toBe("shubham");
  });
  it("should render passed value", async () => {
    const onChange = jest.fn();
    const mockProps = {
      id: "email",
      placeholder: "Email",
      type: "text",
      value: "",
      dataTestId: "email-input",
    };
    render(<InputField {...mockProps} onChange={onChange} />);

    const inputEl = screen.getByPlaceholderText("Email");
    fireEvent.change(inputEl, { target: { value: "shubham" } });
    expect(onChange).toBeCalled();
  });
});
