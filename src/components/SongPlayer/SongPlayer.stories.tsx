import { mockSong } from "@/src/constants";
import store from "@/src/ducks/store";
import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import SongPlayer from ".";
import React from "react";

const componentSongPlayer = (): JSX.Element => {
  return (
    <Provider store={store}>
      <SongPlayer />
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
