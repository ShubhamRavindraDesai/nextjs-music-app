"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Box, Container, Typography } from "@mui/material";
import ForgotPassword from "@/src/components/ForgotPassword";

export default function ForgotPasswordPage(): React.JSX.Element {
  const router = useRouter();

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
        <ForgotPassword
          navigate={(path) => {
            router.push(path);
          }}
        />
      </Box>
    </Container>
  );
}
