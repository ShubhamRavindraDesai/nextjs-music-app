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

interface UserSignupProps {
  navigate: (path: string) => void;
}

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
      const response = await axios.post("/api/users/signup", user);
      // eslint-disable-next-line no-console
      console.log("Signup success", response.data);
      navigate("/");
    } catch (err) {
      const error = err as { message: string; status: number };
      // eslint-disable-next-line no-console
      console.log("Signup failed", error.message);
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
      <Box
        data-testid="signup-root"
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
      </Box>
    </>
  );
};

export default UserSignup;
