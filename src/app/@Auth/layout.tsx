import React from "react";

export default function Layout(props: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {props.children}
    </div>
  );
}
