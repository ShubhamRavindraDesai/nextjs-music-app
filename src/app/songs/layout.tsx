"use client";

import Nav from "@/components/Nav";
import SongPlayer from "@/components/SongPlayer";
import store from "@/src/ducks/store";
import { useRouter } from "next/navigation";
import React from "react";
import { Provider } from "react-redux";

export default function Layout(props: {
  children: React.ReactNode;
}): JSX.Element {
  const router = useRouter();
  return (
    <div>
      <Provider store={store}>
        <Nav navigate={router.push} />
        {props.children}
        <SongPlayer />
      </Provider>
    </div>
  );
}
