"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Box, Container, Typography } from "@mui/material";
import ForgotPassword from "@/src/components/ForgotPassword";
import styled from "@emotion/styled";
import axios from "axios";
import toast from "react-hot-toast";

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

export default function ForgotPasswordPage(): React.JSX.Element {
  const router = useRouter();

  const onForgotPassword = async (values: { email: string }): Promise<void> => {
    try {
      await axios.post("/api/users/forgotpassword", values);
      router.push("/");
    } catch (err) {
      const error = err as { message: string; status: number };
      toast.error(error.message);
    }
  };

  return (
    <StyledContainer>
      <Typography variant="h3">NextJS Music App</Typography>
      <StyledBox>
        <ForgotPassword onForgotPassword={onForgotPassword} />
      </StyledBox>
    </StyledContainer>
  );
}
