"use client";

import { BOXSHADOW_1 } from "@/src/constants";
import {
  Box,
  Button,
  InputLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import styled from "@emotion/styled";
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

const UserSignup = ({ navigate }: UserSignupProps): JSX.Element => {
  const [loading, setLoading] = React.useState(false);

  const onSignup = async (values: {
    email: string;
    password: string;
  }): Promise<void> => {
    try {
      setLoading(true);
      await axios.post("/api/users/signup", values);
      toast.success("Signup success");
    } catch (err) {
      const error = err as {
        response: { data: { error: string } };
        message: string;
        status: number;
      };
      toast.error(error?.response?.data?.error || error.message);
    } finally {
      setLoading(false);
      navigate("/");
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await onSignup(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form style={{ width: "100%" }}>
          <StyledRootBox data-testid="signup-root">
            <Typography>{loading ? "Processing" : "Signup"}</Typography>
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
              data-testid="signup-button"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing up..." : "Signup"}
            </Button>
            <Box display={"flex"} justifyContent="space-between">
              <Link data-testid="login-page-button" href="/">
                Visit login page
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

export default UserSignup;
