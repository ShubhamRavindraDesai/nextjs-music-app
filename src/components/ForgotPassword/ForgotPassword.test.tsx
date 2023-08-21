import ForgotPassword from "@/src/components/ForgotPassword";
import "@testing-library/jest-dom";
import { render, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

describe("forgot password component", () => {
  it("should renders ForgotPassword with initial state", () => {
    const { getByTestId } = render(
      <ForgotPassword
        onForgotPassword={async () => {
          ("");
        }}
      />
    );

    const rootBox = getByTestId("forgot-password-root-box");
    const title = getByTestId("title");
    const emailLabel = getByTestId("email-label");
    const emailInput = getByTestId("email-input");
    const forgotPasswordButton = getByTestId("forgot-password-button");
    const loginPageButton = getByTestId("login-page-button");
    const signupPageButton = getByTestId("signup-page-button");

    expect(rootBox).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(forgotPasswordButton).toBeInTheDocument();
    expect(loginPageButton).toBeInTheDocument();
    expect(signupPageButton).toBeInTheDocument();
  });

  it("should displays validation error for empty email field", async () => {
    const { getByTestId, findByText } = render(
      <ForgotPassword
        onForgotPassword={async () => {
          ("");
        }}
      />
    );

    const forgotPasswordButton = getByTestId("forgot-password-button");

    fireEvent.click(forgotPasswordButton);

    const emailError = await findByText("Email is required");

    expect(emailError).toBeInTheDocument();
  });

  it("should displays validation error for invalid email format", async () => {
    const { getByTestId, findByText, getByPlaceholderText } = render(
      <ForgotPassword
        onForgotPassword={async () => {
          ("");
        }}
      />
    );

    const emailInput = getByPlaceholderText("Email");
    const forgotPasswordButton = getByTestId("forgot-password-button");

    fireEvent.change(emailInput, { target: { value: "invalidemail" } });
    fireEvent.click(forgotPasswordButton);

    const emailError = await findByText("Invalid email format");

    expect(emailError).toBeInTheDocument();
  });

  test("calls onForgotPassword when form is submitted", async () => {
    const mockOnForgotPassword = jest.fn();
    const { getByPlaceholderText, findByTestId } = render(
      <ForgotPassword onForgotPassword={mockOnForgotPassword} />
    );

    const emailInput = getByPlaceholderText("Email");
    const forgotPasswordButton = await findByTestId("forgot-password-button");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    void userEvent.click(forgotPasswordButton);

    await waitFor(() => {
      expect(mockOnForgotPassword).toHaveBeenCalledTimes(1);
      expect(mockOnForgotPassword).toHaveBeenCalledWith({
        email: "test@example.com",
      });
    });
  });
});
