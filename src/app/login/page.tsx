"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import {
  Box,
  Button,
  Container,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { BOXSHADOW_1 } from "@/src/constants";

export default function LoginPage(): JSX.Element {
  const router = useRouter();
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
      router.push("/songs");
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
        <Typography>{loading ? "Processing" : "Login"}</Typography>
        <hr />

        <InputLabel htmlFor="email">email</InputLabel>
        <TextField
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
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
          placeholder="password"
        ></TextField>
        <Button
          onClick={() => {
            void onLogin();
          }}
          disabled={buttonDisabled}
        >
          Login here
        </Button>
        <Box display={"flex"} justifyContent="space-between">
          <Link href="/signup">Visit Signup page</Link>
          <Link href="/forgotpassword">Forgot Password</Link>
        </Box>
      </Box>
      <Toaster
        position="bottom-left"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
    </Container>
  );
}
