"use client";
import React, { useEffect } from "react";
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
  const [user, setUser] = React.useState({
    email: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onForgotPassword = async (): Promise<void> => {
    try {
      setLoading(true);
      await axios.post("/api/users/forgotpassword", user);
      router.push("/");
    } catch (err) {
      const error = err as { message: string; status: number };
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  const setEmail = (user: { email: string }): void => {
    setUser(user);
  };

  useEffect(() => {
    if (user.email.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <StyledContainer>
      <Typography variant="h3">NextJS Music App</Typography>
      <StyledBox>
        <ForgotPassword
          user={user}
          setUser={setEmail}
          loading={loading}
          buttonDisabled={buttonDisabled}
          onForgotPassword={onForgotPassword}
        />
      </StyledBox>
    </StyledContainer>
  );
}
