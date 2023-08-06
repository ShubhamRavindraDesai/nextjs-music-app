"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Toaster } from "react-hot-toast";
import { Container } from "@mui/material";
import UserSignIn from "@/src/components/UserSignIn";

export default function LoginPage(): JSX.Element {
  const router = useRouter();

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UserSignIn
        navigate={(path) => {
          router.push(path);
        }}
      />
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
