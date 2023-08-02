import SongCard from "@/components/SongCard";
import { mockSongData } from "@/src/constants";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

describe("The card component tests", () => {
  it("The card should be in the document", () => {
    render(<SongCard song={mockSongData} />);
    expect(screen.getByTestId("card")).toBeInTheDocument();
  });

  it("The card image should be in the document", () => {
    render(<SongCard song={mockSongData} />);
    expect(screen.getByTestId("image")).toBeInTheDocument();
  });

  it("The song name  should be in the document", () => {
    render(<SongCard song={mockSongData} />);
    expect(screen.getByTestId("song-name")).toBeInTheDocument();
  });

  it("The artist name should be in the document", () => {
    render(<SongCard song={mockSongData} />);
    expect(screen.getByTestId("artist-name")).toBeInTheDocument();
  });

  it("The play button should be in the document", () => {
    render(<SongCard song={mockSongData} />);
    expect(screen.getByTestId("play-button")).toBeInTheDocument();
  });

  it("The like button should be in the document", () => {
    render(<SongCard song={mockSongData} />);
    expect(screen.getByTestId("like-button")).toBeInTheDocument();
  });
});
