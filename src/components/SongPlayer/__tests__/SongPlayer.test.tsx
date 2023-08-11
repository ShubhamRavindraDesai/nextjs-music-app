import SongPlayer from "@/src/components/SongPlayer";
import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { INITIAL_SONG } from "@/src/constants";

describe("Song Player component", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mockUseRef = (obj: any) => () =>
    Object.defineProperty({}, "current", {
      get: () => obj,
      set: () => {
        ("");
      },
    });

  const mockAudioRef = mockUseRef({ refFunction: jest.fn() });
  it("should render Song player component with all inner components", () => {
    const { getByTestId } = render(
      <SongPlayer
        currentSong={INITIAL_SONG}
        volume={0}
        handlePrevButtonClick={() => {
          ("");
        }}
        togglePlay={() => {
          ("");
        }}
        isPlaying={false}
        handleNextButtonClick={() => {
          ("");
        }}
        trackTime={0}
        handleTrackChange={function (newValue: number | number[]): void {
          ("");
        }}
        handleVolumeChange={function (newValue: number): void {
          ("");
        }}
        toggleVolume={() => {
          ("");
        }}
        audioRef={mockAudioRef}
        updateTime={jest.fn}
      />
    );

    const rootElement = getByTestId("song-player-root");
    const detailsElement = getByTestId("details");
    const imageElement = getByTestId("image");
    const songNameElement = getByTestId("song-name");
    const controlsElement = getByTestId("controls");
    const volumeSliderElement = getByTestId("volume-box");
    const audioElement = getByTestId("audio-el");

    const elements = [
      rootElement,
      detailsElement,
      imageElement,
      songNameElement,
      controlsElement,
      volumeSliderElement,
      audioElement,
    ];
    elements.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });
  it("should call handleNextButtonclick function on  next button click", async () => {
    const mockfn = jest.fn();
    const mockFunction = jest.fn();
    const { getByTestId } = render(
      <SongPlayer
        currentSong={INITIAL_SONG}
        volume={0}
        handlePrevButtonClick={mockFunction}
        togglePlay={mockFunction}
        isPlaying={false}
        handleNextButtonClick={mockfn}
        trackTime={0}
        handleTrackChange={mockFunction}
        handleVolumeChange={mockFunction}
        toggleVolume={mockFunction}
        audioRef={mockAudioRef}
        updateTime={mockFunction}
      />
    );
    const buttonEl = getByTestId("next-button");
    expect(buttonEl).toBeInTheDocument();

    fireEvent.click(buttonEl);
    expect(mockfn).toBeCalled();
  });

  it("should call handlePrevButtonclick function on  prev button click", async () => {
    const mockfn = jest.fn();
    const mockFunction = jest.fn();
    const { getByTestId } = render(
      <SongPlayer
        currentSong={INITIAL_SONG}
        volume={0}
        handlePrevButtonClick={mockfn}
        togglePlay={mockFunction}
        isPlaying={false}
        handleNextButtonClick={mockFunction}
        trackTime={0}
        handleTrackChange={mockFunction}
        handleVolumeChange={mockFunction}
        toggleVolume={mockFunction}
        audioRef={mockAudioRef}
        updateTime={mockFunction}
      />
    );
    const buttonEl = getByTestId("prev-button");
    expect(buttonEl).toBeInTheDocument();

    fireEvent.click(buttonEl);
    expect(mockfn).toBeCalled();
  });

  it("should call togglePlay function on  play button click", async () => {
    const mockfn = jest.fn();
    const mockFunction = jest.fn();
    const { getByTestId } = render(
      <SongPlayer
        currentSong={INITIAL_SONG}
        volume={0}
        handlePrevButtonClick={mockFunction}
        togglePlay={mockfn}
        isPlaying={false}
        handleNextButtonClick={mockFunction}
        trackTime={0}
        handleTrackChange={mockFunction}
        handleVolumeChange={mockFunction}
        toggleVolume={mockFunction}
        audioRef={mockAudioRef}
        updateTime={mockFunction}
      />
    );
    const buttonEl = getByTestId("play-button");
    expect(buttonEl).toBeInTheDocument();

    fireEvent.click(buttonEl);
    expect(mockfn).toBeCalled();
  });

  it("should call handleTrackChange function on  track slider change", async () => {
    const mockfn = jest.fn();
    const mockFunction = jest.fn();
    const { getByLabelText } = render(
      <SongPlayer
        currentSong={INITIAL_SONG}
        volume={0}
        handlePrevButtonClick={mockFunction}
        togglePlay={mockFunction}
        isPlaying={false}
        handleNextButtonClick={mockFunction}
        trackTime={0}
        handleTrackChange={mockfn}
        handleVolumeChange={mockFunction}
        toggleVolume={mockFunction}
        audioRef={mockAudioRef}
        updateTime={mockFunction}
      />
    );
    const sliderEl = getByLabelText("Track slider");
    expect(sliderEl).toBeInTheDocument();

    fireEvent.change(sliderEl, { target: { value: 10 } });
    expect(mockfn).toBeCalled();
  });
  it("should call handleVolumeChange function on  volume slider change", async () => {
    const mockfn = jest.fn();
    const mockFunction = jest.fn();
    const { getByLabelText } = render(
      <SongPlayer
        currentSong={INITIAL_SONG}
        volume={0}
        handlePrevButtonClick={mockFunction}
        togglePlay={mockFunction}
        isPlaying={false}
        handleNextButtonClick={mockFunction}
        trackTime={0}
        handleTrackChange={mockFunction}
        handleVolumeChange={mockfn}
        toggleVolume={mockFunction}
        audioRef={mockAudioRef}
        updateTime={mockFunction}
      />
    );
    const sliderEl = getByLabelText("Volume slider");
    expect(sliderEl).toBeInTheDocument();

    fireEvent.change(sliderEl, { target: { value: 10 } });
    expect(mockfn).toBeCalled();
  });

  it("should show pause icon when song is playing", async () => {
    const mockFunction = jest.fn();
    const { getByTestId } = render(
      <SongPlayer
        currentSong={INITIAL_SONG}
        volume={0}
        handlePrevButtonClick={mockFunction}
        togglePlay={mockFunction}
        isPlaying={true}
        handleNextButtonClick={mockFunction}
        trackTime={0}
        handleTrackChange={mockFunction}
        handleVolumeChange={mockFunction}
        toggleVolume={mockFunction}
        audioRef={mockAudioRef}
        updateTime={mockFunction}
      />
    );
    const sliderEl = getByTestId("pause-icon");
    expect(sliderEl).toBeInTheDocument();
  });
});
