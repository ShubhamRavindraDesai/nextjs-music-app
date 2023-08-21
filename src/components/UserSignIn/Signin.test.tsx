import UserSignIn from "@/src/components/UserSignIn";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import React from "react";

describe("user sign in component", () => {
  it("should renders UserSignIn with initial state", () => {
    const { getByTestId } = render(
      <UserSignIn
        navigate={() => {
          ("");
        }}
      />
    );

    const rootElement = getByTestId("signin-root");
    const emailInput = getByTestId("email-input");
    const passwordInput = getByTestId("password-input");
    const loginButton = getByTestId("login-button");
    const signupPageButton = getByTestId("signup-page-button");
    const forgotPasswordPageButton = getByTestId("forgot-password-page-button");

    expect(rootElement).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(signupPageButton).toBeInTheDocument();
    expect(forgotPasswordPageButton).toBeInTheDocument();
  });

  it("Should displays validation error for empty email and password fields", async () => {
    const { getByTestId, findByText } = render(
      <UserSignIn
        navigate={() => {
          ("");
        }}
      />
    );

    const loginButton = getByTestId("login-button");

    fireEvent.click(loginButton);

    const emailError = await findByText("Email is required");
    const passwordError = await findByText("Password is required");

    expect(emailError).toBeInTheDocument();
    expect(passwordError).toBeInTheDocument();
  });

  it("should displays validation error for invalid email format", async () => {
    const { getByTestId, findByText, getByPlaceholderText } = render(
      <UserSignIn
        navigate={() => {
          ("");
        }}
      />
    );

    const emailInput = getByPlaceholderText("Email");
    const passwordInput = getByPlaceholderText("Password");
    const loginButton = getByTestId("login-button");

    fireEvent.change(emailInput, { target: { value: "invalidemail" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });
    fireEvent.click(loginButton);

    const emailError = await findByText("Invalid email format");

    expect(emailError).toBeInTheDocument();
  });
});
