"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Box, Container, Typography } from "@mui/material";
import UserSignIn from "@/src/components/UserSignIn";
import styled from "@emotion/styled";

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

export default function LoginPage(): JSX.Element {
  const router = useRouter();
  const navigate = (path: string): void => {
    router.push(path);
  };

  return (
    <StyledContainer data-testid="login-page">
      <Typography data-testid="heading" variant="h2">
        NextJS Music App
      </Typography>
      <StyledBox data-testid="user-signin-comp">
        <UserSignIn navigate={navigate} />
      </StyledBox>
    </StyledContainer>
  );
}
