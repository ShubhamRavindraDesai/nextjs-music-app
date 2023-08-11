import { INITIAL_SONG, mockSong } from "@/src/constants";
import store from "@/src/ducks/store";
import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import SongPlayer from ".";
import React from "react";

const componentSongPlayer = (): JSX.Element => {
  return (
    <Provider store={store}>
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
        audioRef={undefined}
        updateTime={() => {
          ("");
        }}
      />
    </Provider>
  );
};

const meta = {
  title: "Example/SongPlayer",
  component: componentSongPlayer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof componentSongPlayer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SongPlayerPrimary: Story = {
  args: { song: mockSong, songId: mockSong.id },
};
