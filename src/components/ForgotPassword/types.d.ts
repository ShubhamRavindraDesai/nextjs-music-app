interface ForgotPasswordProps {
  onForgotPassword: (values: { email: string }) => Promise<void>;
}
