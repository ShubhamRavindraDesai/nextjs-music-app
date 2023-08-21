"use client";
import * as React from "react";
import ForgotPassword from "@/src/components/ForgotPassword";
import Toast from "react-hot-toast";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const ForgotPasswordPage = (): React.JSX.Element => {
  const onForgotPassword = async (values: { email: string }): Promise<void> => {
    try {
      await fetch("/api/users/forgotpassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
    } catch (err) {
      const errorObj = err as { message: string; status: number };
      Toast.error(errorObj.message);
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: "20px",
        height: "100vh",
      }}
    >
      <Typography variant="h3">NextJS Music App</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
        }}
      >
        <ForgotPassword onForgotPassword={onForgotPassword} />
      </Box>
    </Container>
  );
};

export default ForgotPasswordPage;
