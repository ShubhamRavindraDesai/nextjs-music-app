import UserSignup from "@/src/components/UserSignup";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

describe("user sign up component", () => {
  test("renders UserSignup with all inner components", () => {
    const { getByTestId } = render(
      <UserSignup
        navigate={(path) => {
          ("");
        }}
      />
    );

    const rootElement = getByTestId("signup-root");
    const titleElement = getByTestId("title");
    const emailLabelElement = getByTestId("email-label");
    const emailInputElement = getByTestId("email-input");
    const passwordLabelElement = getByTestId("password-label");
    const passwordInputElement = getByTestId("password-input");
    const signupButtonElement = getByTestId("password-input");
    const signupPageButton = getByTestId("signup-page-button");
    const forgotPasswordPageButton = getByTestId("forgot-password-page-button");

    const elements = [
      rootElement,
      titleElement,
      emailLabelElement,
      emailInputElement,
      passwordLabelElement,
      passwordInputElement,
      signupButtonElement,
      forgotPasswordPageButton,
      signupPageButton,
    ];
    elements.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });
  test("button is disabled when the values are empty", () => {
    const { getByText } = render(
      <UserSignup
        navigate={(path) => {
          ("");
        }}
      />
    );
    const signupPageButton = getByText("No signup");
    expect(signupPageButton).toBeInTheDocument();
  });
  test("on signup click ", () => {
    const { getByText } = render(
      <UserSignup
        navigate={(path) => {
          ("");
        }}
      />
    );
    const signupPageButton = getByText("No signup");
    expect(signupPageButton).toBeInTheDocument();
  });
});
