"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2a9461",
    },
    secondary: {
      main: "#494c7d",
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
