import SongCard from "@/components/SongCard";
import { mockSongData } from "@/constants";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

let songIsPlaying = false;

const mockFunction = (): void => {
  songIsPlaying = true;
};

describe("The card component tests", () => {
  it("The card should be in the document", () => {
    render(
      <SongCard
        song={mockSongData}
        songIsPlaying={songIsPlaying}
        togglePlay={mockFunction}
      />
    );
    expect(screen.getByTestId("card")).toBeInTheDocument();
  });

  it("The card image should be in the document", () => {
    render(
      <SongCard
        song={mockSongData}
        songIsPlaying={songIsPlaying}
        togglePlay={mockFunction}
      />
    );
    expect(screen.getByTestId("image")).toBeInTheDocument();
  });

  it("The song name  should be in the document", () => {
    render(
      <SongCard
        song={mockSongData}
        songIsPlaying={songIsPlaying}
        togglePlay={mockFunction}
      />
    );
    expect(screen.getByTestId("song-name")).toBeInTheDocument();
  });

  it("The artist name should be in the document", () => {
    render(
      <SongCard
        song={mockSongData}
        songIsPlaying={songIsPlaying}
        togglePlay={mockFunction}
      />
    );
    expect(screen.getByTestId("artist-name")).toBeInTheDocument();
  });

  it("The play button should be in the document", () => {
    render(
      <SongCard
        song={mockSongData}
        songIsPlaying={songIsPlaying}
        togglePlay={mockFunction}
      />
    );
    expect(screen.getByTestId("play-button")).toBeInTheDocument();
  });

  it("The like button should be in the document", () => {
    render(
      <SongCard
        song={mockSongData}
        songIsPlaying={songIsPlaying}
        togglePlay={mockFunction}
      />
    );
    expect(screen.getByTestId("like-button")).toBeInTheDocument();
  });

  it("On play button click songIsPlaying state should be false", async () => {
    render(
      <SongCard
        song={mockSongData}
        songIsPlaying={songIsPlaying}
        togglePlay={mockFunction}
      />
    );
    const playbuttonElement = screen.getByTestId("play-button");
    await userEvent.click(playbuttonElement);
    expect(songIsPlaying).toBeTruthy();
  });
});
