import SongPlayer from "@/src/components/SongPlayer";
import store from "@/src/ducks/store";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";

describe("Song Player component", () => {
  test("renders Song player component with all inner components", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <SongPlayer />
      </Provider>
    );

    const rootElement = getByTestId("song-player-root");
    const detailsElement = getByTestId("details");
    const imageElement = getByTestId("image");
    const songNameElement = getByTestId("song-name");
    const controlsElement = getByTestId("controls");
    const volumeSliderElement = getByTestId("volume-slider");
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
});
