"use client";
import { BOXSHADOW_1 } from "@/src/constants";
import styled from "@emotion/styled";
import { Box, Typography, InputLabel, TextField, Button } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

interface UserSignInProps {
  navigate: (path: string) => void;
}
const StyledRootBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 20px;
  border-radius: 10px;
  box-shadow: ${BOXSHADOW_1};
  padding: 8px;
`;

const UserSignIn = ({ navigate }: UserSignInProps): JSX.Element => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async (): Promise<void> => {
    try {
      setLoading(true);
      await axios.post("/api/users/signin", user);

      toast.success("Login success");
      navigate("/songs");
    } catch (err) {
      const error = err as {
        response: { data: { error: string } };
        message: string;
        status: number;
      };
      toast.error(error?.response?.data?.error || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <StyledRootBox data-testid="signin-root">
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
    </StyledRootBox>
  );
};

export default UserSignIn;
