"use client";

import React from "react";
import { Container } from "@mui/material";
import UserSignup from "@/src/components/UserSignup";
import { useRouter } from "next/navigation";

export default function SignupPage(): React.JSX.Element {
  const router = useRouter();
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UserSignup
        navigate={(path) => {
          router.push(path);
        }}
      />
    </Container>
  );
}
