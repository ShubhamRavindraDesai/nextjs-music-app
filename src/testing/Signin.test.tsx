import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import UserSignIn from "../components/UserSignIn";
import React from "react";

const mockData = {
  buttonDisabled: true,
  loading: true,
  user: {
    email: "testemail@gmail.com",
    password: "testpassword",
  },
  setUser: ({ email, password }: { email: string; password: string }): void => {
    ("");
  },
  onSvumti: () => Promise<void>,
  onLogin: async (): Promise<void> => {
    ("");
  },
};

describe("user sign in component", () => {
  test("renders UserSignIn with initial state", () => {
    const { getByTestId, getByText } = render(
      <UserSignIn
        buttonDisabled={false}
        loading={false}
        user={mockData.user}
        setUser={mockData.setUser}
        onLogin={mockData.onLogin}
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

  test("On loading proccesing should be in the document", () => {
    const { getByText } = render(
      <UserSignIn
        buttonDisabled={false}
        loading={true}
        user={mockData.user}
        setUser={mockData.setUser}
        onLogin={mockData.onLogin}
      />
    );

    const titleElement = getByText("Processing");
    expect(titleElement).toBeInTheDocument();
  });

  test("email input field updates user state", () => {
    const setUserMock = jest.fn();
    const { getByLabelText } = render(
      <UserSignIn
        buttonDisabled={false}
        loading={false}
        user={{
          email: "",
          password: "",
        }}
        setUser={setUserMock}
        onLogin={mockData.onLogin}
      />
    );

    const emailInput = getByLabelText("email");
    const testEmail = "test@example.com";

    fireEvent.change(emailInput, { target: { value: testEmail } });

    expect(setUserMock).toHaveBeenCalledWith({
      email: testEmail,
      password: "",
    });
  });

  test("password input field updates user state", () => {
    const setUserMock = jest.fn();
    const { getByLabelText } = render(
      <UserSignIn
        buttonDisabled={false}
        loading={false}
        user={{
          email: "",
          password: "",
        }}
        setUser={setUserMock}
        onLogin={mockData.onLogin}
      />
    );

    const passwordInput = getByLabelText("password");
    const testPassword = "password123";

    fireEvent.change(passwordInput, { target: { value: testPassword } });

    expect(setUserMock).toHaveBeenCalledWith({
      email: "",
      password: testPassword,
    });
  });

  test("login button calls onLogin function", () => {
    const onLoginMock = jest.fn(mockData.onLogin);
    const { getByText } = render(
      <UserSignIn
        buttonDisabled={false}
        loading={false}
        user={mockData.user}
        setUser={mockData.setUser}
        onLogin={onLoginMock}
      />
    );

    const loginButton = getByText("Login here");

    fireEvent.click(loginButton);

    expect(onLoginMock).toHaveBeenCalled();
  });

  test("login button is disabled when buttonDisabled is true", () => {
    const { getByText } = render(
      <UserSignIn
        buttonDisabled={true}
        loading={false}
        user={mockData.user}
        setUser={mockData.setUser}
        onLogin={mockData.onLogin}
      />
    );

    const loginButton = getByText("Login here");

    expect(loginButton).toBeDisabled();
  });
});
