import ForgotPassword from "@/src/components/ForgotPassword";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import React from "react";

describe("Forgot password component", () => {
  it(" should renders Forgot password component with all inner components", () => {
    const mockFn = jest.fn();
    const mockFunction = jest.fn();
    const { getByTestId } = render(
      <ForgotPassword
        user={{
          email: "",
        }}
        setUser={mockFunction}
        loading={false}
        buttonDisabled={false}
        onForgotPassword={mockFn}
      />
    );

    const rootElement = getByTestId("forgot-password-root-box");
    const titleElement = getByTestId("title");
    const emailLabelElement = getByTestId("email-label");
    const emailInputElement = getByTestId("email-input");
    const forgotPasswordButtonkElement = getByTestId("forgot-password-button");
    const loginPageButtonlement = getByTestId("login-page-button");
    const signupPageButtonElement = getByTestId("signup-page-button");

    const elements = [
      rootElement,
      titleElement,
      emailLabelElement,
      emailInputElement,
      forgotPasswordButtonkElement,
      loginPageButtonlement,
      signupPageButtonElement,
    ];
    elements.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });
  it(" should call setUser function on email input change ", () => {
    const mockFn = jest.fn();
    const mockFunction = jest.fn();
    const { getByPlaceholderText } = render(
      <ForgotPassword
        user={{
          email: "",
        }}
        setUser={mockFunction}
        loading={false}
        buttonDisabled={false}
        onForgotPassword={mockFn}
      />
    );

    const inputEl = getByPlaceholderText("Email");
    fireEvent.change(inputEl, { target: { value: "email" } });
    expect(mockFunction).toBeCalled();
  });
  it(" should call onForgotPassword function on forgot button click", () => {
    const mockFn = jest.fn();
    const mockFunction = jest.fn();
    const { getByTestId } = render(
      <ForgotPassword
        user={{
          email: "",
        }}
        setUser={mockFunction}
        loading={false}
        buttonDisabled={false}
        onForgotPassword={mockFn}
      />
    );

    const inputEl = getByTestId("forgot-password-button");
    fireEvent.click(inputEl);
    expect(mockFn).toBeCalled();
  });
});
