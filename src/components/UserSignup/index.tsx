"use client";

import { BOXSHADOW_1 } from "@/src/constants";
import {
  Box,
  Button,
  InputLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import styled from "@emotion/styled";

interface UserSignupProps {
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

const UserSignup = ({ navigate }: UserSignupProps): JSX.Element => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async (): Promise<void> => {
    try {
      setLoading(true);
      await axios.post("/api/users/signup", user);
      navigate("/");
    } catch (err) {
      const error = err as { message: string; status: number };
      toast.error(error.message);
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
    <>
      <StyledRootBox data-testid="signup-root">
        <Typography data-testid="title">
          {loading ? "Processing" : "Signup"}
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
        <InputLabel data-testid="password-label" htmlFor="password">
          password
        </InputLabel>
        <TextField
          data-testid="password-input"
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
          placeholder="password"
        />
        <Button
          data-testid="signup-button"
          onClick={() => {
            void onSignup();
          }}
          disabled={buttonDisabled}
        >
          {buttonDisabled ? "No signup" : "Signup"}
        </Button>
        <Box display={"flex"} justifyContent="space-between">
          <Link data-testid="signup-page-button" href="/">
            Visit login page
          </Link>
          <Link
            data-testid="forgot-password-page-button"
            href="/forgotpassword"
          >
            Forgot Password
          </Link>
        </Box>
      </StyledRootBox>
    </>
  );
};

export default UserSignup;
