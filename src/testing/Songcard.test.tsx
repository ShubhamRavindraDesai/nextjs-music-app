import SongCard from "@/src/components/SongCard";
import { mockSongData } from "@/src/constants";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import store from "../ducks/store";

describe("The card component tests", () => {
  it("The card should be in the document", () => {
    render(
      <Provider store={store}>
        <SongCard
          navigate={(path: string) => {
            ("");
          }}
          song={mockSongData}
        />
      </Provider>
    );
    expect(screen.getByTestId("card")).toBeInTheDocument();
  });

  it("The card image should be in the document", () => {
    render(
      <Provider store={store}>
        <SongCard
          navigate={(path: string) => {
            ("");
          }}
          song={mockSongData}
        />
      </Provider>
    );
    expect(screen.getByTestId("image")).toBeInTheDocument();
  });

  it("The song name  should be in the document", () => {
    render(
      <Provider store={store}>
        <SongCard
          navigate={(path: string) => {
            ("");
          }}
          song={mockSongData}
        />
      </Provider>
    );
    expect(screen.getByTestId("song-name")).toBeInTheDocument();
  });

  it("The artist name should be in the document", () => {
    render(
      <Provider store={store}>
        <SongCard
          navigate={(path: string) => {
            ("");
          }}
          song={mockSongData}
        />
      </Provider>
    );
    expect(screen.getByTestId("artist-name")).toBeInTheDocument();
  });

  it("The play button should be in the document", () => {
    render(
      <Provider store={store}>
        <SongCard
          navigate={(path: string) => {
            ("");
          }}
          song={mockSongData}
        />
      </Provider>
    );
    expect(screen.getByTestId("play-button")).toBeInTheDocument();
  });

  it("The like button should be in the document", () => {
    render(
      <Provider store={store}>
        <SongCard
          navigate={(path: string) => {
            ("");
          }}
          song={mockSongData}
        />
      </Provider>
    );
    expect(screen.getByTestId("like-button")).toBeInTheDocument();
  });
});
