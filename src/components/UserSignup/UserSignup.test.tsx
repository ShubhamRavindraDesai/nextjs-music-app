import UserSignup from "@/src/components/UserSignup";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";

describe("user sign up component", () => {
  it("should renders UserSignup with initial state", () => {
    render(
      <UserSignup
        navigate={() => {
          ("");
        }}
      />
    );

    const rootElement = screen.getByTestId("signup-root");
    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const signupButton = screen.getByTestId("signup-button");
    const loginPageButton = screen.getByTestId("login-page-button");
    const forgotPasswordPageButton = screen.getByTestId(
      "forgot-password-page-button"
    );

    expect(rootElement).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(signupButton).toBeInTheDocument();
    expect(loginPageButton).toBeInTheDocument();
    expect(forgotPasswordPageButton).toBeInTheDocument();
  });

  it("should displays validation error for empty email and password fields", async () => {
    render(
      <UserSignup
        navigate={() => {
          ("");
        }}
      />
    );

    const signupButton = screen.getByTestId("signup-button");

    fireEvent.click(signupButton);

    const emailError = await screen.findByText("Email is required");
    const passwordError = await screen.findByText("Password is required");

    expect(emailError).toBeInTheDocument();
    expect(passwordError).toBeInTheDocument();
  });

  it("should displays validation error for invalid email format", async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <UserSignup
        navigate={() => {
          ("");
        }}
      />
    );

    const emailInput = getByPlaceholderText("Email");
    const signupButton = getByTestId("signup-button");

    fireEvent.change(emailInput, { target: { value: "invalidemail" } });
    fireEvent.click(signupButton);

    const emailError = await screen.findByText("Invalid email format");

    expect(emailError).toBeInTheDocument();
  });
});
