"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Nav from "../Nav";

const Header = (): JSX.Element => {
  const router = useRouter();
  return <Nav navigate={router.push} />;
};

export default Header;
