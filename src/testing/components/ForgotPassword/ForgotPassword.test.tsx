import ForgotPassword from "@/src/components/ForgotPassword";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

describe("Forgot password component", () => {
  test("renders Forgot password component with all inner components", () => {
    const { getByTestId } = render(
      <ForgotPassword
        navigate={(path) => {
          ("");
        }}
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
});
