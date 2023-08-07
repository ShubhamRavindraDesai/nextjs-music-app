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
