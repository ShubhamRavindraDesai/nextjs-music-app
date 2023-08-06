"use client";
import { BOXSHADOW_1 } from "@/src/constants";
import { Box, Typography, InputLabel, TextField, Button } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

interface ForgotPasswordProps {
  navigate: (path: string) => void;
}

export default function ForgotPassword({
  navigate,
}: ForgotPasswordProps): JSX.Element {
  const [user, setUser] = React.useState({
    email: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onForgotPassword = async (): Promise<void> => {
    try {
      setLoading(true);
      await axios.post("/api/users/forgotpassword", user);
      navigate("/");
    } catch (err) {
      const error = err as { message: string; status: number };
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  return (
    <>
      <Box
        data-testid="forgot-password-root-box"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "fixed",
          top: "25%",
          width: "50%",
          gap: "20px",
          borderRadius: "10px",
          boxShadow: BOXSHADOW_1,
          padding: "8px",
        }}
      >
        <Typography data-testid="title">
          {loading ? "Processing" : "Forgot Password"}
        </Typography>
        <hr />
        <InputLabel data-testid="email-label" htmlFor="email">
          email
        </InputLabel>
        <TextField
          data-testid="email-input"
          id="email"
          type="text"
          value={user.email}
          onChange={(
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => {
            setUser({ ...user, email: e.target.value });
          }}
          placeholder="email"
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
      </Box>
    </>
  );
}
