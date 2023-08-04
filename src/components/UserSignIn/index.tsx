import { BOXSHADOW_1 } from "@/src/constants";
import { Box, Typography, InputLabel, TextField, Button } from "@mui/material";
import Link from "next/link";
import React from "react";

interface UserSignInProps {
  buttonDisabled: boolean;
  loading: boolean;
  user: {
    email: string;
    password: string;
  };
  setUser: ({ email, password }: { email: string; password: string }) => void;
  onLogin: () => Promise<void>;
}

const UserSignIn = ({
  buttonDisabled,
  loading,
  user,
  setUser,
  onLogin,
}: UserSignInProps): JSX.Element => {
  return (
    <Box
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
      data-testid="signin-root"
    >
      <Typography>{loading ? "Processing" : "Login"}</Typography>
      <hr />

      <InputLabel htmlFor="email">email</InputLabel>
      <TextField
        data-testid="email-input"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => {
          setUser({ ...user, email: e.target.value });
        }}
        placeholder="email"
      ></TextField>
      <InputLabel htmlFor="password">password</InputLabel>
      <TextField
        data-testid="password-input"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => {
          setUser({ ...user, password: e.target.value });
        }}
        placeholder="password"
      ></TextField>
      <Button
        data-testid="login-button"
        onClick={() => {
          void onLogin();
        }}
        disabled={buttonDisabled}
      >
        Login here
      </Button>
      <Box display={"flex"} justifyContent="space-between">
        <Link data-testid="signup-page-button" href="/signup">
          Visit Signup page
        </Link>
        <Link data-testid="forgot-password-page-button" href="/forgotpassword">
          Forgot Password
        </Link>
      </Box>
    </Box>
  );
};

export default UserSignIn;
