import SongCard from "@/src/components/SongCard";
import { mockSongData } from "@/src/constants";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

describe("The card component tests", () => {
  it("The card should be in the document", () => {
    render(
      <SongCard
        navigate={(path: string) => {
          ("");
        }}
        song={mockSongData}
      />
    );
    expect(screen.getByTestId("card")).toBeInTheDocument();
    expect(screen.getByTestId("song-name")).toBeInTheDocument();
    expect(screen.getByTestId("artist-name")).toBeInTheDocument();
    expect(screen.getByTestId("image")).toBeInTheDocument();
  });

  it("should call the navigate function over the onclick", () => {
    const mockFn = jest.fn((path: string) => {
      ("");
    });
    render(<SongCard navigate={mockFn} song={mockSongData} />);
    const cardEl = screen.getByTestId("card");
    fireEvent.click(cardEl);
    expect(mockFn).toBeCalled();
  });
});
