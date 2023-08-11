import UserSignup from "@/src/components/UserSignup";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

describe("user sign up component", () => {
  it("should renders UserSignup with all inner components", () => {
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
  it("button should be disabled when the values are empty", () => {
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
  it("on signup click ", () => {
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
  it("should check when onSignup button clicked Signup text will changed to Proccesing", async () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <UserSignup
        navigate={(path) => {
          ("");
        }}
      />
    );
    const emailInputElement = getByPlaceholderText("email");
    const passwordInputElement = getByPlaceholderText("password");
    expect(emailInputElement).toBeInTheDocument();
    expect(passwordInputElement).toBeInTheDocument();

    fireEvent.change(emailInputElement, {
      target: { value: "example@gmail.com" },
    });
    fireEvent.change(passwordInputElement, { target: { value: "Pass@123" } });

    const signupPageButton = getByTestId("signup-button");
    await userEvent.click(signupPageButton);

    const titleButton = getByText("Processing");
    expect(titleButton).toBeInTheDocument();
  });

  it("should call the navigate function when onSignup button clicked", async () => {
    const mockFn = jest.fn(() => {
      ("");
    });
    const { getByPlaceholderText, getByTestId } = render(
      <UserSignup navigate={mockFn} />
    );
    const emailInputElement = getByPlaceholderText("email");
    const passwordInputElement = getByPlaceholderText("password");
    expect(emailInputElement).toBeInTheDocument();
    expect(passwordInputElement).toBeInTheDocument();

    fireEvent.change(emailInputElement, {
      target: { value: "example@gmail.com" },
    });
    fireEvent.change(passwordInputElement, { target: { value: "Pass@123" } });

    const signupPageButton = getByTestId("signup-button");
    await userEvent.click(signupPageButton);

    expect(mockFn).toBeCalled();
  });
});
