import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music App",
  description: "Listen music for free",
};

export default function RootLayout(props: {
  children: React.ReactNode;
  Auth: React.ReactNode;
  Home: React.ReactNode;
}): JSX.Element {
  const loggedIn = true;
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{loggedIn ? props.Home : props.Auth}</main>
      </body>
    </html>
  );
}
