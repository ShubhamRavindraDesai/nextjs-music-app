"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import UserSignup from "@/src/components/UserSignup";
import { useRouter } from "next/navigation";
import styled from "@emotion/styled";
import { Toaster } from "react-hot-toast";

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  height: 100vh;
`;

const StyledBox = styled(Box)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export default function SignupPage(): React.JSX.Element {
  const router = useRouter();
  return (
    <StyledContainer>
      <Typography variant="h2">NextJS Music App</Typography>
      <StyledBox>
        <UserSignup
          navigate={(path) => {
            router.push(path);
          }}
        />
      </StyledBox>
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
    </StyledContainer>
  );
}
