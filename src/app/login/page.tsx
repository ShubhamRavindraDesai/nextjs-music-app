"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Toaster } from "react-hot-toast";
import { Box, Container, Typography } from "@mui/material";
import UserSignIn from "@/src/components/UserSignIn";

export default function LoginPage(): JSX.Element {
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
        <UserSignIn
          navigate={(path) => {
            router.push(path);
          }}
        />
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
