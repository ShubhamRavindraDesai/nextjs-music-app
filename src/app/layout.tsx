import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import theme from "@/utils/Theme";
import { ThemeProvider } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music App",
  description: "Listen music for free",
};

export default async function RootLayout(props: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <main>{props.children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
