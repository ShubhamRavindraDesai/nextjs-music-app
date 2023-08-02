"use client";

import Nav from "@/components/Nav";
import SongPlayer from "@/components/SongPlayer";
import store from "@/src/ducks/store";
import React from "react";
import { Provider } from "react-redux";

export default function Layout(props: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div>
      <Provider store={store}>
        <Nav />
        {props.children}
        <SongPlayer />
      </Provider>
    </div>
  );
}
