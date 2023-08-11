"use client";
import { BOXSHADOW_1 } from "@/src/constants";
import styled from "@emotion/styled";
import { Box, Typography, InputLabel, Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import InputField from "../atoms/Input";

const StlyedRootBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 20px;
  border-radius: 10px;
  box-shadow: ${BOXSHADOW_1};
  padding: 8px;
`;

interface ForgotPasswordProps {
  user: {
    email: string;
  };
  setUser: (user: { email: string }) => void;
  loading: boolean;
  buttonDisabled: boolean;
  onForgotPassword: () => Promise<void>;
}

export default function ForgotPassword({
  user,
  setUser,
  loading,
  buttonDisabled,
  onForgotPassword,
}: ForgotPasswordProps): JSX.Element {
  return (
    <>
      <StlyedRootBox data-testid="forgot-password-root-box">
        <Typography data-testid="title">
          {loading ? "Processing" : "Forgot Password"}
        </Typography>
        <hr />
        <InputLabel data-testid="email-label" htmlFor="email">
          email
        </InputLabel>
        <InputField
          dataTestId="email-input"
          id="email"
          type="text"
          value={user.email}
          onChange={(
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => {
            setUser({ ...user, email: e.target.value });
          }}
          placeholder="Email"
        />
        <Button
          data-testid="forgot-password-button"
          onClick={() => {
            void onForgotPassword();
          }}
          disabled={buttonDisabled}
        >
          {buttonDisabled ? "No Forgot Password" : "Forgot Password"}
        </Button>
        <Box display={"flex"} justifyContent="space-between">
          <Link data-testid="login-page-button" href="/">
            Visit login page
          </Link>
          <Link data-testid="signup-page-button" href="/signup">
            Visit sign up page
          </Link>
        </Box>
      </StlyedRootBox>
    </>
  );
}
