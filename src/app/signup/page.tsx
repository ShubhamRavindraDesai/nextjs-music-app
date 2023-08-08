"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import UserSignup from "@/src/components/UserSignup";
import { useRouter } from "next/navigation";

export default function SignupPage(): React.JSX.Element {
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
      <Typography variant="h2">NextJS Music App</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
        }}
      >
        <UserSignup
          navigate={(path) => {
            router.push(path);
          }}
        />
      </Box>
    </Container>
  );
}
