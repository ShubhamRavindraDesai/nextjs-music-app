import type { Meta, StoryObj } from "@storybook/react";
import LazyImage from ".";

const meta = {
  title: "Example/LazyImage",
  component: LazyImage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof LazyImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LazyImagePrimary: Story = {
  args: {
    url: "https://is1-ssl.mzstatic.com/image/thumb/Music/4a/5d/59/mzi.gmyalanw.jpg/500x500bb.jpg",
  },
};
