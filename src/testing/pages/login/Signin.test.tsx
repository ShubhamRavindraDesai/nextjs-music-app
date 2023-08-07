import UserSignIn from "@/src/components/UserSignIn";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

describe("user sign in component", () => {
  test("renders UserSignIn with initial state", () => {
    const { getByTestId, getByText } = render(
      <UserSignIn
        navigate={(path) => {
          ("");
        }}
      />
    );

    const rootElement = getByTestId("signin-root");
    const emailInput = getByTestId("email-input");
    const passwordInput = getByTestId("password-input");
    const loginButton = getByText("Login here");
    const signupPageButton = getByTestId("signup-page-button");
    const forgotPasswordPageButton = getByTestId("forgot-password-page-button");

    expect(rootElement).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(signupPageButton).toBeInTheDocument();
    expect(forgotPasswordPageButton).toBeInTheDocument();
  });
});
