import type { Metadata } from "next";
import React from "react";
import Nav from "../components/Nav";

export const metadata: Metadata = {
  title: "Feel !t",
  description: "Listen music for free",
};

export default function Layout(props: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div>
      <Nav />
      {props.children}
    </div>
  );
}