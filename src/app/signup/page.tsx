"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import UserSignup from "@/src/components/UserSignup";
import { useRouter } from "next/navigation";
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
    </StyledContainer>
  );
}
