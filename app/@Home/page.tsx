"use client";
import React from "react";
import Link from "next/link";

const Home = (): JSX.Element => {
  return (
    <div>
      <div>Home</div>
      <Link href={"/songs"} style={{ backgroundColor: "green" }}>
        Go to songs
      </Link>
    </div>
  );
};

export default Home;
