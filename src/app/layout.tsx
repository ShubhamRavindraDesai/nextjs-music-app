import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import theme from "@/utils/Theme";
import { ThemeProvider } from "@mui/material";
import { ClerkProvider, currentUser } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music App",
  description: "Listen music for free",
};

export default async function RootLayout(props: {
  children: React.ReactNode;
  Auth: React.ReactNode;
  Home: React.ReactNode;
}): Promise<JSX.Element> {
  const user = await currentUser();
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <ThemeProvider theme={theme}>
            <main>{user ? props.Home : props.Auth}</main>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
