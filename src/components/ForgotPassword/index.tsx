"use client";
import styled from "@emotion/styled";
import { Box, Typography, Button, InputLabel, TextField } from "@mui/material";
import Link from "next/link";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { BOXSHADOW_1 } from "@/src/constants";
import { validationSchema } from "./helper";

const StlyedRootBox = styled(Box)`
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

export default function ForgotPassword({
  onForgotPassword,
}: ForgotPasswordProps): JSX.Element {
  const initialValues = {
    email: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await onForgotPassword(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form style={{ width: "100%" }}>
          <StlyedRootBox data-testid="forgot-password-root-box">
            <Typography data-testid="title">
              {isSubmitting ? "Processing" : "Forgot Password"}
            </Typography>
            <hr />
            <InputLabel data-testid="email-label" htmlFor="email">
              email
            </InputLabel>
            <Field
              data-testid="email-input"
              type="text"
              name="email"
              as={TextField}
              placeholder="Email"
            />
            <div style={{ color: "red" }}>
              <StyledErrorMessage data-testid="email-error" name="email" />
            </div>
            <Button
              data-testid="forgot-password-button"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Forgot Password"}
            </Button>
            <Box display={"flex"} justifyContent="space-between">
              <Link data-testid="login-page-button" href="/">
                Visit login page
              </Link>
              <Link data-testid="signup-page-button" href="/signup">
                Visit sign up page
              </Link>
            </Box>
          </StlyedRootBox>
        </Form>
      )}
    </Formik>
  );
}
