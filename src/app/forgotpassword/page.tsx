"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Container } from "@mui/material";
import ForgotPassword from "@/src/components/ForgotPassword";

export default function ForgotPasswordPage(): React.JSX.Element {
  const router = useRouter();

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        position: "fixed",
        top: "25%",
      }}
    >
      <ForgotPassword
        navigate={(path) => {
          router.push(path);
        }}
      />
    </Container>
  );
}
