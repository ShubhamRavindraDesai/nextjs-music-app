"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import {
  Box,
  Button,
  Container,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { BOXSHADOW_1 } from "@/src/constants";

export default function ForgotPasswordPage(): React.JSX.Element {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onForgotPassword = async (): Promise<void> => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/forgotpassword", user);
      // eslint-disable-next-line no-console
      console.log("password reset success", response.data);
      router.push("/");
    } catch (err) {
      const error = err as { message: string; status: number };
      // eslint-disable-next-line no-console
      console.log("password reset failed", error.message);
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
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
      >
        <Typography>{loading ? "Processing" : "Forgot Password"}</Typography>
        <hr />
        <InputLabel htmlFor="email">email</InputLabel>
        <TextField
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
          onClick={() => {
            void onForgotPassword();
          }}
          disabled={buttonDisabled}
        >
          {buttonDisabled ? "No Forgot Password" : "Forgot Password"}
        </Button>
        <Box display={"flex"} justifyContent="space-between">
          <Link href="/">Visit login page</Link>
          <Link href="/signup">Visit sign up page</Link>
        </Box>
      </Box>
    </Container>
  );
}
