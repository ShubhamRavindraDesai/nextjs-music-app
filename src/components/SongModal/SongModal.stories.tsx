import { mockSong } from "@/src/constants";
import store from "@/src/ducks/store";
import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import SongModal from ".";
import React from "react";

const component = (): JSX.Element => {
  return (
    <Provider store={store}>
      <SongModal song={mockSong} songId={mockSong.id} />
    </Provider>
  );
};

const meta = {
  title: "Example/SongModal",
  component: component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SongModalPrimary: Story = {
  args: { song: mockSong, songId: mockSong.id },
};
