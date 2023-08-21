"use client";
import { BOXSHADOW_1 } from "@/src/constants";
import styled from "@emotion/styled";
import { Box, Typography, InputLabel, TextField, Button } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "./helper";

const StyledRootBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 20px;
  border-radius: 10px;
  box-shadow: ${BOXSHADOW_1};
  padding: 8px;
`;
const StyledErrorMessage = styled(ErrorMessage)`
  color: red !important;
  font-size: 14px;
  margin-top: 4px;
`;

const UserSignIn = ({ navigate }: UserSignInProps): JSX.Element => {
  const [loading, setLoading] = React.useState(false);

  const onLogin = async (values: {
    email: string;
    password: string;
  }): Promise<void> => {
    try {
      setLoading(true);
      await axios.post("/api/users/signin", values);

      toast.success("Login success");
      navigate("/songs");
    } catch (err) {
      const error = err as {
        response: { data: { error: string } };
        message: string;
        status: number;
      };
      toast.error(error?.response?.data?.error || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await onLogin(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form style={{ width: "100%" }}>
          <StyledRootBox data-testid="signin-root">
            <Typography>{loading ? "Processing" : "Login"}</Typography>
            <hr />

            <InputLabel htmlFor="email">Email</InputLabel>
            <Field
              data-testid="email-input"
              type="text"
              name="email"
              as={TextField}
              placeholder="Email"
            />
            <div style={{ color: "red" }}>
              <StyledErrorMessage name="email" />
            </div>

            <InputLabel htmlFor="password">Password</InputLabel>
            <Field
              data-testid="password-input"
              type="password"
              name="password"
              as={TextField}
              placeholder="Password"
            />
            <div style={{ color: "red" }}>
              <StyledErrorMessage name="password" />
            </div>

            <Button
              data-testid="login-button"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging in..." : "Login here"}
            </Button>
            <Box display={"flex"} justifyContent="space-between">
              <Link data-testid="signup-page-button" href="/signup">
                Visit Signup page
              </Link>
              <Link
                data-testid="forgot-password-page-button"
                href="/forgotpassword"
              >
                Forgot Password
              </Link>
            </Box>
          </StyledRootBox>
        </Form>
      )}
    </Formik>
  );
};

export default UserSignIn;
