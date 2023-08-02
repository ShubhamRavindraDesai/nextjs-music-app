"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#F8AFA6",
      main: "#F79489",
      dark: "#96969B",
      contrastText: "#C3C3C5",
    },
    secondary: {
      light: "#F9F1F0",
      main: "#F5F5F5",
      dark: "#313131",
      contrastText: "#E72C30",
    },
  },
  breakpoints: {
    values: {
      xs: 425,
      sm: 600,
      md: 850,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
