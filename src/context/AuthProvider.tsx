"use client";

import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <ClerkProvider>{children}</ClerkProvider>;
}
