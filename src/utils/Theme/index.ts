"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0052cc",
    },
    secondary: {
      main: "#edf2ff",
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
